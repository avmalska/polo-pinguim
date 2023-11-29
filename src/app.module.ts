import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PinguimSchema } from './schema/pinguim.schema';
import { PinguimService } from './service/pinguim/pinguim.service';
import { PinguimController } from './controller/pinguim/pinguim.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'pinguimdb',
    }),
    MongooseModule.forFeature([{ name: 'Pinguim', schema: PinguimSchema }]),
  ],
  controllers: [PinguimController],
  providers: [PinguimService],
})
export class AppModule {}
