import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_pagosrefgens', { schema: 'sera' })
export class EatPagosRefgensEntity {
  @Column('numeric', { name: 'id_pagorefgens', precision: 10 })
  paymentRefGensId: number;

  @Column('numeric', { name: 'id_pago', precision: 10 })
  paymentId: number;

  @Column('numeric', { name: 'id_lote', precision: 10, nullable: true })
  lotId: number;

  @Column('numeric', { name: 'monto', precision: 15, scale: 2, nullable: true })
  amount: number;

  @Column('varchar', { name: 'referencia', length: 30, nullable: true })
  reference: string;

  @Column('varchar', { name: 'tipoingreso', length: 2, nullable: true })
  incomeType: string;

  @Column('numeric', { name: 'no_transferente', precision: 5, nullable: true })
  transferNumber: number;

  @Column('numeric', { name: 'iva', precision: 11, scale: 2, nullable: true })
  tax: number;

  @Column('numeric', {
    name: 'monto_app_iva',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  amountWithTax: number;

  @Column('numeric', {
    name: 'monto_noapp_iva',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  amountWithoutTax: number;

  @Column('varchar', { name: 'tipo', length: 1, nullable: true })
  type: string;

  @PrimaryColumn('numeric', { name: 'id_evento', primary: true })
  eventId: number;

  @Column('date', { name: 'fecha_proceso', nullable: true })
  processDate: Date;

  @Column('numeric', {
    name: 'monto_chatarra',
    precision: 11,
    scale: 2,
    nullable: true,
  })
  scrapAmount: number;

  @PrimaryColumn({ name: 'id_pagorefgens', primary: true })
  id_pagorefgens: [number, number];
}
