import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bienes', { schema: 'sera' })
export class EstateEntity {
  @PrimaryColumn('numeric', { name: 'no_bien', primary: true })
  goodNumber: number;

  @Column('character varying', {
    name: 'no_inventario',
    length: 30,
    nullable: true,
  })
  inventoryNumber: string;

  @Column('character varying', {
    name: 'descripcion',
    length: 1250,
    nullable: true,
  })
  description: string;

  @Column('numeric', {
    name: 'cantidad',
    precision: 22,
    scale: 3,
    nullable: true,
  })
  quantity: number;

  @Column('timestamp', { name: 'fec_entrada', nullable: true })
  entryDate: Date;

  @Column('timestamp', { name: 'fec_salida', nullable: true })
  exitDate: Date;

  @Column('timestamp', { name: 'fec_vencim', nullable: true })
  expirationDate: Date;

  @Column('character varying', {
    name: 'tipo_ubicacion',
    length: 1,
    nullable: true,
  })
  locationType: string;

  @Column('character varying', { name: 'val1', length: 200, nullable: true })
  val1: string;

  @Column('character varying', { name: 'val2', length: 200, nullable: true })
  val2: string;

  @Column('character varying', { name: 'val3', length: 80, nullable: true })
  val3: string;

  @Column('character varying', { name: 'val4', length: 80, nullable: true })
  val4: string;

  @Column('character varying', { name: 'val5', length: 160, nullable: true })
  val5: string;

  @Column('character varying', { name: 'val6', length: 80, nullable: true })
  val6: string;

  @Column('character varying', { name: 'val7', length: 80, nullable: true })
  val7: string;

  @Column('character varying', { name: 'val8', length: 80, nullable: true })
  val8: string;

  @Column('character varying', { name: 'val9', length: 80, nullable: true })
  val9: string;

  @Column('character varying', { name: 'val10', length: 80, nullable: true })
  val10: string;

  @Column('character varying', { name: 'val11', length: 80, nullable: true })
  val11: string;

  @Column('character varying', { name: 'val12', length: 80, nullable: true })
  val12: string;

  @Column('character varying', { name: 'val13', length: 80, nullable: true })
  val13: string;

  @Column('character varying', { name: 'val14', length: 80, nullable: true })
  val14: string;

  @Column('character varying', { name: 'val15', length: 80, nullable: true })
  val15: string;

  @Column('character varying', { name: 'val16', length: 80, nullable: true })
  val16: string;

  @Column('character varying', { name: 'val17', length: 80, nullable: true })
  val17: string;

  @Column('character varying', { name: 'val18', length: 80, nullable: true })
  val18: string;

  @Column('character varying', { name: 'val19', length: 80, nullable: true })
  val19: string;

  @Column('character varying', { name: 'val20', length: 80, nullable: true })
  val20: string;

  @Column('character varying', { name: 'val21', length: 80, nullable: true })
  val21: string;

  @Column('character varying', { name: 'val22', length: 80, nullable: true })
  val22: string;

  @Column('character varying', { name: 'val23', length: 80, nullable: true })
  val23: string;

  @Column('character varying', { name: 'val24', length: 80, nullable: true })
  val24: string;

  @Column('character varying', { name: 'val25', length: 80, nullable: true })
  val25: string;

  @Column('character varying', { name: 'val26', length: 80, nullable: true })
  val26: string;

  @Column('character varying', { name: 'val27', length: 200, nullable: true })
  val27: string;

  @Column('character varying', { name: 'val28', length: 200, nullable: true })
  val28: string;

  @Column('character varying', { name: 'val29', length: 80, nullable: true })
  val29: string;

  @Column('character varying', { name: 'val30', length: 80, nullable: true })
  val30: string;

  @Column('character varying', { name: 'val31', length: 80, nullable: true })
  val31: string;

  @Column('character varying', { name: 'val32', length: 80, nullable: true })
  val32: string;

  @Column('character varying', { name: 'val33', length: 80, nullable: true })
  val33: string;

  @Column('character varying', { name: 'val34', length: 500, nullable: true })
  val34: string;

  @Column('character varying', { name: 'val35', length: 80, nullable: true })
  val35: string;

  @Column('character varying', { name: 'val36', length: 80, nullable: true })
  val36: string;

  @Column('character varying', { name: 'val37', length: 80, nullable: true })
  val37: string;

  @Column('character varying', { name: 'val38', length: 80, nullable: true })
  val38: string;

  @Column('character varying', { name: 'val39', length: 80, nullable: true })
  val39: string;

  @Column('character varying', { name: 'val40', length: 80 })
  val40: string;

  @Column('character varying', {
    name: 'clasificacion_bien',
    length: 500,
    nullable: true,
  })
  classificationGood: string;

  @Column('character varying', {
    name: 'senalamientos_origen',
    length: 500,
    nullable: true,
  })
  originSignals: string;

  @Column('character varying', {
    name: 'sol_inscr_registro',
    length: 1,
    nullable: true,
  })
  solInscrRegistro: string;

  @Column('timestamp without time zone', {
    name: 'fec_dictamen',
    nullable: true,
  })
  fecOpinion: Date;

  @Column('character varying', {
    name: 'perito_dictamen',
    length: 30,
    nullable: true,
  })
  expertOpinion: string;

  @Column('character varying', {
    name: 'valuador_dictamen',
    length: 60,
    nullable: true,
  })
  appraiserOpinion: string;

  @Column('character varying', {
    name: 'dictamen',
    length: 500,
    nullable: true,
  })
  opinion: string;

  @Column('numeric', {
    name: 'valor_avaluo',
    precision: 17,
    scale: 2,
    nullable: true,
  })
  valueAppraisal: number;

  @Column('numeric', { name: 'no_gaveta', nullable: true })
  drawerNumber: number;

  @Column('numeric', { name: 'no_boveda', nullable: true })
  vaultNumber: number;

  @Column('numeric', { name: 'no_bien_referencia', nullable: true })
  referencePropertyNumber: number;

  @Column('character varying', {
    name: 'cve_moneda_avaluo',
    length: 15,
    nullable: true,
  })
  appraisalCurrencyCode: string;

  @Column('timestamp without time zone', {
    name: 'fec_avaluo_vig',
    nullable: true,
  })
  appraisalValidDate: Date;

  @Column('character varying', {
    name: 'aprob_dest_legal',
    length: 1,
    nullable: true,
  })
  legalDestApproval: string;

  @Column('character varying', {
    name: 'usr_aprobo_dest_legal',
    length: 30,
    nullable: true,
  })
  userApprovedLegalDest: string;

  @Column('timestamp without time zone', {
    name: 'fec_aprobo_dest_legal',
    nullable: true,
  })
  dateApprovedLegalDest: Date;

  @Column('timestamp without time zone', {
    name: 'fec_cumplimiento_abandono',
    nullable: true,
  })
  abandonmentComplianceDate: Date;

  @Column('timestamp without time zone', {
    name: 'fec_notificacion_abandono',
    nullable: true,
  })
  abandonmentNotificationDate: Date;
  @Column('character varying', {
    name: 'observaciones_abandono',
    length: 1000,
    nullable: true,
  })
  abandonmentObservations: string;

  @Column('timestamp without time zone', {
    name: 'fec_conf_abandono_judicial',
    nullable: true,
  })
  judicialAbandonmentConfirmationDate: Date;

  @Column('timestamp without time zone', {
    name: 'fec_notificacion',
    nullable: true,
  })
  notificationDate: Date;

  @Column('character varying', {
    name: 'notificado_a',
    length: 100,
    nullable: true,
  })
  notifiedTo: string;

  @Column('character varying', {
    name: 'lugar_notificacion',
    length: 300,
    nullable: true,
  })
  notificationPlace: string;

  @Column('timestamp without time zone', {
    name: 'fec_res_desecha_desech_rec_rev',
    nullable: true,
  })
  disposalOrRecoveryAndReversionDischargeResolutionDate: Date;

  @Column('timestamp without time zone', {
    name: 'fec_emision_resolucion_rec_rev',
    nullable: true,
  })
  recoveryAndReversionResolutionIssueDate: Date;

  @Column('timestamp without time zone', {
    name: 'fec_acuerdo_admisorio_rec_rev',
    nullable: true,
  })
  admissiveAgreementForRecoveryAndReversionDate: Date;

  @Column('timestamp without time zone', {
    name: 'fec_audiencia_rec_rev',
    nullable: true,
  })
  recoveryAndReversionHearingDate: Date;

  @Column('character varying', {
    name: 'observaciones_rec_rev',
    length: 500,
    nullable: true,
  })
  recoveryAndReversionObservations: string;

  @Column('character varying', {
    name: 'motivo_abandono',
    length: 15,
    nullable: true,
  })
  abandonmentReason: string;

  @Column('character varying', {
    name: 'resolucion',
    length: 1000,
    nullable: true,
  })
  resolution: string;

  @Column('timestamp', { name: 'fec_incosteabilidad', nullable: true })
  incosteabilityDate: Date;

  @Column('character varying', {
    name: 'criterio_incosteabilidad',
    length: 60,
    nullable: true,
  })
  incosteabilityCriteria: string;

  @Column('character varying', {
    name: 'usr_aprobo_utilizacion',
    length: 30,
    nullable: true,
  })
  userApprovedUtilization: string;

  @Column('timestamp', { name: 'fec_aprobo_utilizacion', nullable: true })
  approvedUtilizationDate: Date;

  @Column('character varying', {
    name: 'observaciones_utilizacion',
    length: 500,
    nullable: true,
  })
  utilizationObservations: string;

  @Column('timestamp', { name: 'fec_solic_cambio_numerario', nullable: true })
  monetaryChangeRequestDate: Date;

  @Column('character varying', {
    name: 'usuario_solic_cambio_numerario',
    length: 30,
    nullable: true,
  })
  userRequestedMonetaryChange: string;

  @Column('character varying', {
    name: 'motivo_cambio_numerario',
    length: 1000,
    nullable: true,
  })
  monetaryChangeReason: string;

  @Column('character varying', {
    name: 'solicito_cambio_numerario',
    length: 1,
    nullable: true,
  })
  monetaryChangeRequested: string;

  @Column('timestamp', {
    name: 'fec_autoriza_cambio_numerario',
    nullable: true,
  })
  authorizedMonetaryChangeDate: Date;

  @Column('character varying', {
    name: 'usuario_solic_cambio_numerario',
    length: 30,
    nullable: true,
  })
  monetaryChangeRequestUser: string;

  @Column('character varying', {
    name: 'solicito_cambio_numerario',
    length: 1,
    nullable: true,
  })
  requestedMonetaryChange: string;

  @Column('timestamp', {
    name: 'fec_autoriza_cambio_numerario',
    nullable: true,
  })
  monetaryChangeAuthorizationDate: Date;

  @Column('character varying', {
    name: 'usuario_autoriza_cambio_numerario',
    length: 30,
    nullable: true,
  })
  monetaryChangeAuthorizationUser: string;

  @Column('character varying', {
    name: 'autoriza_cambio_numerario',
    length: 1,
    nullable: true,
  })
  authorizedMonetaryChange: string;

  @Column('timestamp', {
    name: 'fec_ratifica_cambio_numerario',
    nullable: true,
  })
  monetaryChangeRatificationDate: Date;

  @Column('character varying', {
    name: 'motivo_rec_rev',
    length: 1000,
    nullable: true,
  })
  reviewReason: string;

  @Column('character varying', {
    name: 'acuerdo_inicial',
    length: 1000,
    nullable: true,
  })
  initialAgreement: string;

  @Column('character varying', {
    name: 'observaciones',
    length: 600,
    nullable: true,
  })
  observations: string;

  @Column('numeric', { name: 'no_expediente', nullable: true })
  recordNumber: number;

  @Column('numeric', { name: 'no_exp_asociado', nullable: true })
  associatedRecordNumber: number;

  @Column('numeric', { name: 'no_rack', nullable: true })
  rackNumber: number;

  @Column('numeric', { name: 'no_almacen', nullable: true })
  warehouseNumber: number;

  @Column('numeric', { name: 'no_lote', nullable: true })
  lotNumber: number;

  @Column('numeric', { name: 'no_clasif_bien', nullable: true })
  assetClassificationNumber: number;

  @Column('numeric', { name: 'no_subdelegacion', nullable: true })
  subdelegationNumber: number;

  @Column('smallint', { name: 'no_delegacion', nullable: true })
  delegationNumber: number;

  @Column('timestamp', { name: 'fec_recepcion_fisica', nullable: true })
  physicalReceptionDate: Date;

  @Column('character varying', {
    name: 'estatus_recurso_revision',
    length: 45,
    nullable: true,
  })
  revisionResourceStatus: string;

  @Column('timestamp', { name: 'fec_judicial', nullable: true })
  judicialDate: Date;

  @Column('timestamp', { name: 'fec_vencimiento_abandono', nullable: true })
  abandonmentExpirationDate: Date;

  @Column('timestamp', { name: 'fec_aprobo_destruccion', nullable: true })
  destructionApprovalDate: Date;

  @Column('character varying', {
    name: 'usr_aprobo_destruccion',
    length: 30,
    nullable: true,
  })
  destructionApprovalUser: string;

  @Column('character varying', {
    name: 'observaciones_destruccion',
    length: 500,
    nullable: true,
  })
  destructionObservations: string;

  @Column('numeric', { name: 'no_destino', nullable: true })
  destinationNumber: number;

  @Column('double precision', { name: 'no_registro', nullable: true })
  registrationNumber: number;

  @Column('timestamp', { name: 'fec_acuerdo_aseg', nullable: true })
  agreementDate: Date;

  @Column('numeric', { name: 'estado', nullable: true })
  status: number;

  @Column('varchar', { name: 'tipo_dictamen', length: 3, nullable: true })
  opinionType: string;

  @Column('timestamp', { name: 'fec_presentacion', nullable: true })
  presentationDate: Date;

  @Column('timestamp', { name: 'fec_subsana_rec_rev', nullable: true })
  revisionDate: Date;

  @Column('varchar', { name: 'estatus_recepcion', length: 1, nullable: true })
  receptionStatus: string;

  @Column('varchar', {
    name: 'usuario_promovente_deco_devo',
    length: 30,
    nullable: true,
  })
  userPromoterDecoDevo: string;

  @Column('timestamp', { name: 'fec_programada_x_deco_devo', nullable: true })
  scheduledDate: Date;

  @Column('numeric', { name: 'no_bien_padre_parcializacion', nullable: true })
  parentAssetNumber: number;

  @Column('varchar', {
    name: 'declaracion_abn_sera',
    length: 1000,
    nullable: true,
  })
  abnDeclaration: string;

  @Column('varchar', { name: 'identificador', length: 5, nullable: true })
  identifier: string;

  @Column('varchar', { name: 'id_inventari_siabi', length: 30, nullable: true })
  siabiInventoryId: string;

  @Column('varchar', { name: 'id_inmueble_cisi', length: 20, nullable: true })
  cisiPropertyId: string;

  @Column('varchar', { name: 'id_invactual_siabi', length: 25, nullable: true })
  siabiCurrentInventoryId: string;

  @Column('timestamp', { name: 'fecha_tesofe', nullable: true })
  tesofeDate: Date;

  @Column('varchar', { name: 'folio_tesofe', length: 20, nullable: true })
  tesofeFolio: string;

  @Column('numeric', { name: 'situacion', nullable: true })
  situation: number;

  @Column('varchar', { name: 'val41', length: 200, nullable: true })
  val41: string;

  @Column('varchar', { name: 'val42', length: 200, nullable: true })
  val42: string;

  @Column('varchar', { name: 'val43', length: 200, nullable: true })
  val43: string;

  @Column('varchar', { name: 'val44', length: 200, nullable: true })
  val44: string;

  @Column('varchar', { name: 'val45', length: 200, nullable: true })
  val45: string;

  @Column('character varying', { name: 'val46', length: 200, nullable: true })
  val46: string;

  @Column('character varying', { name: 'val47', length: 200, nullable: true })
  val47: string;

  @Column('character varying', { name: 'val48', length: 200, nullable: true })
  val48: string;

  @Column('character varying', { name: 'val49', length: 200, nullable: true })
  val49: string;

  @Column('character varying', { name: 'val50', length: 200, nullable: true })
  val50: string;

  @Column('numeric', { name: 'no_etiqueta', nullable: true })
  no_label: number;

  @Column('numeric', { name: 'no_volante', nullable: true })
  no_volante: number;

  @Column('timestamp', { name: 'fec_reg_insert', nullable: true })
  fec_reg_insert: Date;

  @Column('numeric', { name: 'visportal', nullable: true })
  visportal: number;

  @Column('character varying', { name: 'unidad', length: 10, nullable: true })
  unit: string;

  @Column('numeric', {
    name: 'valor_referencia',
    precision: 21,
    scale: 3,
    nullable: true,
  })
  reference_value: number;

  @Column('timestamp', { name: 'fec_reg_insert_hc', nullable: true })
  fec_reg_insert_hc: Date;

  @Column('character varying', {
    name: 'proceso_ext_dom',
    length: 15,
    nullable: true,
  })
  dom_ext_process: string;
}
