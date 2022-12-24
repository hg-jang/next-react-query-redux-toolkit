import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ToDoController],
  providers: [AppService, AuthService, ToDoService],
})
export class AppModule {}
