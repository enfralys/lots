import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('comer_det_lc', { schema: 'sera' })
export class EatDetLcEntity {
  @PrimaryColumn('numeric', { name: 'id_det_lc', primary: true })
  idDetLc: number;

  @Column('numeric', { name: 'id_lc', nullable: true })
  letterOfCreditId: number;

  @Column('numeric', { name: 'monto', precision: 12, scale: 2, default: 0 })
  amount: number;

  @Column('character varying', { name: 'estatus', length: 5 })
  status: string;

  @Column('numeric', { name: 'paleta' })
  pallet: number;

  @Column('numeric', { name: 'tipo_ref' })
  refType: number;

  @Column('date', { name: 'fecha_reg' })
  registrationDate: Date;

  @Column('character varying', { name: 'lc_sae', length: 40, nullable: true })
  saeLc: string;

  @Column('character varying', { name: 'lc_banco', length: 40, nullable: true })
  bankLc: string;

  @Column('numeric', { name: 'tipo_pago' })
  paymentType: number;

  @Column('date', { name: 'fecha_pago', nullable: true })
  paymentDate: Date;

  @Column('numeric', { name: 'cont_descarga', nullable: true })
  dischargeCount: number;

  @Column('character varying', { name: 'user_genera', length: 20 })
  generatingUser: string;

  @Column('date', { name: 'fec_vigencia' })
  validityDate: Date;

  @Column('numeric', {
    name: 'monto_pena',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  penaltyAmount: number;

  @Column('character varying', {
    name: 'folio_aprobacion',
    length: 20,
    nullable: true,
  })
  approvalFolio: string;

  @Column('character varying', {
    name: 'banco_emisor',
    length: 20,
    nullable: true,
  })
  issuingBank: string;

  @Column('numeric', { name: 'indicador', nullable: true })
  indicator: number;

  @Column('character varying', {
    name: 'fec_apro_pago',
    length: 50,
    nullable: true,
  })
  approvedPaymentDate: string;

  @Column('numeric', { name: 'id_estado', nullable: true })
  stateId: number;

  @Column('numeric', { name: 'id_tipo_sat', nullable: true })
  satTypeId: number;

  @Column('numeric', { name: 'enviado', nullable: true })
  sent: number;

  @Column('numeric', { name: 'visto', nullable: true })
  seen: number;

  @Column('date', { name: 'fech_visto' })
  seenDate: Date;
}
