import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      { name: 'PUB_SUB', transport: Transport.REDIS }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
