import Swal from "sweetalert2";
import './CartModal.css';


export function CartModal({ cartItems, onClose, handleRemoveItem }) {
   const toBuy=()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: "Our payment system is still getting dressed.<br/> Thank you for your patience 🧡",
      confirmButtonColor: 'rgb(221, 134, 20)'
    });
   }  

    return (
      <div className="cartModalOverlay" onClick={onClose}>
         <div className="cartModal" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={onClose}>✕</button>
           
            <h2>Items in your cart</h2>
            {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                        <img src={item.imagePreview} alt={`Товар ${item.id}`} width='50px'/>
                        <p>Size: {item.size}</p>
                        <p>Price: ${item.price} </p>
                        <p>Quantity: {item.quantity}</p>
                        <button className="btnModalDel" onClick={() => handleRemoveItem(item.id, item.size)}>Remove</button>
                        <button className="btnModalBuy" onClick={toBuy}>Buy</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  