import Homepage from '../pages/Homepage/Homepage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductPage from '../pages/Productspage/ProductPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import SigninPage from '../pages/SigninPage/SigninPage'
    
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
    },

    {
        path: '/signup',
        page: SignupPage,
        isShowHeader: false
    },
    {
        path: '/signin',
        page: SigninPage,
        isShowHeader: false
    }
    

]
