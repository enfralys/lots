import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_tpeventos', { schema: 'sera' })
export class EatTpEventEntity {
  @PrimaryColumn('numeric', { name: 'id_tpevento', precision: 2, scale: 0 })
  idEventType: number;

  @Column('varchar', { name: 'descripcion', length: 30 })
  description: string;

  @Column('varchar', { name: 'desc_recibo', length: 30, nullable: true })
  receiptDescription: string;

  @Column('varchar', { name: 'uso', length: 240, nullable: true })
  use: string;

  @Column('numeric', {
    name: 'id_tipo_disp',
    precision: 2,
    scale: 0,
    nullable: true,
  })
  typeDispId: number;

  @Column('numeric', {
    name: 'id_tipo_fallo',
    precision: 2,
    scale: 0,
    nullable: true,
  })
  failureTypeId: number;
}
