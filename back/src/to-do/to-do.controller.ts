import { Body, Controller, Delete, Param, Patch, Post, Res } from '@nestjs/common';
import { ToDo } from '@prisma/client';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

import { CreateToDoDto, DeleteToDoDto } from 'src/dto/toDo.dto';
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

  /** Todo 수정 */
  @Patch(':id')
  async updateToDo(
    @Param() params: { id: string },
    @Body() toDoDto: Partial<ToDo>,
    @Res() res: Response<{ success: boolean; message: string; }>
  ) {
    const updateToDo = await this.toDoService.updateToDoById(Number(params.id), toDoDto)

    if(updateToDo) {
      res.json({
        success: true,
        message: '',
      })
      return
    }

    res.json({
      success: false,
      message: '업데이트 실패!!',
    })
  }

  /** todo 삭제 */
  @Delete(':id')
  async deleteToDo(
    @Param() params: { id: string },
    @Res() res: Response<{ success: boolean; message: string; }>
  ) {
    const deleteToDo = await this.toDoService.deleteToDoById(Number(params.id))

    if(deleteToDo) {
      res.json({
        success: true,
        message: '',
      })
      return
    }

    res.json({
      success: false,
      message: '삭제 실패',
    })
  }

}
