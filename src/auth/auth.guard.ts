import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { DataBaseService } from 'src/database/database.service';
import { AuthType } from './auth.type';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private db: DataBaseService, private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const Authorization = request.headers['authorization'];

    if (!Authorization) {
      throw new UnauthorizedException('Usuario sem token');
    }

    try {
      const token = Authorization.split(' ')[1];

      this.jwtService.verify(token);

      const data = this.jwtService.decode(token) as AuthType;

      const user = await this.db.user.findUnique({
        where: {
          id: Number(data.id),
        },
      });
      if (!user) {
        throw new UnauthorizedException('Usuarion não encontrado.');
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }
}
