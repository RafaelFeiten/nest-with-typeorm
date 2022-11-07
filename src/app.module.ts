import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';

@Module({
  imports: [
    PersonModule,
    //@todo import config from json file
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      synchronize: true,
      entities: ['dist/**/*.model{.ts,.js}'],
    }),
  ],
})
export class AppModule {}
