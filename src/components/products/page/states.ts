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

export type ProductState = {
  name: string;
  description: string;
  features: string[];
  price: number;
  quantity: number;
  category: string;
  brand: string;
  specs: SpecState;
  originalPrice: number;
  imageUrl: string[];
};

export type ProductResponse = {
  message: string;
  data: ProductState;
};
