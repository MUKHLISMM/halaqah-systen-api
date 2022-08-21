import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
constructor(
  @InjectModel(Admin)
  private adminModel : typeof Admin
){}

  create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create({...createAdminDto});
  }

  findAll() {
    return this.adminModel.findAll({
      paranoid:false
    }
    );
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.update(updateAdminDto, {where:{id}});
  }

  remove(id: number) {
    return this.adminModel.destroy({where:{id}});
  }
}
