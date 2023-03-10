import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_lotes', { schema: 'sera' })
export class EatLotsEntity {
  @PrimaryColumn('numeric', { name: 'id_lote', primary: true })
  idLot: number;

  @Column('character varying', { name: 'id_estatusvta', length: 4 })
  idStatusVta: string;

  @PrimaryColumn('character varying', { name: 'id_evento' })
  idEvent: number;

  @Column('numeric', { name: 'lote_publico' })
  lotPublic: number;

  @Column('character varying', { name: 'descripcion', length: '1250' })
  description: string;

  @Column('numeric', { name: 'valor_base', nullable: false })
  baseValue: number;

  @Column('numeric', { name: 'no_transferente' })
  noTransferee: number;

  @Column('numeric', { name: 'id_cliente' })
  idClient: number;

  @Column('numeric', { name: 'precio_avaluo_ref' })
  priceValuationRef: number;

  @Column('numeric', { name: 'precio_garantia' })
  priceGuarantee: number;

  @Column('timestamp', { name: 'fecha_entrega' })
  deliverDate: Date;

  @Column('numeric', { name: 'precio_final' })
  finalPrice: number;

  @Column('character varying', { name: 'referenciag', length: '30' })
  reference: string;

  @Column('character varying', { name: 'referencial', length: '30' })
  referential: string;

  @Column('numeric', { name: 'acumulado' })
  accumulated: number;

  @Column('character varying', { name: 'valido_sistema', length: '1' })
  validSystem: string;

  @Column('numeric', { name: 'iva_lote' })
  ivaLot: number;

  @Column('numeric', { name: 'monto_app_iva' })
  amountAppIva: number;

  @Column('numeric', { name: 'monto_noapp_iva' })
  amountNoAppIva: number;

  //-----------------

  @Column('numeric', { name: 'porc_app_iva', precision: 12, scale: 9 })
  porcAppIva: number;

  @Column('numeric', { name: 'porc_noapp_iva', precision: 12, scale: 9 })
  porcNoAppIva: number;

  @Column('character varying', { name: 'coordinacion_reg', length: 50 })
  coordinationReg: string;

  @Column('character varying', { name: 'coordinador_reg', length: 50 })
  coordinatorReg: string;

  @Column('character varying', { name: 'dato_fisc_mand', length: 200 })
  datoFiscMand: string;

  @Column('character varying', { name: 'ubicacion', length: 250 })
  location: string;

  @Column('numeric', { name: 'anticipo', precision: 15, scale: 2 })
  advance: number;

  @Column('numeric', { name: 'monto_sin_iva', precision: 15, scale: 2 })
  amountWithoutIva: number;

  @Column('numeric', { name: 'nooficionotifica', precision: 6, scale: 0 })
  noJobnNotifies: number;

  @Column('character varying', { name: 'imprimenotifica', length: 1 })
  printNotifies: string;

  @Column('character varying', { name: 'idestatusvtant', length: 4 })
  idStatusvtant: string;

  @Column('numeric', { name: 'num_bienes', precision: 6, scale: 0 })
  numEstate: number;

  @Column('numeric', { name: 'excede_falta', precision: 15, scale: 0 })
  exceedsShortage: number;

  @Column('character varying', { name: 'esasignado', length: 1 })
  isAssigned: string;

  @Column('character varying', { name: 'eschatarra', length: 1 })
  isScrap: string;

  @Column('character varying', { name: 'solicita', length: 60 })
  requests: string;

  @Column('numeric', { name: 'monto_retenido', precision: 15, scale: 2 })
  amountRetained: number;

  @Column('numeric', { name: 'no_delegacion', precision: 2, scale: 0 })
  noDelegation: number;

  @Column('numeric', { name: 'lote_origen', precision: 10, scale: 0 })
  lotOrigin: number;

  @Column('numeric', { name: 'cubrelotes' })
  coversLots: number;

  @Column('numeric', { name: 'paleta', precision: 10, scale: 0 })
  palette: number;

  @Column('numeric', { name: 'garantia_asig' })
  assignedGuarantee: number;

  @Column('numeric', { name: 'monto_liq' })
  amountLiq: number;

  @Column('numeric', { name: 'fase', precision: 2, scale: 0 })
  phase: number;

  @Column('numeric', { name: 'no_parcialidades' })
  nopartialities: number;

  @Column('numeric', { name: 'puntos_porcen' })
  pointsPercentage: number;

  @Column('numeric', { name: 'porc_anticipo' })
  advancePercentage: number;

  @Column('character varying', { name: 'a_iva' })
  aIva: string;
}
