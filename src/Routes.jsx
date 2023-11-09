import { BaseLayout } from './layouts/BaseLayout/BaseLayout'
import { Home } from './Components/Home/Home';
import { AboutUS } from './Components/AboutUS/AboutUS';
import { Contact } from './Components/Contact/Contact';
import { Shop } from './Components/Shop/Shop';
import { FAQ } from './Components/FAQ/FAQ';
import { S_R } from './Components/S_R/S_R';
import { StrPol } from './Components/StrPol/StrPol';

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
                path: '/shop-all',
                element: <Shop />,
            },
            {
                path: '/AboutUS',
                element: <AboutUS />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/FAQ',
                element: <FAQ />,
            },
            {
                path: '/S_R',
                element: <S_R />,
            },
            {
                path: '/StrPol',
                element: <StrPol />,
            },
        ]
}
]