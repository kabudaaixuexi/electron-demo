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
@WebSocketGateway(30001)
export class EventsGateway implements OnGatewayInit{
  // @WebSocketServer() server;
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('chatGetWay')
  
  afterInit(server: any) {
    this.logger.log('chatGetway')
  }
  // 房间
  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, state: {__sender: string,__source: string, __message: string }) {
    console.log('收到消息')
    this.wss.to(state.__source).emit('chatToClient',state)
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client:Socket, state: any){
    client.join(state.__source);
    client.emit('joinRoom', state)
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client:Socket,state: any){
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
