import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Socket,Server} from 'socket.io'
@WebSocketGateway({namespace:'/chat'})
export class ChatGateway implements OnGatewayInit {
  
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('chatGetWay')
  
  afterInit(server: any) {
    this.logger.log('chatGetway')
  }
  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: {sender: string,room: string, message: string }) {
    this.wss.to(message.room).emit('chatToClient',message)
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(client:Socket,room:string){
    client.join(room);
    client.emit('joinRoom',room)
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(client:Socket,room:string){
    client.leave(room);
    client.emit('leftRoom',room)

  }
}