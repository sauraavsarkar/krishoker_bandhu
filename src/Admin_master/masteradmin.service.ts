import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { masteradminEntity } from './masteradmin.entity';
import { Repository } from 'typeorm';
import { masteradminInfo } from './masteradmin.dto';

@Injectable()
export class masteradminService {
  constructor(
    @InjectRepository(masteradminEntity) 
    private masteradminRepo: Repository<masteradminEntity>
  )
  {}
  getAll(): Promise<masteradminEntity[]> {
    return this.masteradminRepo.find(
      {
        select:{
          name: true,
          username: true
        }
      }
    );
  }

getUserByID(id:number): Promise<masteradminEntity> {
return this.masteradminRepo.findOneBy({id:id});
}

 async addmasteradmin(masteradminInfo:masteradminInfo):Promise<masteradminEntity[]>
  {
   const res = await this.masteradminRepo.save(masteradminInfo);
   return this.masteradminRepo.find();
  }

  updatemasteradmin(id:number, masteradminInfo:masteradminInfo):Promise<masteradminEntity>
  {
   const res=  this.masteradminRepo.update(id,masteradminInfo);
     return this.masteradminRepo.findOneBy({id});
  }

  updatebymasteradmin(id:number, masteradminInfo:masteradminInfo):Promise<masteradminEntity>
  {
   const res=  this.masteradminRepo.update(id,masteradminInfo);
     return this.masteradminRepo.findOneBy({id});
  }

  async deletemasteradmin(id: number): Promise<void> {
    await this.masteradminRepo.delete(id);
    }
    

}