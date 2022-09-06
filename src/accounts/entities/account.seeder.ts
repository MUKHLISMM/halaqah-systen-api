import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Account } from './account.entity';


@Seeder({
   model: Account,
   // foreignDelay:2000,
   // containsForeignKeys:true
})
export class SeedAccount implements OnSeederInit {
   run() {
      const data = [
         {
            userName: 'ADMIN',
            email:"admin@ftu.ac.th",
            password:"Admin1234",
            roleId:1,
            createdAt:new Date(),
            updatedAt:new Date(),
         },  
      ];
      return data;
   }


}