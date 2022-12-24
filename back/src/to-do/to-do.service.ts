import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, ToDoStatus, User } from '@prisma/client';

@Injectable()
export class ToDoService {

  private prisma = new PrismaClient()

  /** create new toDo */
  async createToDo(user: User, toDoContent: string) {
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

}
