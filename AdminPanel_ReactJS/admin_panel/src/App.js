import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";



function App() {
  return (
    <Router>
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
            <Route exact path="/">
              <Home/>

            </Route>

            <Route path="/users">
              <UserList/>

            </Route>


            <Route path="/user/:userId">
              <User/>

            </Route>


            <Route path="/newUser">
              <NewUser/>

            </Route>



            <Route path="/products">
              <ProductList/>

            </Route>


            <Route path="/product/:productsId">
              <Product/>

            </Route>


            <Route path="/newproducts">
              <NewUser/>

            </Route>
        </Switch>
        
      </div>

   
     

    </div>
    </Router>
  );
}

export default App;
