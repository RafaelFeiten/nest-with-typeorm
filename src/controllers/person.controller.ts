import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from 'src/schemas/person.schema';
import { Repository } from 'typeorm';

@Controller('/person')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>
  ) {}

  @Post()
  public async create(@Body() body: PersonSchema): Promise<PersonModel> {
    const personCreated = await this.model.save(body);
    return personCreated;
  }

  @Get()
  public async getAll(): Promise<PersonModel[]> {
    const list = await this.model.find();
    return list;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<PersonModel> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException('Person not found.');
    }
    return person;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema
  ): Promise<{ message: string }> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    await this.model.update({ id }, body);
    return { message: 'Person updated.' };
  }

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number
  ): Promise<{ message: string }> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException('Person not found.');
    }

    await this.model.delete({ id });
    return { message: 'Person deleted.' };
  }
}
