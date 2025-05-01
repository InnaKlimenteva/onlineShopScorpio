import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { data } from './data';
import { AboutBrand } from './AboutBrand';
import { Buttons } from './Buttons';
import { CartModal } from './CartModal';
import { Shop } from './shop/Shop';
import { Accordion } from './Accordion';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { VideoContainer } from './VideoContainer';


function App() {

 
 const [filteredItems, setFilteredItems] = useState(data);
 const [cartCount, setCartCount] = useState(0);
 const [cartItems, setCartItems] = useState([]);
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isCartOpen, setIsCartOpen] = useState(false);


 useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setCartItems(storedCart);
}, []);

const handleRemoveItem = (itemId, itemSize) => {
  const updatedCart = cartItems.filter(
    item => !(item.id === itemId && item.size === itemSize) // Удаляем только тот товар, который соответствует id и size
  );
  
  // Обновляем состояние
  setCartItems(updatedCart);
  setCartCount(updatedCart.length);
  
  // Сохраняем обновленную корзину в localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};


  const choosenClothes = (searchTerm) => {
       const NewList = data.filter(item => item.searchTearm.includes(searchTerm));
       setFilteredItems(NewList);
    };

 //прокрутка к кнопкам
  const productsRef = useRef(null);

 //прокрутка к контактам
  const contactRef = useRef(null);


  return (
    <div>

    {/* HEADER */}
    <Nav
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      choosenClothes={choosenClothes}
      onContactClick={() => contactRef.current.scrollIntoView()}
      cartCount={cartCount}
      scrollToProducts = {() => {
   productsRef.current?.scrollIntoView({ behavior: 'smooth' });
 }}
      onCartClick={() => setIsCartOpen(true)} 
      />


      {/* CART */}
     {isCartOpen && (
         <CartModal
          cartItems={cartItems}
          handleRemoveItem={handleRemoveItem}
          onClose={() => setIsCartOpen(false)}/>
       )}
    
      <VideoContainer
         scrollToProducts = {() => {
           productsRef.current?.scrollIntoView({ behavior: 'smooth' });
           }}/>


     {/* ABOUT-BRAND */}
      <AboutBrand/>


      {/* Buttons */}
      <div  ref={productsRef} className='ButtonPanel'>
        <Buttons 
               setFilteredItems={setFilteredItems}
               choosenClothes={choosenClothes}/>
    

      </div>
      

       {/* SHOP */}
      <Shop filteredItems={filteredItems}
            Slider={Slider}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
            cartItems={cartItems}
            />


        {/* ВОПРОСЫ */}
       <Accordion/>


        {/* ФУТТЕР */}
        <div ref={contactRef}></div>
          <Footer/> 
        </div>

  );
}

export default App;
