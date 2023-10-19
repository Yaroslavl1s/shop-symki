import { BaseLayout } from './layouts/BaseLayout/BaseLayout'
import { Home } from './Components/Home/Home';
import { Contact } from './Components/Contact/Contact';
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
                path: '/contact',
                element: <Contact />,
            }
        ]
}
]