import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { masteradminService } from './masteradmin.service';
import { masteradminInfo } from './masteradmin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { masteradminEntity } from './masteradmin.entity';


    @Controller('masteradmin')
        export class masteradminController {
        constructor(private readonly masteradminService: masteradminService) {}

        @Get()
            getHello(): string
        {
            return "hello wellcome to Krishoker Bandhu ";
        }


        @Post('addmasteradmin')
        @UsePipes(new ValidationPipe())
        @UseInterceptors(FileInterceptor('adminprofilepic',
        { fileFilter: (req, file, cb) => {
          if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
           cb(null, true);
          else {
            cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
           }
          },
          limits: { fileSize: 30000 },
          storage:diskStorage({
          destination: './adminprofilepics',
          filename: function (req, file, cb) 
          {
            cb(null,Date.now()+file.originalname)
          },
          })
        }
        ))
        addmasteradmin(@Body() masteradminInfo:masteradminInfo, @UploadedFile()  myfile: Express.Multer.File) 
        {
          masteradminInfo.filename = myfile.filename;
          return this.masteradminService.addmasteradmin(masteradminInfo);
        }
        

        @Patch('/updateBy/:id')
        updatebymasteradmin(@Param('id') id:number, @Body() masteradminInfo:masteradminInfo)
        {
          return this.masteradminService.updatebymasteradmin(id,masteradminInfo);
        }

        
        @Put('/update/:id')
        updatemasteradmin(@Param('id') id:number, @Body() masteradminInfo:masteradminInfo)
        {
          return this.masteradminService.updatemasteradmin(id,masteradminInfo);
        }


        @Delete('/delete/:id')
        deleteUser(@Param('id') id: number) 
        {
        return this.masteradminService.deletemasteradmin(id);
        }




}