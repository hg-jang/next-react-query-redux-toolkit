import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { User } from '@prisma/client';
import { Response } from 'express';
import { CreateAuthDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}

  /** 계정 생성 */
  @Post('new')
  async signUp(
    @Body() createAuthDto: CreateAuthDto,
    @Res() res: Response<{ success: boolean }>,
  ) {
    const { email, name, password } = createAuthDto
    const newUser = await this.authService.createUser(email, password, name)

    if(newUser) {
      res.json({
        success: true,
      })
      return
    }

    res.json({
      success: false,
    })
  }

  /** 로그 인 */
  @Post()
  async logIn(
    @Body() reqBody: { email: string; password: string },
    @Res() res: Response<{ success: boolean; user: User; message: string }>,
  ) {
    const { email, password } = reqBody

    const user = await this.authService.findUserByEmail(email)
    if(user && user.password === password) {
      res.json({
        success: true,
        user: user,
        message: '',
      })
      return
    }
    if(user && user.password !== password) {
      res.json({
        success: false,
        user: null,
        message: '비밀번호가 일치하지 않습니다.',
      })
      return
    }
    if(!user) {
      res.json({
        success: false,
        user: null,
        message: '일치하는 유저 정보가 없습니다.',
      })
      return
    }
  }

  /** 로그 아웃 */
  @Delete()
  logOut() {

  }
}
