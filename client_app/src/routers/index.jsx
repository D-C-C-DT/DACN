
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import HomePage from '../pages/HomePage/HomePage';
import Error404 from '../pages/NotFoundPage/Error404';
import NotFoundPage from '../pages/NotFoundPage/Error404';
import Order from '../pages/OrderPage/OrderPage';
import ProductsPage from '../pages/ProductPages/ProductsPage';


export const routers = [{
    path: '/',
    element: <HeaderComponent />,
    children: [
        {
            path: "",
            element: <HomePage />,
        },
        {
            path: "/order",
            element: <Order />,
        },
        {
            path: '/products',
            element: <ProductsPage />,
        },
        {
            path: '*',
            element: <Error404 />,
        }]

},]