import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Admin } from './admin.entity';


@Seeder({
   model: Admin,
})
export class SeedAdmin implements OnSeederInit {
   run() {
      const data = [
         {
            adminId: 1001,
            name: 'Islamic',
            shortName: 'IL',
            facultyId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            adminId: 1002,
            name: 'LiberalArts',
            shortName: 'LS',
            facultyId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            adminId: 1003,
            name: 'Tecnology',
            shortName: 'ST',
            facultyId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            adminId: 1004,
            name: 'Education',
            shortName: 'EDU',
            facultyId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            adminId: 1005,
            name: 'InternationalLanguage',
            shortName: 'ILA',
            facultyId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ];
      return data;
   }


}
