import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ViewPage from './pages/VeiwPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <>
     <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/products" component={ProductPage} />
      <Route exact path="/products/:catId" component={ProductPage} />
      <Route exact path="/view-product" component={ViewPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route component={ErrorPage} />
      </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
