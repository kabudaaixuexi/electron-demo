import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
} from "@nestjs/websockets";
import { SocketService } from './socket.service';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {Socket,Server} from 'socket.io'
import { Logger } from '@nestjs/common';
interface DepNew {
  __sender: string // id
  __message: {
    __type: any
    __conn: any
    __nnew: boolean
  } // 消息内容
  __source: string // room
  __hasread: string[] // 已读id
  __date: number
}
@WebSocketGateway(30001)
export class EventsGateway implements OnGatewayInit{
  // @WebSocketServer() server;
  @WebSocketServer() wss: Server;
  private socketService = new SocketService()
  private logger: Logger = new Logger('chatGetWay')
  private computedHum:any[] = [] // 房间计数
  private depNews: DepNew[] = [] // 消息缓存
  afterInit(server: any) {
    this.logger.log('chatGetway')
  }
  // // 设置
  // @SubscribeMessage('config')
  // config(client: Socket, state: any) {
  //   console.log(state, '设置项');
  //   switch (state.name) {
  //     case 'save??':
  //       this.wss.use((socket: Socket, next) => {
  //         // console.log(socket);
  //         console.log('设置:::开启保存');
  //         // if (socket.request.headers.cookie) return next();
  //         // next(new Error('Authentication error'));
  //       });
  //       break
  //     default :;
  //   }
  // }
  // 房间
  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, state: any) {
    const filteState = {
      ...state,
      __hasread:[state.__sender],
      __date: Date.parse((new Date() as any))
    }
    // 加入消息缓存
    this.depNews.push(filteState)
    this.wss.to(state.__source).emit('chatToClient',state)
    console.log(this.depNews);
    console.log('收到消息', state)
    // 收到消息记录到文件
    this.socketService.recordChat({
      ...state,
      __date: Date.parse((new Date() as any))
    })
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client:Socket, state: any){
    let sign = false
    this.computedHum.length>0 && this.computedHum.map(v => {
      if (v.__sender === state.__sender && v.__source === state.__source) {
        sign = true
      } 
    })
    if (!sign) { // 避免重复房间出现重复客户端
      this.computedHum.push({
        ...state,
        id: client.id
      })
    }
    console.log('有人进入房间', this.computedHum);
    // 消息补发
    setTimeout(() => {
      this.depNews.map(v => {
        if (v.__hasread.indexOf(state.__sender) === -1 && Date.parse((new Date() as any)) - v.__date <= (1000 * 60 * 50 * 24 * 100)) {
          v.__hasread.push(state.__sender)
          // 给指定客户端补发
          this.wss.sockets.sockets.get(`${client.id}`).emit('chatToClient',{__sender:v.__sender,__message:v.__message,__source:v.__source, })
        }
      })
    },1000)
  
    client.join(state.__source);
    this.wss.to(state.__source).emit('joinRoom',state)
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client:Socket,state: any){
    console.log('离开房间');
    this.computedHum.map((v,index) => {
      if (v.__source === state.__source) {
        this.computedHum.splice(index, 1)
      }
    })
    console.log('有人离开房间', this.computedHum);

    client.leave(state.__source);
    client.emit('leaveRoom', state)
  }

  @SubscribeMessage("identity")
  onIdentity(client: any, __From: any): Observable<WsResponse<any>> | any {
    __From.name === "success" &&
      client.emit(
        "events",
        `通道identity连接成功!，服务地址为${client.handshake.headers.host}`
      );

    switch (__From.name) {
      case "hey":
        return of({
          event: "identity",
          data: {
            msg: "接收到来自客户端的信息并返回 " + "hello identity!",
          },
        });
        break;
      default:
        return of(__From);
    }
  }

  @SubscribeMessage("events")
  onEvent(client: any, __From: any): Observable<WsResponse<any>> | any {
    __From.name === "success" &&
      client.emit(
        "events",
        `通道events连接成功!，服务地址为${client.handshake.headers.host}`
      );

    switch (__From.name) {
      case "ajanuw":
        return of({
          event: "events",
          data: {
            msg: "hello ajanuw!",
          },
        });
        break;
      case "alone":
        return of("hi", "实打实").pipe(
          map(($_) => ({
            event: "events",
            data: {
              msg: $_,
            },
          }))
        );
        break;
      case "push":
        client.emit("events", { result: 0 });
        return of(
          { title: "push", msg: "first" },
          { title: "push", msg: "two" }
        ).pipe(
          map(($_) => ({
            event: "events",
            data: $_,
          }))
        );
        break;
      default:
        return of(__From);
    }
  }
}
