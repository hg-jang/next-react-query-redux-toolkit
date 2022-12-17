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

  getUser() {

  }

}
