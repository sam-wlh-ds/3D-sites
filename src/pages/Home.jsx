import React, { useState, useEffect } from "react";
import logo from "../images/ai-platform.svg";

function Home() {
  const [opacity, setOpacity] = useState(0);
  const [inp, setInp] = useState(false);
  useEffect(() => {
    if (opacity < 100) {
      const timeoutId = setTimeout(() => setOpacity(opacity + 1), 50); 
      return () => clearTimeout(timeoutId); 
    }
  }, [opacity]);

  useEffect(()=>{
    const timeoutId = setTimeout(() => setInp(true), 4000); 
    return () => clearTimeout(timeoutId); 
  },[]);

  return (
    <>
      <div className="container align-middle logo">
        <button
          type="button"
          className="btn btn-black fs-4 text-white"
          style={{ opacity: opacity / 100 }}
        >
          <img className="svg-logo" src={logo} /> Brainz AI
        </button>
      </div>
      <div className="position-relative align-middle">
        <div className="container ani">
          <iframe
            className=""
            src="https://my.spline.design/nexbotrobotcharacterconcept-69f5221520d73ef0cb6f96373d123e20/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
          {inp && <div class="position-absolute top-50 start-50 translate-middle" style={{ opacity: opacity / 100 }}>
            <div class="card bg-dark rounded-pill">
              <div class="card-body">
                <p class="card-text input-group text-white">
                  <input className = "bg-secondary rounded-pill text-white text-center me-1"placeholder="Ask me anything!"></input>
                  <a href="#" className="btn btn-dark rounded-pill p-2">
                  &#x1F4A1;
                  </a>
                </p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default Home;
