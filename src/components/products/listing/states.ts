export type SpecState = {
  processor?: string;
  graphics?: string;
  memory?: string;
  storage?: string;
  displayType?: string;
  screenSize?: string;
  screenResolution?: string;
  color?: string;
};

export type ReviewState = {
  id: string;
  title: string;
  comment: string;
  rating: number;
  createdAt: Date;
};

export type OrderState = {
  id: string;
  products: ProductState[];
  total: number;
  createdAt: Date;
};

export type UserState = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  savedProducts: ProductState[];
  reviews: ReviewState[];
  orders: OrderState[];
};

export type ProductState = {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  quantity: number;
  stock: number;
  category: string;
  brand: string;
  specs: SpecState;
  originalPrice: number;
  imageUrl: string[];
  reviews: ReviewState[];
};

export type ProductResponse = {
  message: string;
  data: ProductState;
};
