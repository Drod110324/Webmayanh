import Homepage from '../pages/Homepage/Homepage.jsx'
import OrderPage from '../pages/OrderPage/OrderPage.jsx'
import ProductPage from '../pages/ProductsPage/ProductPage.jsx'

export const routes = [
    {
        path: '/',
        page: Homepage
    },
    {
        path: '/orders',
        page: OrderPage
    },
    {
        path: '/products',
        page: ProductPage
    },
]