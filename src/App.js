import './App.css';
import './index.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import ProductData from './ProductDetails/ProductsData';
import Footer from './Components/Footer';
import ProductItemDetails from './Components/ProductItemDetails';
import Checkout from './Components/Checkout';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipping, setShipping] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
        <Header />
        <Routes> 
          <Route exact path='/' element={<ProductList ProductData = {ProductData}/>} /> 
          <Route path='/productCard/:id' element={<ProductItemDetails />} />
          <Route path='/checkout' element={<Checkout name={name}
            setName = {setName}
            email = {email}
            setEmail = {setEmail}
            shipping = {shipping}
            setShipping = {setShipping}
            phone = {phone}
            setPhone = {setPhone} />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
