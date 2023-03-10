import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sera', name: 'comer_bienesexcel' })
export class EatGoodsExelEntity {
  @PrimaryColumn({
    name: 'audsid',
    type: 'numeric',    
     primary: true
  })
  audsid: number;

  @PrimaryColumn({
    name: 'no_bien',
    type: 'numeric',
     primary: true
  })
  notGood: number;

  @PrimaryColumn({
    name: 'lote_publico',
    type: 'numeric',
     primary: true
  })
  publicLot: number;

  @Column({ name: 'anexo', type: 'varchar', length: 2, nullable: true })
  exhibit: string;

  @Column({ name: 'desc_lote', type: 'varchar', length: 1250, nullable: true })
  lotDesc: string;

  @Column({ name: 'valor_base', type: 'numeric', nullable: true })
  baseValue: number;

  @Column({ name: 'a_iva', type: 'varchar', length: 2, nullable: true })
  aIva: string;
}
