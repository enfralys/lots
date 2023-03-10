import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_clientesxevento', { schema: 'sera' })
export class EatClientByEventEntity {
  @PrimaryColumn('numeric', { name: 'id_evento', primary: true })
  idEvent: number;

  @PrimaryColumn('numeric', { name: 'id_cliente', primary: true })
  idClient: number;

  @Column('character varying', { name: 'procesado', length: 1, nullable: true })
  processed: string;

  @Column('character varying', { name: 'procesar', length: 1, nullable: true })
  process: string;

  @Column('date', { name: 'fecha_ejecucion', nullable: true })
  executionDate: string;

  @Column('character varying', {
    name: 'enviado_sirsae',
    length: 1,
    nullable: true,
  })
  sentToSirsae: string;

  @Column('date', { name: 'fecha_envio', nullable: true })
  sendingDate: string;

  @Column('character varying', {
    name: 'enviar_sirsae',
    length: 1,
    nullable: true,
  })
  sendToSirsae: string;

  @Column('character varying', {
    name: 'modificar_estatus',
    length: 1,
    nullable: true,
  })
  modifyStatus: string;
}
