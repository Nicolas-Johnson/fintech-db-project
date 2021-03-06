import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Campo NOME é obrigatorio!',
  })
  @IsString({
    message: ' ',
  })
  name: string;

  @IsNotEmpty({
    message: 'Campo EMAIL é obrigatorio!',
  })
  @IsEmail({
    message: 'Email deve conter @ e .com',
  })
  email: string;

  @IsNotEmpty({
    message: 'Campo SENHA é obrigatorio!',
  })
  @MinLength(8, {
    message: 'A senha deve conter no minimo 8 caracteres',
  })
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])/, {
    message:
      'A senha deve ter uma letra minuscula, uma letra maiuscula um numero de 0 a 9 e um caractere especial (@#$%).',
  })
  password: string;
}
