import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_est_lotes', { schema: 'sera' })
export class EstEstLotEntity {
  @PrimaryColumn('numeric', { name: 'lote_publico', primary: true })
  lotPublic: number;

  @PrimaryColumn('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('character varying', { name: 'estatus', length: 10 })
  status: string;

  @Column('character varying', { name: 'estatus_ant', length: 10 })
  statusAnt: string;

  @Column('date', { name: 'fec_cambio' })
  changeDate: Date;

  @Column('character varying', { name: 'motivo_cambio', length: 2000 })
  changeReason: string;

  @Column('character varying', { name: 'tipo_cambio', length: 10 })
  changeType: string;

  @Column('character varying', { name: 'usuario', length: 50 })
  user: string;
}
