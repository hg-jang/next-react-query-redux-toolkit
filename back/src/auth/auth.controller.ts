import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
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
  @Get()
  logIn() {

  }

  /** 로그 아웃 */
  @Delete()
  logOut() {

  }
}
