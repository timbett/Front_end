import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import { Route, Routes } from "react-router-dom";

const routes = [{name: 'Home Page',  path: '/', component: HomePage}, {name: 'Not Found',  path: '/not-found', component: NotFound}]

export const MainRoute = () => {

    return(
        <Routes>
        {routes.map((route) => 
           <Route path={route.path}  element={<route.component/>}/>
        )}
      </Routes>
    )
    
}