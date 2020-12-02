import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {
  constructor (@Inject('PUB_SUB') private readonly client: ClientProxy) {
  }

  getHello(): object {
    const message = {
      content: 'Hello World!'
    }
    this.client.emit('greeted', message)
    return message
  }
}
