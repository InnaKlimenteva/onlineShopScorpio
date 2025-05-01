import './Accordion.css';

import { useState } from "react";
import { question } from "./question";

export const Accordion = () => {

  const [openIndex, setOpenIndex] = useState(null); //состояние/индекс открытого вопроса

  const handleIsOpen = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div>
      <div className="FAQ-par">
        <hr />
        <p className="title">FREQUENTLY ASKED QUESTIONS</p>
        <div className="FAQ-container">
          <div className="FAQ">
            {question.map((item, index) => (
              <div
                key={index}
                className={openIndex === index ? 'active' : 'default'}
                onClick={() => handleIsOpen(index)}
              >
                <div className="FAQ-question">
                <img alt='icon-arrow' 
                     className={openIndex ===index? 'arrow' : ''} 
                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJyZ2IoMjIxLCAxMzQsIDIwKSIgZD0ibTguNTkgMTguMTZsNS42Ni01LjY2bC01LjY2LTUuNjZsLS43LjcxbDQuOTUgNC45NWwtNC45NSA0Ljk1eiIvPjwvc3ZnPg==" /> 
                  <div className="FAQ-title">
                    {item.title}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="content">
                    {item.title === "Didn’t find your question?" ? (
                      <p>
                        No worries — we’re here for you. Reach out anytime at{" "}
                        <a href="mailto:scorpio@email.com">scorpio@email.com</a> 
                        or DM us on{" "}
                        <a 
                          href="https://www.instagram.com/klimentevainna" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>.
                        Your story matters — and we always reply.
                      </p>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};




   