import { Body, Controller, Post, Res } from '@nestjs/common';
import { ToDo } from '@prisma/client';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

import { CreateToDoDto } from 'src/dto/toDo.dto';
import { ToDoService } from './to-do.service';

@Controller('to-do')
export class ToDoController {

  constructor(
    private toDoService: ToDoService,
    private authService: AuthService,
  ) {}

  /** toDo 등록 */
  @Post('new')
  async createToDo(
    @Body() createToDoDto: CreateToDoDto,
    @Res() res: Response<{ success: boolean; toDo: Partial<ToDo>; message: string; }>,
  ) {
    const { userId, toDo } = createToDoDto

    const user = await this.authService.findUserByUserId(userId)

    const newToDo = await this.toDoService.createToDo(user, toDo)

    if(newToDo) {
      res.json({
        success: true,
        toDo: newToDo,
        message: '',
      })

      return
    }
    res.json({
      success: false,
      toDo: null,
      message: '',
    })
  }

}
