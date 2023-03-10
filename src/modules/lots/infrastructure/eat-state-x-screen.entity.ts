import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comer_estatus_x_pantalla', { schema: 'sera' })
export class StatusXScreenEntity {
  @PrimaryGeneratedColumn({ name: 'id_com_estx_pan' })
  id: number;

  @Column('character varying', { name: 'estatus', length: 4 })
  status: string;

  @Column('character varying', { name: 'descripcion', length: 100 })
  description: string;

  @Column('character varying', { name: 'cve_pantalla', length: 30 })
  screenKey: string;

  @Column('character varying', { name: 'estatus_final', length: 4 })
  finalStatus: string;

  @Column('character varying', { name: 'accion', length: 30 })
  action: string;

  @Column('character varying', { name: 'estatus_nuevo', length: 4 })
  newStatus: string;

  @Column('numeric', { name: 'no_registro' })
  registryNumber: number;

  @Column('character varying', { name: 'identificador', length: 5 })
  identifier: string;

  @Column('character varying', { name: 'tipo', length: 15 })
  type: string;

  @Column('character varying', { name: 'proceso', length: 15 })
  process: string;

  @Column('numeric', { name: 'id_com_estx_pan' })
  idComEstxPan: number;
}
