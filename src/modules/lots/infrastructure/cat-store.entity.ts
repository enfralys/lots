import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cat_almacenes', { schema: 'sera' })
export class CatStoreEntity {
  @PrimaryColumn('numeric', { name: 'no_almacen', primary: true })
  storeNumber: number;

  @Column('character varying', { name: 'descripcion', length: 200 })
  description: string;

  @Column('character varying', { name: 'ubicacion', length: 200 })
  location: string;

  @Column('character varying', { name: 'responsable', length: 30 })
  inCharge: number;

  @Column('numeric', { name: 'no_registro', primary: true })
  registerNumber: number;

  @Column('numeric', { name: 'codigo_estado', primary: true })
  stateCode: number;

  @Column('numeric', { name: 'codigo_ciudad', primary: true })
  cityCode: number;

  @Column('numeric', { name: 'codigo_municipio', primary: true })
  municipalityCode: number;

  @Column('numeric', { name: 'codigo_localidad', primary: true })
  localCode: number;

  @Column('character varying', { name: 'ind_activo', length: 60 })
  indActivity: string;

  @Column('character varying', { name: 'tipo_almacen', length: 60 })
  storeType: string;

  @Column('numeric', { name: 'delegacion_res', primary: true })
  delegationRes: number;

}
