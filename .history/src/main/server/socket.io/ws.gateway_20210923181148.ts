import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
} from "@nestjs/websockets";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@WebSocketGateway(30001)
export class EventsGateway {
  @WebSocketServer() server;

  // 房间
  @SubscribeMessage("hut1")
  hut1(client: any, __From: any): Observable<WsResponse<any>> | any{
    __From.name === 'anticipate' &&
    client.emit(
      "hut1",
      `通道hut1连接成功!，服务地址为${client.handshake.headers.host}`
    );
    __From.__type === 'text' &&
    setInterval(() => {
      client.emit(
        "hut1",
        `${__From.__value}`
      );
    },3000)
  }
  @SubscribeMessage("hut2")
  hut2(client: any, __From: any): Observable<WsResponse<any>> | any{
    __From.name === 'anticipate' &&
    client.emit(
      "hut2",
      `通道hut2连接成功!，服务地址为${client.handshake.headers.host}`
    );
    __From.__type === 'text' &&
    client.broadcast.emit(
      "hut2",
      `${__From.__value}`
    );
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
