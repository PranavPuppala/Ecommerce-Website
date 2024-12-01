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

export type ProductState = {
  id: string;
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
  reviews: ReviewState[];
};

export type ProductResponse = {
  message: string;
  data: ProductState;
};
