import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/User/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    forwardRef(() => UsersModule), 
    PassportModule
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[AuthService, LocalStrategy]
})
export class AuthModule {}
 