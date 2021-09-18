import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'


@WebSocketGateway(30001)
export class EventsGateway {
  @WebSocketServer() server;

  @SubscribeMessage('identity')
  onIdentity(client: any, __From: any): Observable<WsResponse<any>> | any{
      console.log(client);
      
    __From.name === 'success' && client.emit('events', `通道identity连接成功!，服务地址为${client.handshake.headers.host}`)
    switch (__From.name){
      case 'hey':
        // let count = 0
        // let Interval = setInterval(()=>{
        //   count ++ 
          console.log(111)
            return of({
              event: 'identity',
              data: {
                msg: 'hello identity!'
              }
            })
        // },1000)
      break;
      default:return of(__From);
    }
  }

  @SubscribeMessage('events')
  onEvent(client: any, __From: any): Observable<WsResponse<any>> | any {
    __From.name === 'success' && client.emit('events', `通道events连接成功!，服务地址为${client.handshake.headers.host}`)
    
    switch (__From.name){
      case 'ajanuw':
        return of({
          event: 'events',
          data: {
            msg: 'hello ajanuw!'
          }
        })
      break;
      case 'alone':
        return of('hi', '实打实')
        .pipe(
          map($_ =>
            ({
              event: 'events', data: {
                msg: $_
              }
            }))
        );
      break;
      case 'push':
        client.emit('events', {result:0});
        return of({title:'push',msg:'first'}, {title:'push',msg:'two'})
          .pipe(
            map($_ =>
              ({
                event: 'events', data: $_
              }))
          );
      break;
      default:return of(__From);
    }
  }

}