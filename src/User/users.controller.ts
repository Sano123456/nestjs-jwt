import { Controller } from '@nestjs/common';
import { AuthService } from 'src/Auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly authService: AuthService,
    ) {
        
    }
}
