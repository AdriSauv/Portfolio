import Header from '../header';
import Home from '../../pages/home';
import Footer from '../footer';
import { Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <div className='page'>
            <Header />
            <Home />
            <Footer />
        </div>
    );
};
  
export default Router
