import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:{
    origin:'*',
    credentials:false
  }});
  app.useGlobalPipes(new ValidationPipe()); 
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('ActivitySystem')
    .setDescription('The Halaqah API description')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  await app.listen(5000);
}
bootstrap();
