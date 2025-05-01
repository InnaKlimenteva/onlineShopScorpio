import SizeSelector from './SizeSelector';
import './Shop.css';

export default function ShopItemCard({ item, selectedSize, setSelectedSize, onAddToCart, shakingId, setSelectedPhoto }) {
  const { id, name, price, imagePreview, searchTearm } = item;

  const handleClick = () => {
    onAddToCart(id);
  };

  return (
    <div className="theItem" key={id}>
      <img
        className='theItemImg'
        src={imagePreview}
        alt="clothes"
        width="400px"
        onClick={() => {
          setSelectedPhoto(item); 
          console.log(item);
          setSelectedSize((prev) => ({ ...prev, selectedPhoto: item }));
        }}
      />

      <div className="cardDescriptionContainer">
        <div className='parMobile'>
          <p className="par">{name}</p>
          <p className="par">${price}</p>
        </div>

        <img
          onClick={handleClick}
          className={shakingId === id ? 'scale' : ''}
          width="22px"
          alt="icon"
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwLjUgN1Y0YTIuNSAyLjUgMCAwIDAtNSAwdjNtNy0yLjV2OWgtOXYtOXoiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='
        />
      </div>

      {(searchTearm.includes('clothing') || searchTearm === 'shoes') && (
        <SizeSelector
          itemId={id}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          availableSizes={searchTearm.includes('clothing') ? ['XS', 'S', 'M', 'L'] : ['37', '38', '39']}
        />
      )}
    </div>
  );
}