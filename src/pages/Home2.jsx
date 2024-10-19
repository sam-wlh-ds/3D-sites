import React, { useState, useEffect } from "react";

function Home2() {
  return (
    <>
      <div className="position-relative">
        <div className="container" style={{width:"100%", height:"100vh"}}>
          <iframe
            src="https://my.spline.design/particlenebula-9346b386b16891a73e57999a61314b01/"
            frameborder="0"
            margin="0"
            width="100%"
            height="100%"
          ></iframe>
            <div class="position-absolute top-50 start-50 translate-middle d-inline-block">
                <p className="fs-1 text-white cssanimation fadeIn">JOIN THE <span className="rounded-5 p-2 font-effect-fire" style={{ fontFamily: "Sofia, sans-serif" }}>CRAZINESS</span></p>
                <button className="btn btn-success mx-10 center cssanimation blurIn"><span className="">Register</span></button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
