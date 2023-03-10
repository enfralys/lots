import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('comer_factura_elec', { schema: 'sera' })
export class EatFactureElecEntity {
  @PrimaryColumn('numeric', { name: 'id_factura' })
  idFacture: number;

  @Column('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('numeric', { name: 'id_lote' })
  lotId: number;

  @Column('character varying', { name: 'cliente' })
  client: string;

  @Column('character varying', { name: 'cve_proceso' })
  processKey: string;

  @Column('character varying', { name: 'num_certificado', nullable: true })
  certificateNumber: string;

  @Column('character varying', { name: 'num_certificadosat', nullable: true })
  satCertificateNumber: string;

  @Column('character varying', { name: 'uuid', nullable: true })
  uuid: string;

  @Column('character varying', { name: 'fe_fecha_firmado', nullable: true })
  signedDate: string;

  @Column('numeric', { name: 'fe_firmado', nullable: true })
  signed: number;

  @Column('character varying', { name: 'fe_rutaxml', nullable: true })
  xmlPath: string;

  @Column('date', { name: 'fe_actualiza', nullable: true })
  updatedDate: Date;

  @Column('character varying', { name: 'formapago', nullable: true })
  paymentMethod: string;

  @Column('character varying', { name: 'condicionespago', nullable: true })
  paymentConditions: string;

  @Column('character varying', { name: 'error_layout', nullable: true })
  layoutError: string;

  @Column('character varying', { name: 'ruta_pdf', nullable: true })
  pdfPath: string;

  @Column('character varying', { name: 'nombre_archivo', nullable: true })
  fileName: string;

  @Column('character varying', { name: 'sello_cfdi', nullable: true })
  cfdiSeal: string;

  @Column('character varying', { name: 'sello_sat', nullable: true })
  satSeal: string;

  @Column('character varying', { name: 'usuario_procesa', nullable: true })
  processingUser: string;

  @Column('numeric', { name: 'no_registro', nullable: true })
  registrationNumber: number;
}
