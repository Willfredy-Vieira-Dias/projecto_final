import React from 'react'
import "./Banner.css"
import LogotipoNike from "../img/nike-logo-white.png"
import { useState } from 'react'
import ProdutoBanner from "../img/banner-product.png"
import ProdutoImg1 from "../img/product-img1.jpg"
import ProdutoImg2 from "../img/product-img2.jpg"
import ProdutoImg3 from "../img/product-img3.jpg"
import ProdutoImg4 from "../img/product-img4.jpg"
import ProdutoImg5 from "../img/product-img5.jpg"
import ProdutoImg6 from "../img/product-img6.jpg"
import ImagemPic1 from "../img/pic-1.png"
import ImagemPic2 from "../img/pic-2.png"
import ImagemPic3 from "../img/pic-3.png"
import ImagemPic4 from "../img/pic-4.png"
import ImagemPic5 from "../img/pic-5.png"
import ImagemPic6 from "../img/pic-6.png"

const Airnike = require('../img/jordan-shoe.png');
const Airjordan = require('../img/Air-jordan-4-black.png');
const NikeBasket = require('../img/nike-basket.png');
const tenis = {Airnike, Airjordan, NikeBasket}

const Banner = () => {

  const [JordanShoes, setImage] = useState(tenis.Airnike);

  return (
    <>
    <section className='apresentacao'>
    <header>
    <div className="container">
      <div className="logo">
        <a href="#"><img src={LogotipoNike} alt="" /></a>
      </div>

      <nav className="slide">
        <a href="#">Home</a>
        <a href="#">Novos lançamentos</a>
        <a href="#">Loja</a>
        <a href="#">Contactos</a>
      </nav>

      {/*action*/}
      <div className="accao">

      {/*search*/}
        <button className="pesquisa"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </header>
  
  <section className="publicidade">
    <div className="container">
      <div className="meio">
        <h2>jor<br/>dan</h2>
        <img src={JordanShoes} alt="" />
      </div>

    </div>

    <div className="lado-esquerdo">
    <a href="#" className="activo">Principal</a>
      <a href="#">Homens</a>
      <a href="#">Mulheres</a>
      <a href="#">Crianças</a>
    </div>

    <div className="lado-direito">
      <a href="#" onClick={() => setImage(tenis.Airnike)}>01</a>
      <a href="#" onClick={() => setImage(tenis.Airjordan)}>02</a>
      <a href="#" onClick={() => setImage(tenis.NikeBasket)}>03</a>
    </div>
  </section>
    </section>
    </>
  )
}

export default Banner