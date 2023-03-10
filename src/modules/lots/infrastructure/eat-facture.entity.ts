import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_facturas', { schema: 'sera' })
export class EatFactureEntity {
  @PrimaryColumn('numeric', { name: 'id_factura', primary: true })
  idFacture: number;

  @Column('numeric', { name: 'id_evento' })
  idEvent: number;

  @Column('character varying', { name: 'id_estatusfact', length: 4 })
  invoiceStatusId: string;

  @Column('numeric', { name: 'id_lote' })
  lotId: number;

  @Column('character varying', { name: 'cliente', length: 100 })
  client: string;

  @Column('character varying', { name: 'cve_proceso', length: 100 })
  processCode: string;

  @Column('numeric', { name: 'id_causarefactura', nullable: true })
  invoiceCauseId: number;

  @Column('numeric', { name: 'id_foliofactura', nullable: true })
  invoiceFolioId: number;

  @Column('character varying', { name: 'rfc', length: 20, nullable: true })
  rfc: string;

  @Column('character varying', { name: 'calle', length: 80, nullable: true })
  street: string;

  @Column('character varying', { name: 'colonia', length: 60, nullable: true })
  neighborhood: string;

  @Column('character varying', {
    name: 'municipio',
    length: 30,
    nullable: true,
  })
  municipality: string;

  @Column('character varying', { name: 'estado', length: 20, nullable: true })
  state: string;

  @Column('character varying', { name: 'cp', length: 6, nullable: true })
  zipCode: string;

  @Column('numeric', { name: 'tipo', nullable: true })
  type: number;

  @Column('numeric', { name: 'tpevento', nullable: true })
  eventType: number;

  @Column('numeric', {
    name: 'cantidad',
    nullable: true,
    precision: 19,
    scale: 2,
  })
  quantity: number;

  @Column('character varying', {
    name: 'descripcion',
    length: 1250,
    nullable: true,
  })
  description: string;

  @Column('numeric', {
    name: 'precio',
    nullable: true,
    precision: 19,
    scale: 2,
  })
  price: number;

  @Column('numeric', { name: 'iva', nullable: true, precision: 11, scale: 2 })
  vat: number;

  @Column('numeric', { name: 'total', nullable: true, precision: 19, scale: 2 })
  total: number;

  @Column('numeric', { name: 'no_transferente', nullable: true })
  notTransferent: number;

  ///
  @Column({ type: 'numeric', name: 'id_lc', nullable: true })
  letterOfCreditId: number;

  @Column({ type: 'varchar', name: 'serie', length: 10, nullable: true })
  series: string;

  @Column({ type: 'numeric', name: 'folio', precision: 6, nullable: true })
  folio: number;

  @Column({ type: 'varchar', name: 'desclasifica', length: 70, nullable: true })
  desclassify: string;

  @Column({ type: 'numeric', name: 'no_bien', precision: 10, nullable: true })
  assetNumber: number;

  @Column({
    type: 'varchar',
    name: 'usuario_autorizo',
    length: 30,
    nullable: true,
  })
  authorizedUser: string;

  @Column({ type: 'date', name: 'fecha_autorizo', nullable: true })
  authorizationDate: Date;

  @Column({
    type: 'numeric',
    name: 'no_delegacion',
    precision: 3,
    nullable: true,
  })
  delegationNumber: number;

  @Column({ type: 'varchar', name: 'procesar', length: 2, nullable: true })
  process: string;

  @Column({ type: 'date', name: 'fecha_foliacion', nullable: true })
  foliationDate: Date;

  @Column({ type: 'date', name: 'fecha_seguridad', nullable: true })
  securityDate: Date;

  @Column({ type: 'date', name: 'fecha_impresion', nullable: true })
  printDate: Date;

  @Column({
    type: 'varchar',
    name: 'arch_img_temp',
    length: 100,
    nullable: true,
  })
  tempImageFile: string;

  @Column({ type: 'varchar', name: 'autorizo', length: 50, nullable: true })
  authorized: string;

  @Column({ type: 'date', name: 'fecha_evento', nullable: true })
  eventDate: Date;

  @Column({
    type: 'varchar',
    name: 'cve_procesotp',
    length: 100,
    nullable: true,
  })
  processTpCode: string;

  @Column({ type: 'varchar', name: 'solicita', length: 60, nullable: true })
  requester: string;

  @Column({ type: 'varchar', name: 'cvman', length: 8, nullable: true })
  cvman: string;

  @Column({ type: 'varchar', name: 'desc_cvman', length: 150, nullable: true })
  cvmanDescription: string;

  @Column({ type: 'varchar', name: 'anexo', length: 2, nullable: true })
  annex: string;
  //--------------

  @Column('numeric', { name: 'id_evento_relimag' })
  idEventoRelimag: number;

  @Column('character varying', { name: 'leyenda1', length: 250 })
  leyend1: string;

  @Column('character varying', { name: 'coordinador', length: 120 })
  coordinador: string;

  @Column('character varying', { name: 'puestocoord', length: 120 })
  coordinatorPosition: string;

  @Column('character varying', { name: 'id_tpfactura', length: 2 })
  idTpbill: string;

  @Column('character varying', { name: 'documento', length: 3 })
  document: string;

  @Column('numeric', { name: 'iva_simplificado' })
  simplifiedTax: number;

  @Column('numeric', { name: 'ordening_vtabases' })
  orderingVtabases: number;

  @Column('date', { name: 'fechaording_vtabases' })
  orderingDateVtabases: Date;

  @Column('character varying', { name: 'tipocomprobante', length: 10 })
  invoiceType: string;

  @Column('numeric', { name: 'monto_retenido' })
  withheldAmount: number;

  @Column('numeric', { name: 'isr_retenido' })
  withheldIsr: number;

  @Column('numeric', { name: 'no_registro' })
  registrationNumber: number;

  @Column('character varying', { name: 'unidad', length: 200 })
  unit: string;

  @Column('numeric', { name: 'id_solicitudpago' })
  paymentRequestId: number;

  @Column('numeric', { name: 'id_tpevento_relfac' })
  idTpeventRelFac: number;

  @Column('numeric', { name: 'monto_app_iva' })
  appTaxAmountnumber;

  @Column('numeric', { name: 'monto_noapp_iva' })
  noAppTaxAmount: number;

  @Column('character varying', { name: 'direccion', length: 1 })
  addressstring;

  @Column('numeric', { name: 'id_pago' })
  paymentId: number;

  @Column('numeric', { name: 'val_fol' })
  valFolio: number;

  @Column('character varying', { name: 'cp_emisor', length: 6 })
  issuerPostalCode: string;

  @Column('character varying', { name: 'c_pais_sat', length: 4 })
  cSatCountry: string;

  @Column('numeric', {
    name: 'num_parcialidad_sat',
  })
  numSatPartiality: number | null;

  @Column('numeric', {
    name: 'imp_slant_sat',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  impSlantSat: number | null;

  @Column('numeric', {
    name: 'imp_pagado_sat',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  impPaidSat: number | null;

  @Column('numeric', {
    name: 'imp_slinsoluto_sat',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  impSlinsoluteSat: number | null;

  @Column('character varying', {
    name: 'uso_comp_sat',
    length: 4,
    nullable: true,
  })
  usCompSat: string | null;

  @Column('character varying', {
    name: 'cve_unidad_sat',
    length: 4,
    nullable: true,
  })
  cveUnitSat: string | null;

  @Column('character varying', {
    name: 'cve_prodserv_sat',
    length: 10,
    nullable: true,
  })
  cveProdservSat: string | null;

  @Column('numeric', { name: 'id_factura_padre', nullable: true })
  idInvoiceFathernumber: null;

  @Column('character varying', {
    name: 'cve_moneda_sat',
    length: 4,
    nullable: true,
  })
  cveCorrencySat: string | null;

  @Column('character varying', {
    name: 'cve_tipo_comp_sat',
    length: 2,
    nullable: true,
  })
  cveTypeCompSat: string | null;

  @Column('character varying', {
    name: 'cve_metodo_pago_sat',
    length: 4,
    nullable: true,
  })
  cvePaymentMethodSat: string | null;

  @Column('character varying', {
    name: 'cve_impuesto_sat',
    length: 4,
    nullable: true,
  })
  cveTaxSat: string | null;

  @Column('character varying', {
    name: 'cve_tasa_cuota_sat',
    length: 9,
    nullable: true,
  })
  cveRateFeeSat: string | null;

  @PrimaryColumn('numeric', { name: 'id_factura', primary: true })
  idFactura: number;

  @Column('character varying', { name: 'id_estatusfact', length: 4 })
  idEstatusFactura: string;

  @Column('character varying', {
    name: 'cve_tipo_factor_sat',
    length: 10,
    nullable: true,
  })
  cveTypeFactorSat: string;

  @Column('character varying', {
    name: 'cve_tipo_relacion_sat',
    length: 3,
    nullable: true,
  })
  cveTypeRelationSat: string;

  @Column('numeric', {
    name: 'cve_subtotal_bsat',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  cveSubtotalBsat: number;

  @Column('numeric', {
    name: 'cve_total_bsat',
    precision: 15,
    scale: 2,
    nullable: true,
  })
  cveTotalBsat: number;

  @Column('character varying', {
    name: 'cve_moneda_bsat',
    length: 4,
    nullable: true,
  })
  cveMonedaBsat: string;

  @Column('character varying', {
    name: 'no_identificacion_sat',
    length: 50,
    nullable: true,
  })
  noIdentificacionSat: string;

  @Column('character varying', { name: 'formapago', length: 3, nullable: true })
  formaPago: string;

  @Column('character varying', {
    name: 'formapago_bsat',
    length: 3,
    nullable: true,
  })
  formaPagoBsat: string;

  @Column('character varying', {
    name: 'cve_proceso_bsat',
    length: 100,
    nullable: true,
  })
  cveProcesoBsat: string;

  @Column('numeric', {
    name: 'valor_unitario',
    precision: 18,
    scale: 6,
    nullable: true,
  })
  valorUnitario: number;
}
