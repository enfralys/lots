import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('comer_parametrosmod', { schema: 'sera' })
export class EatParametersModEntity {
  @PrimaryColumn('varchar', { name: 'parametro', primary: true })
  parameter: string;

  @PrimaryColumn('varchar', { name: 'valor', length: 500 })
  worth: string;

  @Column('varchar', { name: 'descripcion', length: 200, nullable: true })
  description: string;

  @PrimaryColumn('varchar', { name: 'direccion', primary: true })
  address: string;

  @Column('numeric', { name: 'id_tpevento', nullable: true })
  idTpevent: number;
}
