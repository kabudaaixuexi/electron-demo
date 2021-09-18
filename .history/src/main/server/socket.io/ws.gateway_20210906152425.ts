import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'


@WebSocketGateway(30001)
export class EventsGateway {
  @WebSocketServer() server;

  @SubscribeMessage('identity')
  onIdentity(client: any, payload: any): Observable<WsResponse<any>> | any{
    const __FROM__DATA = JSON.parse(payload)
    console.log(payload);
    console.log(payload.events);
    console.log(__FROM__DATA);
    payload.name === 'success' && (()=>{return 'identity开始推送'})()
    switch (payload.name){
      case 'hey':
        // let count = 0
        // let Interval = setInterval(()=>{
        //   count ++ 
        //   console.log(count)
            return of({
              event: 'identity',
              data: {
                msg: 'hello identity!'
              }
            })
        // },1000)
      break;
      default:return of(payload);
    }
  }

  @SubscribeMessage('events')
  onEvent(client: any, payload: any): Observable<WsResponse<any>> | any {
    payload.name === 'success' && client.emit('events','events开始推送')
    
    switch (payload.name){
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
      default:return of(payload);
    }
  }

}