import './Shop.css';

export default function SizeSelector({ itemId, availableSizes, selectedSize, setSelectedSize }) {
    return (
      <div className="sizeContainer">
        {availableSizes.map((size) => (
          <button
            key={`${itemId}-${size}`}
            className={`btnSize ${selectedSize[itemId] === size ? 'selectedSize' : ''}`}
            onClick={() => {
              setSelectedSize((prev) => {
                if (prev[itemId] === size) {
                  const updated = { ...prev };
                  delete updated[itemId];
                  return updated;
                }
                return { ...prev, [itemId]: size };
              });
            }}
          >
            {size}
          </button>
        ))}
      </div>
    );
  }
  