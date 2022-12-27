import {configureStore} from '@reduxjs/toolkit';
import {getDefaultNormalizer} from '@testing-library/react';
import {goodsApi} from './goodsApi';

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});
