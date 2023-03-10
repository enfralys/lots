import { Entity, PrimaryColumn } from 'typeorm';

@Entity('comer_customers', { schema: 'sera' })
export class EatCustomers {
  @PrimaryColumn('numeric', { name: 'id_det_lc', primary: true })
  id: number;
}
