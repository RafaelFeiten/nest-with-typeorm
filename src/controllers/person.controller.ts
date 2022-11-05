import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/person')
export class PersonController {
  @Post()
  public create(): any {
    return { data: 'Created!' };
  }

  @Get()
  public getAll(): any {
    return { data: 'GetAll!' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'GetOne!' };
  }

  @Put(':id')
  public update(): any {
    return { data: 'Update!' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Deleted!' };
  }
}
