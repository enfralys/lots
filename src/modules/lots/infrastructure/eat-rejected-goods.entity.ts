import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comer_bienesrechazados', { schema: 'sera' })
export class EatRejectedGoodEntity {
  @PrimaryGeneratedColumn({ name: 'id_bienrechazado' })
  rejectedAssetId: number;

  @Column('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('numeric', { name: 'no_bien' })
  goodNumber: number;

  @Column('varchar', { name: 'origen', length: 15, nullable: true })
  origin: string;

  @Column('varchar', { name: 'descripcion', length: 1250, nullable: true })
  description: string;

  @Column('varchar', { name: 'estatus', length: 6, nullable: true })
  status: string;

  @Column('varchar', { name: 'causa', length: 4000, nullable: true })
  cause: string;

  @Column('numeric', { name: 'evento', nullable: true })
  event: number;

  @Column('numeric', { name: 'lote_publico', nullable: true })
  lotPublic: number;

  @Column('numeric', { name: 'lote_origen', nullable: true })
  sourceLot: number;

  @Column('smallint', { name: 'rechazadopor', nullable: true })
  rejectedBy: number;
}
