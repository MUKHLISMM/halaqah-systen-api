import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCatagoryDto } from './dto/create-catagory.dto';
import { UpdateCatagoryDto } from './dto/update-catagory.dto';
import { Category } from './entities/catagory.entity';

@Injectable()
export class CatagoryService {
  constructor(
    @InjectModel(Category)
    private majorCategory: typeof Category,
  ) {}

  create(createCatagoryDto: CreateCatagoryDto) {
    return this.majorCategory.create({...createCatagoryDto});
  }

  findAll() {
    return this.majorCategory.findAll();
  }

  findOne(id: number) {
    return this.majorCategory.findByPk(id);
  }

  update(id: number, updateCatagoryDto: UpdateCatagoryDto) {
    return this.majorCategory.update(updateCatagoryDto,{where:{id}});
  }

  remove(id: number) {
    return this.majorCategory.destroy({where:{id}});
  }
}
