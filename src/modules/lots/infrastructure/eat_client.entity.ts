import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_clientes', { schema: 'sera' })
export class EatClientEntity {
  @PrimaryColumn('numeric', { name: 'id_cliente', primary: true })
  idClient: number;

  @Column('character varying', { name: 'nom_razon', length: 100 })
  nomRazon: string;

  @Column('character varying', { name: 'rfc', length: 20 })
  rfc: string;

  @PrimaryColumn('numeric', { name: 'id_vendedor' })
  idVendedor: number;

  @Column('character varying', { name: 'calle', length: 80 })
  street: string;

  @Column('character varying', { name: 'ciudad', length: 60 })
  city: string;

  @Column('character varying', { name: 'colonia', length: 60 })
  neighborhood: string;

  @Column('character varying', { name: 'delegacion', length: 49 })
  delegation: string;

  @Column('character varying', { name: 'cp', length: 6 })
  zipCode: string;

  @Column('character varying', { name: 'pais', length: 22 })
  country: string;

  @Column('character varying', { name: 'fax', length: 20 })
  fax: string;

  @Column('character varying', { name: 'telefono', length: 60 })
  phone: string;

  @Column('character varying', { name: 'correoweb', length: 60 })
  email: string;

  @Column('character varying', { name: 'estado', length: 31 })
  state: string;

  @Column('character varying', { name: 'curp', length: 20 })
  curp: string;

  @Column('character varying', { name: 'lista_negra', length: 2 })
  blackList: string;

  @Column('character varying', { name: 'apellido_paterno', length: 60 })
  lastName: string;

  @Column('character varying', { name: 'apellido_materno', length: 60 })
  motherLastName: string;

  @Column('numeric', { name: 'muni_id', precision: 5, scale: 0 })
  muniId: number;

  @Column('numeric', { name: 'esta_id', precision: 5, scale: 0 })
  estaId: number;

  @Column('date', { name: 'fecha_lista_negra' })
  blackListDate: Date;

  @Column('date', { name: 'fecha_liberacion' })
  releaseDate: Date;

  @PrimaryColumn('numeric', { name: 'id_penalizacion' })
  idPenalization: number;

  @Column('character varying', { name: 'tipo_persona', length: 1 })
  personType: string;

  @Column('character varying', { name: 'rfc_homologado', length: 15 })
  homologatedRfc: string;

  @PrimaryColumn('character varying', { name: 'usu_libera', length: 30 })
  userLiberation: string;

  @Column('date', { name: 'fec_libera' })
  dateFree: Date;

  @Column('numeric', { name: 'no_registro' })
  noRegistro: number;

  @Column('character varying', { name: 'cve_act_economica', length: 20 })
  cveActEconomica: string;

  @Column('numeric', { name: 'tipo_identificacion', precision: 2, scale: 0 })
  tipoIdentificacion: number;

  @Column('character varying', { name: 'num_identificacion', length: 50 })
  numIdentificacion: string;

  @PrimaryColumn('numeric', {
    name: 'id_representante',
    precision: 5,
    scale: 0,
  })
  idRepresentante: number;

  @Column('character varying', { name: 'no_exterior', length: 40 })
  noExterior: string;

  @Column('character varying', { name: 'no_interior', length: 40 })
  noInterior: string;

  @Column('character varying', { name: 'password', length: 50 })
  password: string;

  @Column('character varying', { name: 'usuario', length: 50 })
  usuario: string;

  @Column('character varying', { name: 'clabe_interbancaria', length: 18 })
  clabeInterbancaria: string;

  @Column('character varying', { name: 'banco', length: 3 })
  banco: string;

  @Column('character varying', { name: 'sucursal', length: 10 })
  sucursal: string;

  @Column('character varying', { name: 'cuenta_cheques', length: 11 })
  cuentaCheques: string;

  @Column('date', { name: 'fec_ini_penalizacion' })
  fecIniPenalizacion: Date;

  @Column('date', { name: 'fec_fin_penalizacion' })
  fecFinPenalizacion: Date;

  @PrimaryColumn('character varying', { name: 'usu_penaliza', length: 30 })
  usuPenaliza: string;
}
