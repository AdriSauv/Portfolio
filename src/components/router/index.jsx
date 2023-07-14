import Header from '../header';
import Home from '../../pages/home';
import Footer from '../footer';
import { Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <div className='page'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};
  
export default Router