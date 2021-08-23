import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { lazy, Suspense } from 'react'
import {  BrowserRouter as Router , Redirect, Route, Switch, withRouter} from 'react-router-dom';
import '../index.css';
import SideBarC from '../scripts/reusable/SiderBarC';


const Alltags = lazy(()=> import('../scripts/pages/TagPages/Tags'));
const Materials = lazy(()=> import('../scripts/pages/Materialpages/Materials'));
const ProductsByColors = lazy(()=>import('../scripts/pages/ProductbyColors/ByColors'));

const theme = createMuiTheme({
  palette:{
    background:{
      default:'#F6F6F6',
    }
  },
 
});


const MainRoutes= withRouter(({location})=>{
    return (
          <ThemeProvider >
            <Router>
              <div className="sidebar">
                {   <SideBarC></SideBarC>
                }

                <Suspense fallback={<div>Loding.....</div>}>
                  <Switch>
                    <Route exact path="/alltags" component={Alltags}></Route>
                    <Route exact path="/allMaterials" component={Alltags}></Route>
                    <Route exact path="/cotton" component={Materials}></Route>
                    <Route exact path="/leather" component={Materials}></Route>
                    <Route exact path="/lycra" component={Materials}></Route>
                    <Route exact path="/plastic" component={Materials}></Route>
                    <Route exact path="/polyester" component={Materials}></Route>
                    <Route exact path="/allColors" component={Alltags}></Route>
                    <Route exact path="/black" component={ProductsByColors}></Route>
                    <Route exact path="/yellow" component={ProductsByColors}></Route>
                    <Route exact path="/red" component={ProductsByColors}></Route>
                    <Route exact path="/green" component={ProductsByColors}></Route>
                    <Route exact path="/blue" component={ProductsByColors}></Route>
                  </Switch>
                </Suspense>
              </div>
            </Router>
            </ThemeProvider>
        )
}) 

export default MainRoutes
