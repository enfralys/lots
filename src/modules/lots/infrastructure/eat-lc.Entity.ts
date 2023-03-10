import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_lc', { schema: 'sera' })
export class EatLcEntity {
  @PrimaryColumn('numeric', { name: 'id_lc', primary: true })
  idLc: number;

  @Column('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('numeric', { name: 'id_lote' })
  idLot: number;

  @Column('numeric', { name: 'id_cliente' })
  idClient: number;
}
