import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('comer_valpag_cfdi', { schema: 'sera' })
export class EatValpagCfdiEntity {
  @Column('numeric', {
    name: 'id_pago',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idPayment: number;

  @Column('numeric', {
    name: 'id_pagorefgens',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idPaymentrefgens: number;

  @PrimaryColumn('numeric', {
    name: 'id_evento',
    nullable: false,
    precision: 10,
    scale: 0,
  })
  idEvent: number;

  @PrimaryColumn('numeric', {
    name: 'id_lote',
    nullable: false,
    precision: 10,
    scale: 0,
  })
  idBatch: number;

  @Column('numeric', {
    name: 'id_factura',
    nullable: false,
    precision: 10,
    scale: 0,
  })
  idInvoice: number;

  @Column('numeric', {
    name: 'id_detfactura',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idDetinvoice: number;

  @Column('numeric', {
    name: 'lote_publico',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  publicBatch: number;

  @Column('character varying', {
    name: 'id_estatusvta',
    length: 4,
    nullable: true,
  })
  idSalestatus: string;

  @PrimaryColumn('character varying', {
    name: 'tipo_cfdi',
    length: 2,
    nullable: false,
  })
  cfdiType: string;

  @Column('character varying', {
    name: 'composicion_cfdi',
    length: 2,
    nullable: true,
  })
  cfdiComposition: string;

  @Column('date', { name: 'fecha_insert', nullable: true })
  insertDate: string;

  @Column('character varying', {
    name: 'usuario_insert',
    length: 30,
    nullable: true,
  })
  insertUser: string;

  @Column('character varying', {
    name: 'id_estatusfact',
    length: 4,
    nullable: true,
  })
  idInvoiceStatus: string;

  @PrimaryColumn('numeric', {
    name: 'id_factura_relimag',
    precision: 10,
    scale: 0,
  })
  idRelatedInvoiceImage: number;

  @Column('numeric', {
    name: 'id_evento_relimag',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idRelatedEventImage: number;

  @Column('numeric', {
    name: 'idordeningreso',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idIncomeOrder: number;

  @Column('character varying', { name: 'tipo_pago', length: 1, nullable: true })
  paymentType: string;
}
