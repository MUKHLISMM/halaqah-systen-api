import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Faculty } from './faculty.entity';

@Seeder({
   model: Faculty,
   foreignDelay:0,
   containsForeignKeys:true
})

export class SeedFaculty implements OnSeederInit {
   run() {
      const data = [
         {
            id:1,
            name: 'Islamic Studies and Law',
            shortName: 'IL',
            createdAt:new Date(),
            updatedAt:new Date(),
         },         {
            id:2,
            name: 'Liberal Arts and Social Science',
            shortName: 'LS',
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
            id:3,
            name: 'Science and Tecnology',
            shortName: 'ST',
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
            id:4,
            name: 'Education',
            shortName: 'EDU',
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
            id:5,
            name: 'International Language Academy',
            shortName: 'ILA',
            createdAt:new Date(),
            updatedAt:new Date(),
         },
      ];
      return data;
   }


}
