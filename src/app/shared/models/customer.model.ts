import { Product } from '@sharedModels';

export interface Customer {
    id: string;
    name: string;
    email?: string;
    phoneNumber?: string
    purchasedProducts: Product[];
}