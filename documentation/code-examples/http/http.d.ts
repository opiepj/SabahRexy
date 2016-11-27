export type Country = string;
export type Friend = string;

// Mock API Responses

export interface CountryInfo {
  capitol: string;
}

export interface Friends {
  friends?: Array<Friend>;
}

export interface Customer {
  name: string;
  contractUrl: string;
}

export interface Contract {
  contractId?: number;
  product?: string;
}

// END Mock API Responses

export class Person {
  public firstName: string;
  public lastName: string;
}
