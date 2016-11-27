export interface McDOrder {
  fastRating?: number;
  friendlyRating?: number;
  geofence: boolean;
  orderId: string;
  orderNumber: string;
  orderStatus: string;
  stage: OrderStage; // 0 received 1 in-progress 2 picked-up
  purchase?: McDCart;
}

export interface McDCart {
  items: Array<McDItem>;
  total: number;
  user: {
    name: string;
  };
}

export interface McDItem {
  imagePath: string;
  name: string;
  price: number;
}

export enum OrderStage {
  Received,
  InProgress,
  PickedUp
}
