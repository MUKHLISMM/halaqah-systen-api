import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public, Roles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/role.enum';
import { AccountsService } from './accounts.service';
import { CreateAccountDto, LogInDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @Public()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  findAll(@Query()query:any) {
    return this.accountsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }

  @Post('login')
  @Public()
  Login(@Body() logInDto:LogInDto){
    return this.accountsService.Login(logInDto)
  }
}
