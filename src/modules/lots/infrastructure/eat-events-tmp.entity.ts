import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tmp_eventos_comer', { schema: 'comer' })
export class EatEventsTmpEntity {
  @PrimaryColumn({ name: 'id_evento', type: 'numeric' })
  eventId: number;

  @Column({ name: 'cve_proceso', type: 'varchar', length: 120 })
  processCve: string;

  @Column({ name: 'fec_fallo', type: 'date' })
  fecFailed: Date;

  @Column({ name: 'id_tpevento', type: 'numeric' })
  tpeventId: number;

  @Column({ name: 'direccion', type: 'varchar', length: 1 })
  address: string;

  @Column({ name: 'lugar', type: 'varchar', length: 100 })
  place: string;

  @Column({ name: 'id_estatusvta', type: 'varchar', length: 4 })
  statusVtaId: string;

  @Column({ name: 'fecha_evento', type: 'date' })
  eventDate: Date;

  @Column({ name: 'id_tpeventoaf', type: 'numeric', precision: 2 })
  tpEventIdAf: number;
}
