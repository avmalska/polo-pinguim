import { Test, TestingModule } from '@nestjs/testing';
import { PinguimService } from './pinguim.service';

describe('PinguimService', () => {
  let service: PinguimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinguimService],
    }).compile();

    service = module.get<PinguimService>(PinguimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
