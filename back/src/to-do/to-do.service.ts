import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, ToDo, User } from '@prisma/client';

@Injectable()
export class ToDoService {

  private prisma = new PrismaClient()

  /** create new toDo */
  async createToDo(user: User, toDoContent: string): Promise<ToDo> {
    const author: Prisma.UserCreateNestedOneWithoutToDosInput = {
      connect: {
        id: user.id,
      }
    }
    
    const toDo = await this.prisma.toDo.create({
      data: {
        toDo: toDoContent,
        author: author,
        updatedAt: new Date(),
      }
    })

    return toDo
  }

  /** id로 투두 업데이트 */
  async updateToDoById(id: number, dto: Partial<ToDo>): Promise<ToDo> {
    const updateToDo = await this.prisma.toDo.update({
      where: {
        id: id,
      },
      data: dto,
    })

    return updateToDo
  }

  /** id로 투두 삭제 */
  async deleteToDoById(id: number): Promise<ToDo> {
    const deleteToDo = await this.prisma.toDo.delete({
      where: {
        id: id,
      }
    })

    return deleteToDo
  }

}
