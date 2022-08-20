import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cat.moudle';
// T应用程序的根模块（root module）。
@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
