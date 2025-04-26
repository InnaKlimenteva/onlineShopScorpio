import { useEffect, useState } from 'react';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import Swal from 'sweetalert2';


export function Shop({
  filteredItems,
  setSelectedPhoto,
  selectedPhoto,
  Slider,
  setCartCount,
  setCartItems
}) {
  const [selectedSize, setSelectedSize] = useState({});
 

   // Загружаю корзину из localStorage 
   useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
      setCartCount(storedCart.length); // Обновляю иконку корзины
  }, [setCartItems,  setCartCount]); // Зависимость от setCartCount

   const [shakingId, setShakingId] = useState(null);

   const handleAddToCart = (id) => {
     const foundItem = filteredItems.find((foundItem) => foundItem.id === id);
     Swal.fire({
      icon: "success",
      title:"Added to your cart",
      text: "Almost yours 🧡",
     confirmButtonColor: 'rgb(221, 134, 20)'
});

     if (!foundItem) return;
  
     const size = selectedSize[id];
  
    //если это не аксессуар и не сумка — нужен размер
     const requiresSize = foundItem.searchTearm.includes( 'clothing') || foundItem.searchTearm === 'shoes';
  
     if (requiresSize && !size) {
      Swal.fire({title:"Please, choose your size",
                 text: " Your perfect fit is just a click away 🧡",
                confirmButtonColor: 'rgb(221, 134, 20)'
     });
      return;
    }
  
  
    setShakingId(id);
    setTimeout(() => setShakingId(null), 300); 
  
  
    const item = filteredItems.find((item) => item.id === id);
    if (item) {
      const cartItem = {
        id,
        size,
        quantity: 1,
        price: item.price,
        imagePreview: item.imagePreview
      };
      
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = [...existingCart];
      const existingIndex = updatedCart.findIndex(
        (item) => item.id === cartItem.id && item.size === cartItem.size
      );
  
      if (existingIndex !== -1) {
        updatedCart[existingIndex].quantity += 1;
      } else {
        updatedCart.push(cartItem);
      }
  
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);  
      setCartCount(updatedCart.length); 
    }
  };
  
    // Настройки слайдера
    const settings = selectedPhoto
    ? {
        dots: true,
        infinite: selectedPhoto.gallery.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: selectedPhoto.gallery.length > 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      }
    : {};

  return (
    <div>
      <div className="App">
        {/* Сетка превьюшек */}
        {filteredItems.map((item) => {
          const { id, name, price, imagePreview } = item;
          return (
            <div className="theItem" key={id}>
              <img
                
                className='theItemImg'
                src={imagePreview}
                alt="clothes"
                width="400px"
                onClick={() => setSelectedPhoto(item)} // Открытие модалки с фото
              />
              <div className="cardDescriptionContainer">
                <div className='parMobile'>
                <p className="par">{name}</p>
                <p className="par">${price}</p>
                </div>
                
                <img
                  onClick={() => handleAddToCart(item.id)} // Кнопка добавления в корзину
                  className={shakingId === item.id ? 'scale' : ''}
                  width="22px"
                  alt="icon"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwLjUgN1Y0YTIuNSAyLjUgMCAwIDAtNSAwdjNtNy0yLjV2OWgtOXYtOXoiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=="
                />
              </div>

              {/* Кнопки по размерам */}
              {item.searchTearm.includes('clothing') && (
                <div className="sizeContainer">
                  {['XS', 'S', 'M', 'L'].map((size) => (
                    <button
                      key={`${id}-${size}`}
                      className={`btnSize ${selectedSize[id] === size ? 'selectedSize' : ''}`}
                      onClick={() => {
                        setSelectedSize((prev) => {
                          // Если размер уже выбран, убираем его, иначе выбираем новый
                          if (prev[id] === size) {
                            const updatedSizes = { ...prev };
                            delete updatedSizes[id]; // Удаляем выбранный размер
                            return updatedSizes;
                          } else {
                            return { ...prev, [id]: size }; // Выбираем новый размер
                          }
                        });
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}

              {item.searchTearm === 'shoes' && (
                <div className="sizeContainer">
                  {['37', '38', '39'].map((size) => (
                    <button
                      key={`${id}-${size}`}
                      className={`btnSize ${selectedSize[id] === size ? 'selectedSize' : ''}`}
                      onClick={() => {
                        setSelectedSize((prev) => {
                          // Если размер уже выбран, убираем его, иначе выбираем новый
                          if (prev[id] === size) {
                            const updatedSizes = { ...prev };
                            delete updatedSizes[id]; // Удаляем выбранный размер
                            return updatedSizes;
                          } else {
                            return { ...prev, [id]: size }; // Выбираем новый размер
                          }
                        });
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Модалка с каруселью */}
      {selectedPhoto && (
        <div
          className="galleryContainer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: '90%' }}>
            <button className="galleryClose" onClick={() => setSelectedPhoto(null)}>
              ✕
            </button>
            <Slider {...settings}>
              {selectedPhoto.gallery.map((src, index) => (
                <div key={index}>
                  <img  className="galleryImage" src={src} alt={`slide-${index}`} width='90%' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}
