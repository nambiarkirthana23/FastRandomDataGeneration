// import { Injectable } from '@nestjs/common';
// import { tstbl1 } from './entities/tstbl1';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { v4 as uuid } from 'uuid';
// import { Cron } from '@nestjs/schedule';
// @Injectable()
// export class AppService {

//   constructor(@InjectRepository(tstbl1)
//   private readonly tsRepo: Repository<tstbl1>,){
//     // console.log("host",process.env.DB_HOST);

//   }
//   getHello(): string {
//     return 'Hello World!';
//   }

// //   async randomDataGeneration()
// //   {
// //     for (let i = 1; i <= 100; i++) {
// //       const device = `ABC${i}`;
// //       console.log("device",device);
// //       // Loop over 60 seconds
// //       for (let j = 0; j < 60; j++) {
// //         const time = new Date(); // Current timestamp
// //         console.log("time",time);
// //         time.setSeconds(time.getSeconds() + j); // Increment seconds by j
// //         //uuid
// //         const u1=uuid.v4();
// //         console.log("u1",u1);
// //         const u2=uuid.v4();
// //         console.log("u2",u2);
// //         const u3=uuid.v4();
// //         console.log("u3",u3);
// //         const u4=uuid.v4();
// //         console.log("u4",u4);
// //         const ts=await this.tsRepo.create({
// //           time,
// //           device,
// //           u1,
// //           u2,
// //           u3,
// //           u4
// //         });
        
// //         console.log("data is getting saved",ts);
// //         await this.tsRepo.save(ts)
// //   }
// // }
  
// //   }


// @Cron('*/1 * * * * *')
//   async randomDataGeneration() {
//     for (let i = 1; i <= 100; i++) {
//       const device = `ABC${i}`;
//       console.log("device",device);
//       // Loop over 60 seconds
//       for (let j = 0; j < 60; j++) {
//         const time = new Date(); // Current timestamp
//         console.log("time",time);
//         time.setSeconds(time.getSeconds() + j); // Increment seconds by j
//         //uuid
//         const u1 = uuid.v4();
//         console.log("u1",u1);
//         const u2 = uuid.v4();
//         console.log("u2",u2);
//         const u3 = uuid.v4();
//         console.log("u3",u3);
//         const u4 = uuid.v4();
//         console.log("u4",u4);
//         const ts = new tstbl1();
//         ts.time = time;
//         // ts.device = device;
//         ts.u1 = u1;
//         ts.u2 = u2;
//         ts.u3 = u3;
//         ts.u4 = u4;
        
//         console.log("data is getting saved", ts);
//         await this.tsRepo.save(ts);
//       }
//     }
//   }
// }

import { Injectable } from '@nestjs/common';
import { tstbl1 } from './entities/tstbl1.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid'; // Update the import
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(tstbl1)
    private readonly tsRepo: Repository<tstbl1>,
  ) {}

  @Cron('*/1 * * * * *')
  async randomDataGeneration() {
    for (let i = 1; i <= 100; i++) {
      const device = `ABC${i}`;
      console.log("device",device);
      // Loop over 60 seconds
      for (let j = 0; j < 60; j++) {
        const time = new Date(); 
        console.log("time",time);
        time.setSeconds(time.getSeconds() + j); // Increment seconds by j
        //uuid
        const u1 = uuidv4(); 
        console.log("u1",u1);
        const u2 = uuidv4(); 
        console.log("u2",u2);
        const u3 = uuidv4(); 
        console.log("u3",u3);
        const u4 = uuidv4(); 
        console.log("u4",u4);
        const ts = new tstbl1();
        ts.time = time;
        ts.u1 = u1;
        ts.u2 = u2;
        ts.u3 = u3;
        ts.u4 = u4;
        
        console.log("data is getting saved", ts);
        await this.tsRepo.save(ts);
      }
    }
  }
}
