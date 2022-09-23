import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Account } from './account.entity';


@Seeder({
   model: Account,
   foreignDelay:2000,
   containsForeignKeys:true
})
export class SeedAccount implements OnSeederInit {
   run() {
      const data = [
         {

            userName: 'ADMIN',
            email: 'admin@ftu.ac.th',
            password: 'Admin1234',
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {

            userName: 'Islamic Studies and Law',
            email: 'il@ftu.ac.th',
            password: 'Admin1234',
            roleId: 2,
            facultyId:1,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {

            userName: 'Liberal Arts and Social Science',
            email: 'ls@ftu.ac.th',
            password: 'Admin1234',
            roleId: 2,
            facultyId:2,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {

            userName: 'Science and Tecnology',
            email: 'st@ftu.ac.th',
            password: 'Admin1234',
            roleId: 2,
            facultyId:3,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {

            userName: 'Education',
            email: 'edu@ftu.ac.th',
            password: 'Admin1234',
            roleId: 2,
            facultyId:4,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {

            userName: 'International Language Academy',
            email: 'ila@ftu.ac.th',
            password: 'Admin1234',
            roleId: 2,
            facultyId:5,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ];
      return data;
   }


}
