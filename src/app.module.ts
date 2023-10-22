import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { masteradminModule } from './Admin_master/masteradmin.module';

@Module({
  imports: [masteradminModule,
    TypeOrmModule.forRoot(
      { type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'saurav',//Change to your database password
       database: 'krishoker_bandhu',
       autoLoadEntities: true,
       synchronize: true,
       } ),
      
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}