import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShoeDetails from "../Pages/ShoeDetails";
import NotFound from "../Pages/NotFound";
import Products from "../Pages/Products";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={ShoeDetails} />
      <Route component={NotFound} />
    </Switch>
  );
};
