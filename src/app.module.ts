import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultiesModule } from './faculties/faculties.module';
import { TypeOrmModule } from '@nestjs/typeorm';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
   imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lamiya@#123',
      database: 'faculties_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultiesModule,
  ],
})
export class AppModule {}
