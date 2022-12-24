import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client'

@Injectable()
export class AuthService {

  private prisma = new PrismaClient()

  /** User 생성 */
  async createUser(email: string, password: string, name: string): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password,
        name,
        updatedAt: new Date(),
      }
    })

    return newUser
  }

  /** Select User By Email */
  async findUserByEmail(email: string): Promise<Partial<User>> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        toDos: {
          select: {
            id: true,
            toDo: true,
            status: true,
          }
        }
      }
    })

    return user
  }

  async findUserByUserId(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      }
    })

    return user
  }

}
