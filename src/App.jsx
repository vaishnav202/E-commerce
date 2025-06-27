import Header from "./components/header/HeaderComp"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/product/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Page/HomePage";
import SubcategoryPage from "./Page/SubcategoryPage";
import './App.css';



function App() {
  

  return (
    <div className="appWrapper">
    <Router>
      <Header/>
      <main>
        
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path='/subcategory/:subcategory' element={<SubcategoryPage/>} /> 

        </Routes>
      </main>
      <Footer/>

    </Router>
      
      
    </div>
  )
}

export default App


/*

*/