import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/User/users.module';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[
    //UsersModule,
    forwardRef(() => UsersModule), 
    PassportModule
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports:[AuthService, LocalStrategy]
})
export class AuthModule {}
