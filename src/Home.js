import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      ></img>
      <div className="home__row">
        <Product
          id="112334"
          title="The lean startup: How Constant Innovation Creates Radically Successful Bussiness Paperback"
          price={11.85}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        ></Product>
        <Product
          id="112334"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape"
          price={109}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="112334"
          title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
          price={49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="112334"
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, "
          price={11.85}
          rating={4}
          image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="112334"
          title="The lean startup: How Constant Innovation Creates"
          price={11.85}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="112334"
          title="Dell 27 LED backlit LCD Monitor SE2719H IPS Full HD 1080p 1920 x 1080 at 60 Hz HDMI VGA,Black"
          price={11.85}
          rating={4}
          image="https://m.media-amazon.com/images/I/81nSaeP3AvL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
