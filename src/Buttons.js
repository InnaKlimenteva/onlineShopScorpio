import { useState } from "react";
import { data } from "./data";

export function Buttons({ setFilteredItems, clothes}){

     const [activeBtn, setActiveBtn]=useState('')

    return(
        <div className="buttons">

              <button className={activeBtn === 'all' ? 'btnActive' : 'btn'} 
                      onClick={() => {
                      setFilteredItems(data);
                      setActiveBtn('all'); 
                      }}> SEE ALL
              </button>
            
              <button className={activeBtn==='dress' ? 'btnActive' : 'btn'}
                      onClick={()=>{
                      clothes('dress');
                      setActiveBtn('dress');      
                      }}>DRESS
              </button>

               <button className={activeBtn==='pants' ? 'btnActive' : 'btn'}
                       onClick={()=>{clothes('pants');
                       setActiveBtn('pants');               
                       }}>PANTS
                </button>

                <button className={activeBtn==='top' ? 'btnActive' : 'btn'}
                        onClick={()=>{clothes('top');
                         setActiveBtn('top');}}>TOP
                </button>

                <button className={activeBtn==='skirt' ? 'btnActive' : 'btn'}
                        onClick={()=>{clothes('skirt');
                        setActiveBtn('skirt');}}>SKIRT
                </button>

                <button className={activeBtn==='shorts' ? 'btnActive' : 'btn'}
                         onClick={()=>{clothes('shorts');
                         setActiveBtn('shorts');}}>SHORTS
                </button>

                <button className={activeBtn==='sweater' ? 'btnActive' : 'btn'}
                         onClick={()=>{clothes('sweater');
                         setActiveBtn('sweater');}}>SWEATER
                </button>

                <button className={activeBtn==='shoes' ? 'btnActive' : 'btn'}
                        onClick={()=>{clothes('shoes');
                        setActiveBtn('shoes');}}>SHOES
                </button>

                <button className={activeBtn==='bag' ? 'btnActive' : 'btn'}
                        onClick={()=>{clothes('bag');
                        setActiveBtn('bag');}}>BAG
                </button>

                <button className={activeBtn==='jewelry' ? 'btnActive' : 'btn'}
                        onClick={()=>{clothes('jewelry');
                        setActiveBtn('jewelry');}}>ACCESSORIES
                </button>
        </div>
    )
}