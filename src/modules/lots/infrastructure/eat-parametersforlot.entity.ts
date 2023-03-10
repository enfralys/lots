import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_parametrosxlote', { schema: 'sera' })
export class EatParametersForLotEntity {
  @PrimaryColumn('numeric', { name: 'id_lote', primary: true })
  idLot: number;

  @Column('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('numeric', { name: 'lote_publico' })
  publicLot: number;

  @Column('numeric', { name: 'garantiaespecial', precision: 15, scale: 2 })
  specialGuarantee: number;
}
