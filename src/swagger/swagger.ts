import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const setupSwagger = (app: INestApplication) => {
  const params = new DocumentBuilder()
    .setTitle('COINS.GAME')
    .setDescription('Cart solution')
    .setVersion('0.0.1')
    .build();

  const doc = SwaggerModule.createDocument(app, params);
  SwaggerModule.setup('', app, doc);
}
