import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //revome chaves que não estão no dto.
      forbidNonWhitelisted: true, //levanta erro quando a chave não existir
      transform: false, //tenta transofrmar os tipos de dados de param e dtos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
  //test
}
bootstrap();
