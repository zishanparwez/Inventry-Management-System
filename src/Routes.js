import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Item from './components/Item';

export const routes = [
    {
        path: '/',
        component: <Home/>
    },
    {
        path: '/signup',
        component: <Signup/>
    },
    {
        path: '/login',
        component: <Login/>
    },
    {
        path: '/item/add',
        component: <Item/>
    },
    {
        path: '/item/edit',
        component: <Item/>
    }
]