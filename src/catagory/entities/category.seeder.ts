import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Category } from './catagory.entity';


@Seeder({
   model: Category,
})
export class SeedCategory implements OnSeederInit {
   run() {
      const data = [
         {
            id: 1,
            name: 'Default',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 2,
            name: 'OffSide',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 3,
            name: 'Homevisite',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 4,
            name: 'Other',
            createdAt: new Date(),
            updatedAt: new Date(),
         },



      ];
      return data;
   }


}