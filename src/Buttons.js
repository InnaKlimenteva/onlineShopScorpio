import './Buttons.css';

import { useState } from "react";
import { data } from "./data";

export function Buttons({ setFilteredItems, choosenClothes }) {
  const [activeBtn, setActiveBtn] = useState('');

  const categories = [
    { label: 'SEE ALL', value: 'all' },
    { label: 'DRESS', value: 'dress' },
    { label: 'PANTS', value: 'pants' },
    { label: 'TOP', value: 'top' },
    { label: 'SKIRT', value: 'skirt' },
    { label: 'SHORTS', value: 'shorts' },
    { label: 'SWEATER', value: 'sweater' },
    { label: 'SHOES', value: 'shoes' },
    { label: 'BAG', value: 'bag' },
    { label: 'ACCESSORIES', value: 'jewelry' },
  ];

  const handleClick = (category) => {
    if (category === 'all') {
      setFilteredItems(data);
    }
    else {
      choosenClothes(category);
    }
    setActiveBtn(category);
  };

  return (
    <div>
    <div className="buttons">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          className={activeBtn === value ? 'btnActive' : 'btn'}
          onClick={() => handleClick(value)}
        >
          {label}
        </button>
        
      ))}
    </div>
    <div>
    <button
  className="scrollTopBtn"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img alt='up' className='arrowUp' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBmaWxsPSJyZ2IoMjIxLCAxMzQsIDIwKSIgZD0iTTI1IDQyYy05LjQgMC0xNy03LjYtMTctMTdTMTUuNiA4IDI1IDhzMTcgNy42IDE3IDE3cy03LjYgMTctMTcgMTdtMC0zMmMtOC4zIDAtMTUgNi43LTE1IDE1czYuNyAxNSAxNSAxNXMxNS02LjcgMTUtMTVzLTYuNy0xNS0xNS0xNSIvPjxwYXRoIGZpbGw9InJnYigyMjEsIDEzNCwgMjApIiBkPSJNMzMuMyAyNi43TDI1IDE4LjRsLTguMyA4LjNsLTEuNC0xLjRsOS43LTkuN2w5LjcgOS43eiIvPjxwYXRoIGZpbGw9InJnYigyMjEsIDEzNCwgMjApIiBkPSJNMjQgMTdoMnYxN2gtMnoiLz48L3N2Zz4='/>
</button>
    </div>
    </div>
  );
}
