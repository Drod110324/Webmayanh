import Homepage from '../pages/Homepage/Homepage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductPage from '../pages/Productspage/ProductPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { Fragment } from 'react'

export const routes = [
    {
        path: '/',
        page: Homepage,
        isShowHeader: true
    },
    {
        path: '/orders',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false
    }
]
