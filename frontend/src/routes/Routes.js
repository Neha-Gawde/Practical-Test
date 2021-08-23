import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import SideBar from "../scripts/reusable/SiderBar";
import '../index.css'
const AllTags = lazy(()=> import('../scripts/pages/TagPages/Tags'))

const Routes = withRouter(({location})=>{
    return(
        <Router>
        <div className="sidebar">
            {<SideBar />}
            <Suspense fallback={<div>Loading ....</div>}>
                <Switch>
                    <Route exact path="/alltags" component={AllTags} />
                    <Route exact path="/cotton"  />
                </Switch>
            </Suspense>
        </div>
        </Router>
    )
})

export default Routes