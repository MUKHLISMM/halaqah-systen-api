import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { Major } from './major.entity';


@Seeder({
   model: Major,
   foreignDelay:2000,
   containsForeignKeys:true
})
export class SeedMajor implements OnSeederInit {
   run() {
      const data = [
         {
          
            name: 'Sariah',
            shortName: 'SR', 
            facultyId: 1,
            
            createdAt:new Date(),
            updatedAt:new Date(),
         },         {
        
            name: 'Usuluddin(International Program)',
            shortName: 'UD', 
            facultyId: 1,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
    
            name: 'Islamic Studies',
            shortName: 'IS', 
            facultyId: 1,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
        
            name: 'Islamic Law',
            shortName: 'IL', 
            facultyId: 1,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Arabic (International Program)',
            shortName: 'AR', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Public Administration',
            shortName: 'PA', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Economics Program in Financial Economic and Banking',
            shortName: 'ECON', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'English (International Program)',
            shortName: 'EN', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Malay (International Program)',
            shortName: 'ML', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Business Administration',
            shortName: 'BA', 
            facultyId: 2,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
        
        
         {
       
            name: 'Information Tecnology (English Program)',
            shortName: 'IT', 
            facultyId: 3,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Reseach and Development of Hala Product',
            shortName: 'R&D', 
            facultyId: 3,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Data Science',
            shortName: 'DS', 
            facultyId: 3,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching Islmic Studies',
            shortName: 'TS', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching Arabic Language',
            shortName: 'TA', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching General Science',
            shortName: 'TG', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching Chemistry',
            shortName: 'TC', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching English Language',
            shortName: 'TE', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Teaching Malay Language',
            shortName: 'TM', 
            facultyId: 4,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'Arabic Preparatory Course',
            shortName: 'AP', 
            facultyId: 5,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
         {
       
            name: 'English Preparatory Course',
            shortName: 'EP', 
            facultyId: 5,
            createdAt:new Date(),
            updatedAt:new Date(),
         },
        
        
       
       
       
      ];
      return data;
   }


}