import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmconfigAsync } from './configs/typeormconfig';
import { tstbl1 } from './entities/tstbl1.entity';
@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),
  // ConfigModule.forRoot(),
  ScheduleModule.forRoot(),
  TypeOrmModule.forFeature([tstbl1]),
  TypeOrmModule.forRootAsync(typeOrmconfigAsync)],
  controllers: [AppController],
  providers: [AppService,ConfigService],
})
export class AppModule {}
