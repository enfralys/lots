import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_pagoref', { schema: 'sera' })
export class EatPayefEntity {
  @PrimaryColumn('numeric', { name: 'id_pago', primary: true })
  idPayment: number;

  @Column('character varying', { name: 'referencia', length: 30 })
  reference: string;

  @Column('numeric', { name: 'no_movimiento' })
  movementNumber: number;

  @Column('date', { name: 'fecha' })
  date: Date;

  @Column('numeric', { name: 'monto' })
  amount: number;

  @PrimaryColumn('character varying', { name: 'cve_banco' })
  bankKey: string;

  @PrimaryColumn('numeric', { name: 'codigo' })
  code: number;

  @PrimaryColumn('numeric', { name: 'id_lote' })
  idLot: number;

  @Column('character varying', { name: 'valido_sistema', length: 1 })
  validInSystem: string;

  @Column('character varying', { name: 'noentiempo', length: 1 })
  noTime: string;

  @Column('character varying', { name: 'descripcion', length: 200 })
  description: string;

  @Column('character varying', { name: 'tipo', length: 1 })
  type: string;

  @Column('numeric', { name: 'idordeningreso' })
  incomeOrderId: number;

  @Column('character varying', { name: 'resultado', length: 200 })
  result: string;

  @Column('numeric', { name: 'sucursal' })
  branch: number;

  @Column('numeric', { name: 'id_pagodevuelve' })
  paymentReturnId: number;

  @Column('character varying', { name: 'conciliado', length: 1 })
  conciliated: string;

  @Column('date', { name: 'fecha_registro' })
  registerDate: Date;

  @Column('character varying', { name: 'referenciaori', length: 30 })
  originalReference: string;

  @Column('character varying', { name: 'cuenta', length: 20 })
  account: string;

  @Column('date', { name: 'fecha_oi' })
  oiDate: Date;

  @Column('character varying', { name: 'aplicadoa', length: 2 })
  appliedTo: string;

  @Column('numeric', { name: 'id_cliente' })
  clientId: number;

  @Column('numeric', { name: 'folio_oi', precision: 10, scale: 0 })
  folioOi: number;

  @Column('numeric', { name: 'indicador' })
  indicator: number;

  @Column('numeric', { name: 'codigo_edo_cta', precision: 5, scale: 0 })
  accountStatusCode: number;

  @Column('date', { name: 'fecha_afectacion' })
  affectedDate: Date;

  @Column('numeric', { name: 'no_registro' })
  registerNo: number;

  @Column('numeric', { name: 'id_tipo_sat', precision: 5, scale: 0 })
  satTypeId: number;

  @Column('numeric', { name: 'id_gasto', precision: 10, scale: 0 })
  expenseId: number;

  @Column('numeric', { name: 'id_solicitudpago', precision: 10, scale: 0 })
  paymentRequestId: number;
}
