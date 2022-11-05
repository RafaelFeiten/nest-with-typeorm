import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';

@Module({
  imports: [PersonModule],
})
export class AppModule {}
