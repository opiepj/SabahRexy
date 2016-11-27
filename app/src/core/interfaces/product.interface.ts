import {Operator, WorkEvent} from './operator.interface';
export interface Product {
  machineId: string;
  machineName: string;
  machineType: string;
  assignment: string;
  fuel: string;
  avgPayload: string;
  imagePath: string;
  prevOperator?: string | Operator;
  location?: Location;
}

export interface ProductDetail extends Product {
  rank: number | string;
  overallEff: number;
  rankTotal?: number | string; // @TODO needed?
  schedule?: Array<WorkEvent>;
}

export interface Location {
  distance: number;
}
