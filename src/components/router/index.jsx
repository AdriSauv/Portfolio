import Header from '../header';
import Home from '../../pages/home';
import Footer from '../footer';

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