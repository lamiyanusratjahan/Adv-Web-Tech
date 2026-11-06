import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultiesModule } from './faculties/faculties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lamiya@#123', 
      database: 'faculty_db',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    FacultiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}