export interface Restaurant {
    id: string;
    restaurantName: string;
    shortDesc: string;
    currency: string;
    deliveryCost: number;
    rating: number;
    minOrder: number;
    deliveryTime: string;
    speciality?: string;
    imageUrl: string;
    isOpened?: boolean;
  }
  
  export type RestaurantStatus = "open" | "close";
  
  export type Cuisine = "chinese" | "indian" | "italian";
  
  export type Cuisines = Record<Cuisine, Record<RestaurantStatus, Restaurant[]>>;

  export interface CuisineCount {
    title: Cuisine; 
    count: number 
  }