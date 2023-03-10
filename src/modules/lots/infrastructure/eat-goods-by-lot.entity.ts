import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_bienesxlote', { schema: 'sera' })
export class EatGoodByLotEntity {
  @Column('bigint', { name: 'id_bienxlote' })
  idGoodInLot: number;

  @PrimaryColumn('bigint', { name: 'no_bien', primary: true })
  goodNumber: number;

  @PrimaryColumn('bigint', { name: 'id_lote', primary: true })
  idLot: number;

  @Column('numeric', { name: 'valor_base', precision: 17, scale: 2 })
  baseValue: number;

  @Column('numeric', { name: 'precio_avaluo_ref', precision: 17, scale: 2 })
  appraisalRefPrice: number;

  @Column('numeric', { name: 'precio_final', precision: 17, scale: 2 })
  finalPrice: number;

  @Column('numeric', { name: 'iva_base', precision: 15, scale: 2 })
  baseIva: number;

  @Column('numeric', { name: 'iva_final', precision: 15, scale: 2 })
  finalIva: number;

  @Column('smallint', { name: 'porc_iva' })
  ivaPercentage: number;

  @Column('character varying', { name: 'campo1', length: 1250 })
  field1: string;

  @Column('character varying', { name: 'campo2', length: 50 })
  field2: string;

  @Column('character varying', { name: 'campo3', length: 75 })
  field3: string;

  @Column('character varying', { name: 'campo4', length: 50 })
  field4: string;

  @Column('character varying', { name: 'campo5', length: 50 })
  field5: string;

  @Column('character varying', { name: 'campo6', length: 50 })
  field6: string;

  @Column('character varying', { name: 'campo7', length: 50 })
  field7: string;

  @Column('character varying', { name: 'campo8', length: 500 })
  field8: string;

  @Column('character varying', { name: 'campo9', length: 50 })
  field9: string;

  @Column('numeric', { name: 'cantidad', precision: 22, scale: 3 })
  quantity: number;

  @Column('integer', { name: 'no_almacen' })
  warehouseNumber: number;

  @Column('character varying', { name: 'cve_peritaje_jur', length: 30 })
  peritajeJurCve: string;

  @Column('character varying', { name: 'empresa_valuadora', length: 60 })
  valuatorCompany: string;

  @Column('character varying', { name: 'no_inventario', length: 50 })
  inventoryNumber: string;

  @Column('numeric', { name: 'precio_sin_iva', precision: 17, scale: 2 })
  priceWithoutIva: number;

  @Column('numeric', { name: 'monto_app_iva', precision: 17, scale: 2 })
  amountWithVat: number;

  @Column('numeric', { name: 'monto_noapp_iva', precision: 17, scale: 2 })
  amountWithoutVat: number;

  @Column('varchar', { name: 'estatus_ant', length: 3 })
  previousStatus: string;

  @Column('timestamp without time zone', { name: 'fecha_avaluo' })
  appraisalDate: Date;

  @Column('varchar', { name: 'estatus_calc', length: 3 })
  calculationStatus: string;

  @Column('numeric', { name: 'precio_garantia', precision: 17, scale: 2 })
  warrantyPrice: number;

  @Column('varchar', { name: 'estatus_comer', length: 3 })
  commercialStatus: string;

  @Column('integer', { name: 'no_transferente' })
  transferNumber: number;

  @Column('numeric', { name: 'anticipo', precision: 17, scale: 2 })
  advance: number;

  @Column('numeric', { name: 'pctslote', precision: 21, scale: 9 })
  lotPercentage: number;

  @Column('timestamp without time zone', { name: 'fecha_creacion' })
  creationDate: Date;

  @Column('bigint', { name: 'id_lote_comer' })
  commercialLotId: number;

  @Column('bigint', { name: 'id_evento_comer' })
  commercialEventId: number;

  @Column('bigint', { name: 'id_evento_remesa' })
  remittanceEventId: number;

  @Column('bigint', { name: 'id_lote_remesa' })
  remittanceLotId: number;

  @Column('bigint', { name: 'id_bienxlote_remesa' })
  remittanceGoodInLotId: number;

  @Column('varchar', { name: 'vendido', length: 1 })
  sold: string;

  @Column('varchar', { name: 'observaciones', length: 4000 })
  observations: string;

  @Column('varchar', { name: 'no_factura', length: 10 })
  invoiceNumber: string;

  @Column('timestamp without time zone', { name: 'fecha_factura' })
  invoiceDate: Date;

  @Column('varchar', { name: 'seleccionado', length: 1 })
  selected: string;

  @Column('varchar', { name: 'anexo', length: 2 })
  annex: string;

  @Column('varchar', { name: 'no_cilindros', length: 10 })
  cylinderNumber: string;

  @Column('varchar', { name: 'procedencia', length: 30 })
  origin: string;

  @Column('varchar', { name: 'pais_procedencia', length: 50 })
  countryOfOrigin: string;

  @Column('character varying', { name: 'descripcion_lote', length: 255 })
  lotDescription: string;

  @Column('smallint', { name: 'no_delegacionrem' })
  remDelegationNumber: number;

  @Column('character varying', { name: 'observaciones_2', length: 4000 })
  observations2: string;

  @Column('bigint', { name: 'id_avaluo' })
  appraisalId: number;

  @Column('character varying', { name: 'a_iva', length: 2 })
  aIva: string;
}
