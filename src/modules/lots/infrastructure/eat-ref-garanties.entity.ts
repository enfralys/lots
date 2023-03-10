import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comer_ref_garantias', { schema: 'comer' })
export class EatRefGarantiesEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id_lcg' })
  id_lcg: number;

  @Column('numeric', { name: 'id_cliente', precision: 10 })
  customer_id: number;

  @Column('numeric', { name: 'id_lote', precision: 10 })
  lot_id: number;

  @Column('numeric', { name: 'id_evento', precision: 10 })
  event_id: number;

  @Column('numeric', { name: 'monto', precision: 12, scale: 2 })
  amount: number;

  @Column('varchar', { name: 'ref_gsae', length: 20 })
  ref_gsae: string;

  @Column('varchar', { name: 'ref_gbanco', length: 20 })
  ref_gbank: string;

  @Column('date', { name: 'fec_vigencia', nullable: true })
  effective_date: Date;

  @Column('varchar', { name: 'estatus', length: 5, nullable: true })
  status: string;

  @Column('date', { name: 'fec_registro', nullable: true })
  fec_registro: Date;

  @Column('varchar', { name: 'folio_aprobacion', length: 35, nullable: true })
  folio_approval: string;

  @Column('varchar', { name: 'banco_emisor', length: 35, nullable: true })
  issuing_bank: string;

  @Column('varchar', { name: 'user_genera', length: 15, nullable: true })
  user_generates: string;

  @Column('varchar', { name: 'banco_exp_cheque', length: 50, nullable: true })
  bank_exp_check: string;

  @Column('numeric', { name: 'no_cheque', precision: 30, nullable: true })
  no_check: number;

  @Column('numeric', { name: 'indicador', precision: 2, nullable: true })
  indicator: number;

  @Column('varchar', { name: 'fec_apro_pago', length: 50, nullable: true })
  fec_appro_pago: string;

  @Column('numeric', { name: 'no_paleta', precision: 10, nullable: true })
  no_palette: number;

  @Column('numeric', { name: 'id_estado', precision: 10, nullable: true })
  state_id: number;

  @Column('numeric', { name: 'id_tipo_sat', precision: 10, nullable: true })
  id_type_sat: number;

  @Column('numeric', { name: 'visto', nullable: true })
  seen: number;

  @Column('date', { name: 'fech_visto', nullable: true })
  seen_date: Date;
}
