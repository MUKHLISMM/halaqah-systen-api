import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account
  ){}
  create(createAccountDto: CreateAccountDto) {
    return this.accountModel.create({...createAccountDto});
  }

  findAll() {
    return this.accountModel.findAll();
  }

  findOne(id: number) {
    return this.accountModel.findByPk(id);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.update(updateAccountDto, {where:{id}});
  }

  remove(id: number) {
    return this.accountModel.destroy({where:{id}});
  }
}
