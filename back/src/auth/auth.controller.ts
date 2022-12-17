import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}

  /** 계정 생성 */
  @Post('auth/new')
  signUp(
    @Body() email: string,
    @Body() password: string,
    @Body() name: string,
    @Res() res: Response<{ success: boolean }>,
  ) {
    const newUser = this.authService.createUser(email, password, name);

    if(newUser) {
      console.log('newUser', newUser)
      
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
  @Get('auth')
  logIn() {

  }

  /** 로그 아웃 */
  @Delete('auth')
  logOut() {

  }
}
