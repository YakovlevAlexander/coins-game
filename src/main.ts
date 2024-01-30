import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Coins')
    .setDescription('Coins game')
    .setVersion('0.0.1')
    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, doc);  

  await app.listen(3000);
}
bootstrap();
