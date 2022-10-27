import { createAction, props } from '@ngrx/store';
import { Product } from '@sharedModels';

export const getProducts = createAction(
    '[Products] Get all products'
);

export const storeProducts = createAction(
    '[Products] Store products',
    props<{ payload: Product[]; }>()
);

export const storeCreatedProduct = createAction(
    '[Products] Store created product',
    props<{ payload: Product; }>()
);

export const deleteProduct = createAction(
    '[Products] Delete a product',
    props<{ productId: string; }>()
);

export const createProduct = createAction(
    '[Products] Create a product',
    props<{ product: Product; }>()
);

