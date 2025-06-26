import Header from "./components/header/HeaderComp"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import ProductDetail from "./components/product/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Page/HomePage";
import SubcategoryPage from "./Page/SubcategoryPage";




function App() {
  

  return (
    <>
    <Router>
      <Header/>
        
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path='/subcategory/:subcategory' element={<SubcategoryPage/>} /> 

        </Routes>
      
      <Footer/>

    </Router>
      
      
    </>
  )
}

export default App


/*

*/