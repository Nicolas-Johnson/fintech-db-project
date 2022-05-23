import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty({
    message: 'O campo Nome é obrigatorio!',
  })
  @IsString()
  name: string;

  @IsNotEmpty({
    message: 'O campo Sobrenome é obrigatorio!',
  })
  @IsString()
  lastName: string;

  @IsNotEmpty({
    message: 'O campo CPF é obrigatorio!',
  })
  @IsString()
  cpf: string;

  @IsNotEmpty({
    message: 'O campo E-mail é obrigatorio!',
  })
  @IsString()
  email: string;

  @IsNotEmpty({
    message: 'O campo Salario é obrigatorio!',
  })
  wage: number;

  @IsNotEmpty({
    message: 'O campo Cargo é obrigatorio!',
  })
  rule: number;

  @IsNotEmpty({
    message: 'O campo Horario é obrigatorio!',
  })
  timeTable: number;
}
