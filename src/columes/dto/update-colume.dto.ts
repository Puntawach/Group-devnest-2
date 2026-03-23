import { PartialType } from '@nestjs/mapped-types';
import { CreateColumeDto } from './create-colume.dto';

export class UpdateColumeDto extends PartialType(CreateColumeDto) {}
