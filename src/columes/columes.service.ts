import { Injectable } from '@nestjs/common';
import { CreateColumeDto } from './dto/create-colume.dto';
import { UpdateColumeDto } from './dto/update-colume.dto';

@Injectable()
export class ColumesService {
  create(createColumeDto: CreateColumeDto) {
    return 'This action adds a new colume';
  }

  findAll() {
    return `This action returns all columes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colume`;
  }

  update(id: number, updateColumeDto: UpdateColumeDto) {
    return `This action updates a #${id} colume`;
  }

  remove(id: number) {
    return `This action removes a #${id} colume`;
  }
}
