import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Major } from './entities/major.entity';

@Injectable()
export class MajorsService {
  constructor(
    @InjectModel(Major)
    private majorModel: typeof Major,
  ) {}

  create(createMajorDto: CreateMajorDto) {
    return this.majorModel.create({...createMajorDto});
  }

  findAll() {
    return this.majorModel.findAll();
  }

  findOne(id: number) {
    return this.majorModel.findByPk(id);
  }

  update(id: number, updateMajorDto: UpdateMajorDto) {
    return this.majorModel.update(updateMajorDto,{where:{id}});
  }

  remove(id: number) {
    return this.majorModel.destroy({where:{id}});
  }
}
