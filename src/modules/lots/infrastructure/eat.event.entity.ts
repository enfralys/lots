import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_eventos', { schema: 'sera' })
export class EatEventEntity {
  @PrimaryColumn('numeric', { name: 'id_evento', primary: true })
  idEvent: number;

  @Column('numeric', { name: 'id_tpevento' })
  idEventType: number;

  @Column('character varying', { name: 'id_estatusvta', length: 4 })
  idStatusVta: string;

  @Column('character varying', { name: 'cve_proceso', length: 60 })
  processKey: string;

  @Column('character varying', { name: 'observaciones', length: 300 })
  observations: string;

  @Column('character varying', { name: 'direccion', length: 1 })
  address: string;

  @Column('date', { name: 'fec_fallo' })
  fallDate: Date;

  @Column('character varying', { name: 'lugar', length: 100 })
  place: string;

  @Column('date', { name: 'fec_evento' })
  eventDate: Date;

  @Column('character varying', { name: 'texto1', length: 4000 })
  text1: string;

  @Column('character varying', { name: 'texto2', length: 4000 })
  text2: string;

  @Column('character varying', { name: 'firmante', length: 50 })
  signatory: string;

  @Column('character varying', { name: 'firmante_cargo', length: 50 })
  signatoryPosition: string;

  @Column('character varying', { name: 'notas', length: 300 })
  notes: string;

  @Column('character varying', { name: 'textofin3', length: 4000 })
  textFinish3: string;

  @Column('character varying', { name: 'textofin4', length: 4000 })
  textFinish4: string;

  @Column('numeric', { name: 'costo_base' })
  baseCost: number;

  @Column('numeric', { name: 'num_base_vend' })
  baseVendNum: number;

  @Column('character varying', { name: 'usuario', length: 30 })
  user: string;

  @Column('numeric', { name: 'mes' })
  month: number;

  @Column('numeric', { name: 'anio' })
  year: number;

  @Column('numeric', { name: 'no_delegacion' })
  delegationNumber: number;

  @Column('numeric', { name: 'fase_inmu' })
  realEstatePhase: number;

  @Column('numeric', { name: 'id_tercerocomer' })
  thirdPartyId: number;

  @Column('date', { name: 'fecha_notificacion' })
  notificationDate: Date;

  @Column('date', { name: 'fecha_cierre_evento' })
  eventCloseDate: Date;

  @Column('numeric', { name: 'id_tpsolaval' })
  idSolAval: number;

  @Column('character varying', { name: 'aplica_iva', length: 2 })
  appliesIva: string;
}
