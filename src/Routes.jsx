import { BaseLayout } from './layouts/BaseLayout/BaseLayout'
import { Home } from './Components/Home/Home';
import { OurC } from './Components/OurC/OurC';
import { Contact } from './Components/Contact/Contact';
import { OurS } from './Components/OurS/OurS';
import { Shop } from './Components/Shop/Shop';

export const routes = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/shop all',
                element: <Shop />,
            },
            {
                path: '/our story',
                element: <OurS />
            },
            {
                path: '/our craft',
                element: <OurC/>
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            
        ]
}
]