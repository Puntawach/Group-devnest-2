import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumesService } from './columes.service';
import { CreateColumeDto } from './dto/create-colume.dto';
import { UpdateColumeDto } from './dto/update-colume.dto';

@Controller('columes')
export class ColumesController {
  constructor(private readonly columesService: ColumesService) {}

  @Post()
  create(@Body() createColumeDto: CreateColumeDto) {
    return this.columesService.create(createColumeDto);
  }

  @Get()
  findAll() {
    return this.columesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumeDto: UpdateColumeDto) {
    return this.columesService.update(+id, updateColumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columesService.remove(+id);
  }
}
