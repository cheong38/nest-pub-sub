import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
      retryAttempts: 3,
      retryDelay: 3000
    }
  })

  await Promise.all([
    app.startAllMicroservices(),
    app.listen(3001)
  ]);
}
bootstrap();
