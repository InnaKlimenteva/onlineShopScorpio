import './Nav.css';

export const Nav = ({isMenuOpen, setIsMenuOpen, choosenClothes, onContactClick, scrollToProducts, cartCount, onCartClick
  }) => {
    const handleButtonClick = (category) => {
      choosenClothes(category);
      scrollToProducts();
      setIsMenuOpen(false);
    };
  
    const menuItems = [
      { label: 'CLOTHING', value: 'clothing' },
      { label: 'SHOES', value: 'shoes' },
      { label: 'BAGS', value: 'bag' },
      { label: 'ACCESSORIES', value: 'jewelry' },
      { label: 'CONTACTS', action: onContactClick },
    ];
  
    const renderMenuButtons = (isMobile = false) =>
      menuItems.map(({ label, value, action }) => (
        <button
          key={label}
          className='btnNav'
          onClick={() => {
            action ? action() : handleButtonClick(value);
            if (isMobile) setIsMenuOpen(false);
          }}
        >
          {label}
        </button>
      ));
  
    return (
      <div>
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
            {renderMenuButtons()}
          </div>
  
          <div className='cartIcon'>
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
            <img
              onClick={onCartClick}
              width='22px'
              alt='cart icon'
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwLjUgN1Y0YTIuNSAyLjUgMCAwIDAtNSAwdjNtNy0yLjV2OWgtOXYtOXoiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='
            />
          </div>
        </div>
  
        {isMenuOpen && (
          <div className='mobile-menu'>
            <button onClick={() => setIsMenuOpen(false)} className="closeMenuBtn">✕</button>
            {renderMenuButtons(true)}
          </div>
        )}
      </div>
    );
  };
  
  
  
  