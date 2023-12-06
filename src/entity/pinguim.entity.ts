import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pinguim {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  nome: string;

  @Column({ type: 'int' })
  idade: number;
}
