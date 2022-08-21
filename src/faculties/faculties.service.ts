import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectModel(Faculty)
    private facultyModel: typeof Faculty,
  ) {}

  create(createFacultyDto: CreateFacultyDto) {
    return this.facultyModel.create({ ...createFacultyDto });
  }

  findAll() {
    return this.facultyModel.findAll({
      paranoid:false
    });
  }

  findOne(id: number) {
    return this.facultyModel.findByPk(id);
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return this.facultyModel.update(updateFacultyDto,{where:{id}});
  }

  remove(id: number) {
    return this.facultyModel.destroy({where:{id}});
  }
}
