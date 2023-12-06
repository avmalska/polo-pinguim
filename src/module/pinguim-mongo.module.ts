import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PinguimSchema } from '../schema/pinguim.schema';
import { PinguimController } from '../controller/pinguim/pinguim.controller';
import { PinguimService } from '../service/pinguim/pinguim.service';
import { PinguimMongoRepositoryImpl } from '../repository/pinguim-mongo.repository-impl';
import { PinguimMapper } from '../mapper/pinguim.mapper';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'pinguimdb',
    }),
    MongooseModule.forFeature([{ name: 'Pinguim', schema: PinguimSchema }]),
  ],
  controllers: [PinguimController],
  providers: [PinguimService, PinguimMongoRepositoryImpl, PinguimMapper],
})
export class PinguimMongoModule {}
