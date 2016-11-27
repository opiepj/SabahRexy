export interface Operator {
  imagePath: string;
  firstName: string;
  lastName: string;
}

export interface OperatorDetail extends Operator {
  licenseExpire: string | Date;
  efficiency: number; // percent
}

export interface WorkEvent {
  name: string;
  time: string; // ETA time
  cycles?: number; // percent
  tar: number;
  avgLoadtime: string;
}
