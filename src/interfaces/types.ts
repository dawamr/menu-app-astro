export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
}

export interface Topping {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  toppings: Topping[];
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}