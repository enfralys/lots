import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
      ApiBody,
      ApiCreatedResponse,
      ApiOperation,
      ApiParam,
      ApiQuery,
      ApiResponse,
      ApiTags,
} from '@nestjs/swagger';
import { ApplicationService } from '../../services/application/application.service';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { EatLostDTO } from 'src/modules/lots/application/dtos/eat-lots.dto';
import { DeteleteRevPcvDTO } from 'src/modules/lots/application/dtos/delete-rev-pcv.dto';
import { MessagePattern } from '@nestjs/microservices';
import { EatParametersForLotEntity } from 'src/modules/lots/infrastructure/eat-parametersforlot.entity';
import { DescripElectronicDTO } from 'src/modules/lots/application/dtos/descrip-electronic.dto';
import { PaRunOperDTO } from 'src/modules/lots/application/dtos/pa-run-oper.dto';
import { GetLotAfDTO } from 'src/modules/lots/application/dtos/get-lot-af.dto';
import { EatWellAfterTableDTO } from 'src/modules/lots/application/dtos/eating-well-after-table.dto';
import { PaRegFinalPriceDTO } from 'src/modules/lots/application/dtos/pa-reg-final-price.dto';
import { PaSalesEatLotsDTO } from 'src/modules/lots/application/dtos/pa-sales-eat-lots.dto';
import { PaCreateLotsDTO } from 'src/modules/lots/application/dtos/pa-create-lots.dto';
import { FillDateEatDTO } from '../../dtos/fill-data-eat.dto';
import { GetFillTmpEatDT } from '../../dtos/get-fill-tmp-eat.dto';
import { LotsByUserV5DTO } from '../../dtos/lots-by-user-v5.dto';
import { PaEatFailDTO } from '../../dtos/pa-eat-fail.dto';
import { ActTmpEatDTO } from '../../dtos/act-tmp-eat.dto';
import { paDispMueblesDTO } from '../../dtos/pa-dismuebles.dto';

@ApiCreatedResponse()
@ApiTags('applications')
@Controller('apps')
export class ApplicationController {
      constructor(private service: ApplicationService) { }

      @ApiOperation({ summary: 'PROCEDURE SERA.OBT_RESUMEN' })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'inIdEvent',
            description: 'Busca por su inIdEvent',
      })
      @Get('query-obt-summary/:inIdEvent')
      async qObtSumary(@Param('inIdEvent') inIdEvent: number) {
            return await this.service.getSummary(inIdEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.OBTENER_LOTESUSUARIO',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'rfc',
            description: 'Busca por rfc',
      })
      @Get('query-lot-user/:rfc')
      async qLotUser(@Param('rfc') rfc: string) {
            return await this.service.getLotUser(rfc);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.CONSULTALOTESOLOTERCERO',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idLot',
            description: 'Busca por idLot',
      })
      @Get('query-consult-lot-thrid-party/:idLot')
      async qConsultLotThirdParty(@Param('idLot') idLot: number) {
            return await this.service.getConsultLotThirdParty(idLot);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.CONSULTALOTESTERCEROS',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por idEvent',
      })
      @Get('query-consult-thrid-party-lots/:idEvent')
      async qConsultThirdPartyLots(@Param('idEvent') idEvent: number) {
            return await this.service.getConsultThirdPartyLots(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.CONSULTALOTESVENTA',
      })
      @ApiOperation({ summary: 'Paginación de todos los registros' })
      @ApiResponse({
            status: 200,
            type: [EatLostDTO],
      })
      @ApiQuery({
            name: 'page',
            description: 'Número de página',
            type: Number,
            required: false,
      })
      @ApiQuery({
            name: 'limit',
            description: 'Limite de elementos',
            type: Number,
            required: false,
      })
      @ApiQuery({
            name: 'search',
            description: 'Texto a buscar',
            type: String,
            required: false,
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idClient',
            description: 'Busca por idClient',
      })
      @Get('query-consul-sale-lots/:idClient')
      async qConsultSaleLots(
            @Param('idClient') idClient: number,
            @Paginate() query: PaginateQuery,
      ) {
            return await this.service.getConsultSaleLots(idClient, query);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.OBT_LOTES_SIN_IVA',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por idEvent',
      })
      @Get('query-obt-lots-without-iva/:idEvent')
      async qObtLotsWithoutIva(@Param('idEvent') idEvent: number) {
            return await this.service.getObtLotsWithoutIva(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_OBTENER_IDLOTE',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por idEvent',
      })
      @ApiParam({
            name: 'lotPublic',
            description: 'Busca por lotPublic',
      })
      @Get('query-to-obtain-idlot/:idEvent/:lotPublic')
      async qToObtainIdLot(
            @Param('idEvent') idEvent: number,
            @Param('lotPublic') lotPublic: number,
      ) {
            return await this.service.getToObtainIdLot(idEvent, lotPublic);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_REPORTE_GANADORES',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por idEvent',
      })
      @Get('query-winners-report/:idEvent')
      async qWinnersReport(@Param('idEvent') idEvent: number) {
            return await this.service.getWinnersReport(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({ summary: 'PROCEDURE SERA.PA_ELIMINA_REVCPV' })
      @ApiBody({ type: EatLostDTO })
      @ApiResponse({
            status: 200,
            description: 'Actualiza o elimina un dato REVPCv',
            type: EatLostDTO,
      })
      @Post('query-delete-rev-pcv')
      @MessagePattern({ cmd: 'paDeleteRevPcv' })
      async paDeleteRevPcv(@Body() dto: DeteleteRevPcvDTO) {
            return await this.service.paDeleteRevPcv(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_COMER_PARAMETROSXLOTE',
      })
      @ApiOperation({ summary: 'Paginación de todos los registros' })
      @ApiResponse({
            status: 200,
            type: [EatParametersForLotEntity],
      })
      @ApiQuery({
            name: 'page',
            description: 'Número de página',
            type: Number,
            required: false,
      })
      @ApiQuery({
            name: 'limit',
            description: 'Limite de elementos',
            type: Number,
            required: false,
      })
      @ApiQuery({
            name: 'search',
            description: 'Texto a buscar',
            type: String,
            required: false,
      })
      @Get('query-eat-parameters-for-lot')
      async qetEatParametersForLot(@Paginate() query: PaginateQuery) {
            return await this.service.getEatParametersForLot(query);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.SP_CONSULTA_EVENTOS_USUARIO',
      })
      @ApiResponse({
            status: 200,
      })
      @ApiParam({
            name: 'rfc',
            description: 'Busca por rfc',
      })
      @Get('query-sp-user-event-query/:rfc')
      async qSpUserEventQuery(@Param('rfc') rfc: string) {
            return await this.service.getSpUserEventsQuery(rfc);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.GET_DESC_ELECTRONICA',
      })
      @ApiBody({ type: DescripElectronicDTO })
      @ApiResponse({
            status: 200,
            description: 'obtener consulta pagos por lote ',
      })
      @Post('query-description-electronic')
      async qDescriptionElectronic(@Body() dto: DescripElectronicDTO) {
            return await this.service.getDescriptionElectronic(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.SP_CONSULTA_LOTES_NO_PAGADOS',
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por idEvent',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-sp-consult-unpaid-lots/:idEvent')
      async qConsultUnpaidLots(@Param('idEvent') idEvent: number) {
            return await this.service.getSpConsultUnpaidLots(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.SP_CONSULTA_LOTES_PAG',
      })
      @ApiParam({
            name: 'rfc',
            description: 'Busca por rfc',
      })
      @ApiResponse({
            status: 200,
            description: 'obtener consulta lotes  pagados ',
      })
      @Get('query-sp-batches-pag/:rfc')
      async getSpQueryBatchesPag(@Param('rfc') rfc: string) {
            return await this.service.getSpQueryBatchesPAG(rfc);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_EJECUTA_OPER',
      })
      @ApiBody({ type: EatLostDTO })
      @ApiResponse({
            status: 200,
            description: 'Actualiza o elimina un dato REVPCv',
      })
      @Post('query-pa-run-oper')
      async queryPaRunOper(@Body() dto: PaRunOperDTO) {
            return await this.service.getPaRunOper(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_COMER_EST_LOTES',
      })
      @ApiResponse({
            status: 200,
            description: 'Para obtener los estados del lote',
      })
      @Get('query-pa-eat-es-lots')
      async queryPaEatEstLots(@Paginate() query: PaginateQuery) {
            return await this.service.getPaEatEstLots(query);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_COMER_LIMPIA_FALLO',
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por su idEvent',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-eat-clean-failure/:idEvent')
      async queryPaEatCleanFailure(@Param('idEvent') idEvent: number) {
            return await this.service.getPaEatCleanFailure(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_CREA_LOTE_CANC',
      })
      @ApiParam({
            name: 'noBien',
            description: 'Busca por su noBien',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-create-lot-canc/:noBien')
      async queryPaCreateLotCanc(@Param('noBien') noBien: number) {
            return await this.service.getPaCreteLotCanc(noBien);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.OBTENER_LOTES_AF',
      })
      @ApiBody({ type: GetLotAfDTO })
      @ApiResponse({
            status: 200,
      })
      @Post('query-lots-af')
      async queryLotsAf(@Body() dto: GetLotAfDTO) {
            return await this.service.getLotsAf(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_REG_PCT',
      })
      @ApiParam({
            name: 'idEvent',
            description: 'Busca por su idEvent',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-reg-pct/:idEvent')
      async getPaRegPct(@Param('idEvent') idEvent: number) {
            return await this.service.getPaRegPct(idEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.COMER_BIENES_SINREMESA',
      })
      @ApiResponse({
            status: 200,
      })
      @Post('query-eat-goods-without-remittance')
      async queryEatGoodsWithoutRemittance(@Body() dto: EatWellAfterTableDTO) {
            return await this.service.getEatGoodsWithoutRemittance(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_REG_PRECIOS_FINALES',
      })
      @ApiParam({
            name: 'pEvent',
            description: 'Busca por su pEvent',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-reg-final-prices/:pEvent')
      async queryPaRegFinalPrices(@Param('pEvent') pEvent: number) {
            return await this.service.getPaRegFinalPrices(pEvent);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_GARANTXLOTE_FILE',
      })
      @ApiParam({
            name: 'pevento',
            description: 'Busca por su pevento',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-garant-by-lot/:pevento')
      async queGarantByLot(@Param('pevento') pevento: number) {
            return await this.service.paGarantByLotFile(pevento);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.SP_LOTES_POR_USUARIOV5',
      })
      @ApiBody({ type: LotsByUserV5DTO })
      @ApiResponse({
            status: 200,
      })
      @Post('query-sp-lots-by-user-v5')
      async querySpLotsByUserV5(@Body() dto: LotsByUserV5DTO) {
            return await this.service.getSpLotsByUserV5(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_VENTAS_COMERLOTES',
      })
      @ApiBody({ type: EatLostDTO })
      @ApiResponse({
            status: 200,
      })
      @Post('query-pa-sales-eat-lots')
      async querySalesEatLots(@Body() dto: PaSalesEatLotsDTO) {
            return await this.service.paSalesEatLots(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_CREAR_LOTES',
      })
      @ApiBody({ type: PaCreateLotsDTO })
      @ApiResponse({
            status: 200,
      })
      @Post('query-pa-create-lots')
      async queryPaCreateLots(@Body() dto: PaCreateLotsDTO) {
            return await this.service.getPaCreateLots(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.OBTEN_LOTES_PAG',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-lot-pag/:rfcIn')
      async queryLotPag(@Param('rfcIn') rfcIn: string) {
            return await this.service.getLotPag(rfcIn);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.LLENA_TMP_COMER',
      })
      @ApiBody({ type: GetFillTmpEatDT })
      @ApiResponse({
            status: 200,
      })
      @Post('query-fill-tmp-eat')
      async queryFillTmpEat(@Body() dto: GetFillTmpEatDT) {
            return await this.service.getFillTmpEat(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.LLENA_DATOS_COMER',
      })
      @ApiResponse({
            status: 200,
      })
      @Post('query-fill-data-eat')
      async queryFillDataEat(@Body() dto: FillDateEatDTO) {
            return await this.service.getFillDataEat(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.ACT_TMP_COMER',
      })
      @ApiResponse({
            status: 200,
      })
      @Post('query-get-act-tmp-eat')
      async queryActTmpEats(@Body() dto: ActTmpEatDTO) {
            return await this.service.getActTmpEat(dto);
      }
      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_COMER_FALLO',
      })
      @ApiResponse({
            status: 200,
      })
      @Post('query-pa-eat-fail')
      async queryPaEatFail(@Body() dto: PaEatFailDTO) {
            return await this.service.getPaEatFail(dto);
      }

      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_COMER_FALLO',
      })
      @ApiResponse({
            status: 200,
      })
      @Post('pa-dismuebles')
      async paDismuebles(@Body() dto: paDispMueblesDTO) {
            return await this.service.paDispMuebles(dto);
      }

      //-----------------------------------------------------------
      @ApiOperation({
            summary: 'PROCEDURE SERA.PA_GARANTXLOTE',
      })
      @ApiResponse({
            status: 200,
      })
      @Get('query-pa-garant-by-lot')
      async queryPaGarantByLot() {
            return await this.service.getPaGarantByLot();
      }
}
