import { Module } from '@nestjs/common';
import { PinguimPostgresModule } from './module/pinguim-postgres.module';
import { PinguimMongoModule } from "./module/pinguim-mongo.module";


@Module({
  imports: [PinguimPostgresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
