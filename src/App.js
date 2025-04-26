import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { data } from './data';
import { AboutBrand } from './AboutBrand';
import { Buttons } from './Buttons';
import { CartModal } from './CartModal';
import { Shop } from './Shop';
import { question } from './question';
import { AccordionItem } from './AccordionItem';
import { LoaderPage } from './LoaderPage';




function App() {

 const [selectedPhoto, setSelectedPhoto] = useState(null);
 const [filteredItems, setFilteredItems] = useState(data);
 const [cartCount, setCartCount] = useState(0);
 const [isCartOpen, setIsCartOpen] = useState(false);
 const [cartItems, setCartItems] = useState([]);
 const [stateLoader, setStateLoader]= useState(true);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 useEffect( ()=>{
  const timer =setTimeout( ()=>setStateLoader(false), 4000)
  return ()=>clearTimeout(timer)
 },[])

 useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setCartItems(storedCart);
}, []);

 const handleRemoveItem = (itemId) => {
  const updatedCart = cartItems.filter(item => item.id !== itemId);
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));  // Сохраняю обновленную корзину в localStorage
};


 const productsRef = useRef(null);
 const contactRef = useRef(null);

 const choosenClothes = (searchTerm) => {
 const NewList = data.filter(item => item.searchTearm.includes(searchTerm));
  setFilteredItems(NewList);
};

 const scrollToProducts = () => {
  productsRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToContact = () => {
  contactRef.current?.scrollIntoView();
};

 const handleButtonClick = (category) => {
  choosenClothes(category);
  scrollToProducts(); 
  setIsMenuOpen(false); 
};


const closeMenu = () => {
  setIsMenuOpen(false);
};




  return (
    <div>

     
    <div className='LoaderCenter'>
      {stateLoader && <LoaderPage/>}
    </div>

    <div className='nav'>
        <div className='logo'>
           <p className='titleLogo'>SCORPIO</p>
        </div>

        <div className='burger' onClick={() => setIsMenuOpen(true)}>
  <span className='burger-line'></span>
  <span className='burger-line'></span>
  <span className='burger-line'></span>
        </div>

        <div className='menu'>
       
            <button onClick={()=>handleButtonClick('clothing')}  className='btnNav'>CLOTHING</button>
            <button onClick={()=>handleButtonClick('shoes')} className='btnNav'>SHOES</button>
            <button onClick={()=>handleButtonClick('bag')} className='btnNav'>BAGS</button>
            <button onClick={()=>handleButtonClick('jewelry')} className='btnNav'>ACCESSORIES</button>
            <button onClick={scrollToContact} className='btnNav'>CONTACTS</button>
        </div>
        {isMenuOpen && (
  <div className='mobile-menu'>
 
     <button onClick={closeMenu} className="closeMenuBtn">
        ✕
      </button>
    
    <button onClick={() => { handleButtonClick('clothing'); setIsMenuOpen(false); }} className='btnNav'>CLOTHING</button>
    <button onClick={() => { handleButtonClick('shoes'); setIsMenuOpen(false); }} className='btnNav'>SHOES</button>
    <button onClick={() => { handleButtonClick('bag'); setIsMenuOpen(false); }} className='btnNav'>BAGS</button>
    <button onClick={() => { handleButtonClick('jewelry'); setIsMenuOpen(false); }} className='btnNav'>ACCESSORIES</button>
    <button onClick={() => { scrollToContact(); setIsMenuOpen(false); }} className='btnNav'>CONTACTS</button>

  </div>
)}
       
        <div className='cartIcon'>
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
            <img 
        onClick={() => setIsCartOpen(true)}
        width='22px' alt='icon' 
        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwLjUgN1Y0YTIuNSAyLjUgMCAwIDAtNSAwdjNtNy0yLjV2OWgtOXYtOXoiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='/>
        {isCartOpen &&  <CartModal cartItems={cartItems}
                                   handleRemoveItem={handleRemoveItem} 
                                   onClose={() => setIsCartOpen(false)} />
        }
        </div>
    </div>

     
    <div className='videoContainer'>
      <video muted autoPlay loop playsInline
             preload="auto"
             fetchpriority="high"
             width="100%" >
        <source src='https://res.cloudinary.com/dx8o0homn/video/upload/v1745700768/video_u8buxd.mp4' type='video/mp4'/>
      </video>
      <button className='btnLogo' onClick={scrollToProducts}>SHOP NOW</button>
      <h1>ELEGANCE &middot; IDENTITY &middot; SCORPIO</h1>
    </div>

      <AboutBrand/>

      <div  ref={productsRef}>
        <Buttons setSelectedPhoto={setSelectedPhoto}
               setFilteredItems={setFilteredItems}
               clothes={choosenClothes}/>      
      </div>


      <Shop filteredItems={filteredItems}
            setSelectedPhoto={setSelectedPhoto}
            selectedPhoto={selectedPhoto}
            Slider={Slider}
            setCartCount={setCartCount}
            setCartItems={setCartItems}
            cartCount={cartCount}
            />

  <div className="FAQ-par">
            <hr/>
            <p className="title">FREQUENTLY ASKED QUESTIONS</p>
            <div className="FAQ-container">
            <div className="FAQ">
          {question.map((item,index)=>
          
      
        <AccordionItem key={index}
                       title={item.title}
                       content={item.content}/>)}
                       
                       </div>
                       </div>
                     
        </div>

      {/* bottom */}
       <div className='bottom' ref={contactRef}>
        <div className='contacts'>
          <a href="https://www.instagram.com/klimentevainna" target="_blank" rel="noopener noreferrer">
       <img alt='icon-contact' className='icon-contact' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjIxLCAxMzQsIDIwKSIgZD0iTTE4LjQzNyAyMC45MzdINS41NjNhMi41IDIuNSAwIDAgMS0yLjUtMi41VjUuNTYzYTIuNSAyLjUgMCAwIDEgMi41LTIuNWgxMi44NzRhMi41IDIuNSAwIDAgMSAyLjUgMi41djEyLjg3NGEyLjUgMi41IDAgMCAxLTIuNSAyLjVNNS41NjMgNC4wNjNhMS41IDEuNSAwIDAgMC0xLjUgMS41djEyLjg3NGExLjUgMS41IDAgMCAwIDEuNSAxLjVoMTIuODc0YTEuNSAxLjUgMCAwIDAgMS41LTEuNVY1LjU2M2ExLjUgMS41IDAgMCAwLTEuNS0xLjVaIi8+PHBhdGggZmlsbD0icmdiKDIyMSwgMTM0LCAyMCkiIGQ9Ik0xMiAxNi41OTRBNC41OTUgNC41OTUgMCAxIDEgMTYuNiAxMmE0LjYgNC42IDAgMCAxLTQuNiA0LjU5NE0xMiA4LjRhMy41OTUgMy41OTUgMCAxIDAgMy42IDMuNkEzLjYgMy42IDAgMCAwIDEyIDguNCIvPjxjaXJjbGUgY3g9IjE3LjIiIGN5PSI2LjgzIiByPSIxLjA3NSIgZmlsbD0icmdiKDIyMSwgMTM0LCAyMCkiLz48L3N2Zz4=' width='30px'/>
       </a>

       <a href="tel:+905362737836" target="_blank" rel="noopener noreferrer">
       <img alt='icon-contact' className='icon-contact' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMjEsIDEzNCwgMjApIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOS41MDYgNy45NkExNi4wMyAxNi4wMyAwIDAgMSA3Ljk2IDE5LjUwNkM1LjgxOSAyMC4wNTEgNCAxOC4yMSA0IDE2di0xYzAtLjU1Mi40NDktLjk5NS45OTgtMS4wNWExMCAxMCAwIDAgMCAyLjY1Ni0uNjM5bDEuNTIgMS41MmExMi4wNSAxMi4wNSAwIDAgMCA1LjY1Ny01LjY1N2wtMS41Mi0xLjUyYTEwIDEwIDAgMCAwIC42NC0yLjY1NkMxNC4wMDUgNC40NDggMTQuNDQ4IDQgMTUgNGgxYzIuMjEgMCA0LjA1MSAxLjgxOSAzLjUwNiAzLjk2IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=' width='30px'/>
       </a>

       <a href="mailto:scorpio@email.com" target="_blank" rel="noopener noreferrer">
       <img alt='icon-contact' className='icon-contact' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSJyZ2IoMjIxLCAxMzQsIDIwKSIgZD0iTTMgNXYtLjVhLjUuNSAwIDAgMC0uNS41em0xOCAwaC41YS41LjUgMCAwIDAtLjUtLjV6TTMgNS41aDE4di0xSDN6TTIwLjUgNXYxMmgxVjV6TTE5IDE4LjVINXYxaDE0ek0zLjUgMTdWNWgtMXYxMnpNNSAxOC41QTEuNSAxLjUgMCAwIDEgMy41IDE3aC0xQTIuNSAyLjUgMCAwIDAgNSAxOS41ek0yMC41IDE3YTEuNSAxLjUgMCAwIDEtMS41IDEuNXYxYTIuNSAyLjUgMCAwIDAgMi41LTIuNXoiLz48cGF0aCBzdHJva2U9InJnYigyMjEsIDEzNCwgMjApIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0zIDVsOSA5bDktOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==' width='30px'/>
       </a>
       </div>
       <p className="bottom-par">Own your elegance.</p>
       <p className="bottom-par">Define your identity.</p>
       <p className="bottom-par">Be your Scorpio 🧡</p>
       </div>
  
    </div>
  );
}

export default App;
