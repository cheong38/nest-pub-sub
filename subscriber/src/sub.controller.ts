import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Controller()
export class SubController {
  @EventPattern('greeted')
  async onGreeted(data: Record<string, unknown>) {
    console.log("received: ", data)
  }
}
