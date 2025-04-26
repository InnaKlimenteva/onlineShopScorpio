import { useState } from "react"


export const AccordionItem =({title,content})=>{

const[isOpen,setIsOpen]=useState(false);

const handleIsOpen=()=>{
    setIsOpen(!isOpen)
}

    return(
        
        <div> 
          <div className={isOpen ? 'active' : 'default'}
               onClick={handleIsOpen}>
                <div className="FAQ-question">
              <img alt='icon-arrow' className={isOpen? 'arrow' : ''} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjIxLCAxMzQsIDIwKSIgZD0ibTguNTkgMTguMTZsNS42Ni01LjY2bC01LjY2LTUuNjZsLS43LjcxbDQuOTUgNC45NWwtNC45NSA0Ljk1eiIvPjwvc3ZnPg==" />
              <div className="FAQ-title">
              {title}
              </div>
              </div>
          </div>

          {isOpen && <div className="content">
                       {title === "Didn’t find your question?" ? (
                <p>
                No worries — we’re here for you. Reach out anytime at{" "}
                <a href="mailto:scorpio@email.com">scorpio@email.com</a> or DM us on{" "}
                <a href="https://www.instagram.com/klimentevainna" target="_blank" rel="noopener noreferrer">Instagram</a>.
                Your story matters — and we always reply.
              </p>) : (
                <p>{content}</p>
              )}
                       
                       </div>}
        </div>
        
    )

}