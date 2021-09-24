import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
} from "@nestjs/websockets";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {Socket,Server} from 'socket.io'
import { Logger } from '@nestjs/common';
interface DepNew {
  __sender: string // id
  __message: string // con
  __source: string // room
  __hasread: string[] // 已读id
}
@WebSocketGateway(30001)
export class EventsGateway implements OnGatewayInit{
  // @WebSocketServer() server;
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('chatGetWay')
  private computedHum:any[] = [] // 房间计数
  private depNews: DepNew[] = [] // 消息缓存
  
  afterInit(server: any) {
    this.logger.log('chatGetway')
  }
  // 房间
  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, state: any) {
    // 加入消息缓存，已读是本人
    this.depNews.push({
      ...state,
      __hasread:[state.__sender]
    })
    this.wss.to(state.__source).emit('chatToClient',state)
    console.log(this.depNews);
    console.log('收到消息', state)
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client:Socket, state: any){
    let sign = false
    this.computedHum.length>0 && this.computedHum.map(v => {
      if (v.__sender === state.__sender && v.__source === state.__source) {
        sign = true
      } 
    })
    !sign && this.computedHum.push(state)
    console.log('有人进入房间', this.computedHum);
    // 消息补发
    this.depNews.map(v => {
      if (v.__hasread.indexOf(state.__sender) === -1) {
        v.__hasread.push(state.__sender)
        setTimeout(() => {
          this.wss.to(v.__sender).emit('chatToClient',{__sender:v.__sender,__message:v.__message,__source:v.__source})
        },1000)
      }
    })
    client.join(state.__source);
    client.emit('joinRoom', state)
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client:Socket,state: any){
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
