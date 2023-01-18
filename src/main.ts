import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupCors(app);
  const config = new DocumentBuilder()
    .setTitle('test example')
    .setDescription('The test API description')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);

  function setupCors(app:INestApplication){
    app.enableCors();
  }
  
}
bootstrap();
