import './Shop.css';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import ShopItemCard from './ShopItemCard';
import ImageGalleryModal from './ImageGalleryModal';

export function Shop({ filteredItems, Slider, setCartCount, setCartItems }) {
  const [selectedSize, setSelectedSize] = useState({});
  const [shakingId, setShakingId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    console.log('Loaded cart:', storedCart);
    setCartCount(storedCart.length);
  }, [setCartItems, setCartCount]);

  const handleAddToCart = (id) => {
    const foundItem = filteredItems.find((item) => item.id === id);
    if (!foundItem) return;

    const size = selectedSize[id];
    const requiresSize = foundItem.searchTearm.includes('clothing') || foundItem.searchTearm === 'shoes';

    if (requiresSize && !size) {
      Swal.fire({
        title: "Please, choose your size",
        text: "Your perfect fit is just a click away 🧡",
        confirmButtonColor: 'rgb(221, 134, 20)'
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Added to your cart",
      text: "Almost yours 🧡",
      confirmButtonColor: 'rgb(221, 134, 20)'
    });

    setShakingId(id);
    setTimeout(() => setShakingId(null), 300);

    const cartItem = {
      id,
      size,
      quantity: 1,
      price: foundItem.price,
      imagePreview: foundItem.imagePreview,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart];
    const existingIndex = updatedCart.findIndex((item) => item.id === cartItem.id && item.size === cartItem.size);

    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
  };

  const settings = selectedPhoto ? {
    dots: true,
    infinite: selectedPhoto.gallery.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: selectedPhoto.gallery.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  } : {};

  return (
    <div>
      <div className="App">
        {filteredItems.map((item) => (
          <ShopItemCard
            key={item.id}
            item={item}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            onAddToCart={handleAddToCart}
            shakingId={shakingId}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}
      </div>

      {selectedPhoto && (
        <ImageGalleryModal
          selectedPhoto={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          Slider={Slider}
          settings={settings}
        />
      )}
    </div>
  );
}