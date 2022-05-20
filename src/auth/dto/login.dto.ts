import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({
    message: 'O campor E-mail é obrigatorio',
  })
  email: string;

  @IsNotEmpty({
    message: 'O campo SENHA é obrigaorio.',
  })
  password: string;
}
