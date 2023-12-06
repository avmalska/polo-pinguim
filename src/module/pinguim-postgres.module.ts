import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pinguim } from '../entity/pinguim.entity';
import { PinguimController } from '../controller/pinguim/pinguim.controller';
import { PinguimService } from '../service/pinguim/pinguim.service';
import { PinguimMapper } from '../mapper/pinguim.mapper';
import { PinguimPostgresRepositoryImpl } from '../repository/pinguim-postgres.repository-impl';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'andrey',
      username: 'andrey',
      entities: [Pinguim],
      database: 'pinguim',
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pinguim]),
  ],
  controllers: [PinguimController],
  providers: [PinguimService, PinguimPostgresRepositoryImpl, PinguimMapper],
})
export class PinguimPostgresModule {}
