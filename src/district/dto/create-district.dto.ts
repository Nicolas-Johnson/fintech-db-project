import { IsNotEmpty } from 'class-validator';

export class CreateDistrictDto {
  @IsNotEmpty({
    message: 'O campo Bairro é Obrigatorio!',
  })
  name: string;
}
