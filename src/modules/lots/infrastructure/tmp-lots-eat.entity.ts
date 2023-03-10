import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tmp_lotes_comer', { schema: 'comer' })
export class TmpLotsEatEntity {
  @PrimaryColumn('numeric', { name: 'id_lote', primary: true })
  idLot: number;

  @Column('varchar', { name: 'id_estatusvta', nullable: true })
  statusId: string;

  @Column('numeric', { name: 'id_evento', nullable: true })
  idEvent: number;

  @Column('numeric', { name: 'lote_publico', nullable: true })
  lotPublic: number;

  @Column('varchar', { name: 'descripcion', nullable: true })
  description: string;

  @Column('numeric', {
    name: 'valor_base',
    precision: 33,
    scale: 2,
    nullable: true,
  })
  baseValue: number;

  @Column('numeric', { name: 'id_cliente', nullable: true })
  idClient: number;

  @Column('numeric', {
    name: 'precio_garantia',
    precision: 11,
    scale: 2,
    nullable: true,
  })
  guaranteePrice: number;

  @Column('numeric', { name: 'cubrelotes', nullable: true })
  coversLots: number;

  @Column('date', { name: 'fecha_entrega', nullable: true })
  deliveryDate: Date;

  @Column('numeric', {
    name: 'precio_final',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  finalPrice: number;

  @Column('numeric', {
    name: 'iva_lote',
    precision: 11,
    scale: 2,
    nullable: true,
  })
  lotIva: number;

  @Column('numeric', {
    name: 'monto_app_iva',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  appIvaAmount: number;

  @Column('numeric', {
    name: 'anticipo',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  advancePayment: number;

  @Column('numeric', {
    name: 'monto_noapp_iva',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  noAppIvaAmount: number;

  @Column('varchar', { name: 'linea_captura', nullable: true })
  captureLine: string;

  @Column('numeric', { name: 'estatus_sist', nullable: true })
  systemStatus: number;

  @Column('numeric', { name: 'id_sist', nullable: true })
  systemId: number;

  @Column('varchar', { name: 'eschatarra', nullable: true })
  scrap: string;

  @Column('varchar', { name: 'dato_fisc_mand', nullable: true })
  fiscalData: string;

  @Column('numeric', { name: 'no_delegacion', nullable: true })
  delegationNumber: number;

  @Column('varchar', { name: 'coordinacion_reg', nullable: true })
  regionalCoordination: string;

  @Column('numeric', { name: 'no_transferente', nullable: true })
  transferorNumber: number;

  @Column('varchar', { name: 'desc_transferente', nullable: true })
  transferorDescription: string;

  @Column('varchar', { name: 'direccion', nullable: true })
  address: string;

  @Column('varchar', { name: 'act_lote', nullable: true })
  lotAction: string;
}
