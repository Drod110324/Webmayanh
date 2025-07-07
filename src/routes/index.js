import Homepage from '../pages/Homepage/Homepage.jsx'
import OrderPage from '../pages/OrderPage/OrderPage.jsx'
import ProductPage from '../pages/Productspage/ProductPage.jsx'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'
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
