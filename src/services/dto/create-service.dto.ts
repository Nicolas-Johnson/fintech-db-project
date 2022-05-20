import { IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty({
    message: 'O campo serviço é obrigatorio!',
  })
  service: string;
}
