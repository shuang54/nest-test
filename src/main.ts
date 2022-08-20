import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。

// NestFactory 暴露了一些静态方法用于创建应用程序的实例。其中，create() 方法返回一个应用程序的对象，该对象实现了 INestApplication 接口。该对象还提供了一组方法，
// 这些方法将在接下来的章节中进行介绍。在上面的 main.ts 示例中，我们仅启动了 HTTP 侦听器，该侦听器使应用程序可以侦听入栈的 HTTP 请求。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
