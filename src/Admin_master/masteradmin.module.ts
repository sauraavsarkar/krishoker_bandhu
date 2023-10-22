import { Module } from '@nestjs/common';
import { masteradminController } from './masteradmin.controller';
import { masteradminService } from './masteradmin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { masteradminEntity } from './masteradmin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([masteradminEntity])],
  controllers: [masteradminController],
  providers: [masteradminService],
})
export class masteradminModule {}