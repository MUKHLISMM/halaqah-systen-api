import * as dotenv from 'dotenv';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from 'nestjs-sequelize-seeder';
const defaultPath = join(__dirname,  'src','**', '*.entity{.ts,.js}');

dotenv.config();

const dialectOptions = {
  useUTC: false,
  dateStrings: true,
  typeCast: function (field, next) {
    if (field.type === 'DATETIME') {
      return field.string();
    }
    return next();
  },
};

export const SequelizeConnection = SequelizeModule.forRoot({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'halaqahsystem',
  dialect: 'mysql',
  models: [defaultPath],
  autoLoadModels: true,
  repositoryMode: true,
  logging: true,
  // sync: {
  //   // force: true, //   alter: true,
  // },
  synchronize: true,
  // synchronize: Boolean(process.env.DBSynchronize) || true,
  dialectOptions: dialectOptions,
  timezone: '+07:00',
});

export const SeederforRoot = SeederModule.forRoot({
  isGlobal: true,
  logging: true,
  disabled: false,
  runOnlyIfTableIsEmpty: false,
  connection: 'default',
  autoIdFieldName: 'id',
  disableEveryOne: false,
  enableAutoId: true,
  // foreignDelay: 10000, // 2 seconds
});
