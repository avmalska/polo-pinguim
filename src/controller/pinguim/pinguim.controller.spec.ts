import { Test, TestingModule } from '@nestjs/testing';
import { PinguimController } from './pinguim.controller';

describe('PinguimController', () => {
  let controller: PinguimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinguimController],
    }).compile();

    controller = module.get<PinguimController>(PinguimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
