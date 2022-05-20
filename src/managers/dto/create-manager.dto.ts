import { IsNotEmpty } from 'class-validator';

export class CreateManagerDto {
  @IsNotEmpty({
    message: 'O campo Nome é obrigatorio!',
  })
  name: string;

  @IsNotEmpty({
    message: 'O campo Sobre Nome é obrigatorio!',
  })
  lastName: string;

  @IsNotEmpty({
    message: 'O campo Numero de Funcionario é obrigatorio!',
  })
  employeeNumber: number;
}
