export interface Order {
  id: number;
  product: string;
  status: string;
  quantity: number;
}

export interface Line {
  id: number;
  name: string;
  status: string;
}

export interface ProductionStat {
  hour: string;
  units: number;
}
