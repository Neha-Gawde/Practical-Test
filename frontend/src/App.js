import logo from './logo.svg';
import './App.css';
import Header from './scripts/reusable/Header';
import SideMenu from './scripts/reusable/SideMenu';
import { BrowserRouter, Switch } from 'react-router-dom';
import Sidebar from './scripts/reusable/SiderBar';
import { Provider } from 'react-redux';
import store  from './store'
import Routes from './routes/Routes';
import MainRoutes from './routes/MainRoutes';
import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
        
        <BrowserRouter>
        <Suspense fallback={<div>Loding.....</div>}>
          <Switch>
            {/* <Header  name="mycoolshop.com"/> */}
            <MainRoutes></MainRoutes>
          </Switch>
        </Suspense>
          
        </BrowserRouter>
   
    </Provider>
    </div>
  );
}

export default App;
