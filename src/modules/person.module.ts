import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person.controller';

@Module({
  controllers: [PersonController],
})
export class PersonModule {}
