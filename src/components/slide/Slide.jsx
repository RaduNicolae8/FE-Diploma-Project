import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import {cards} from '../../data'

function Slide({children, slidesToShow, arrowsScroll} ) {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow = {slidesToShow} arrowsScroll={arrowsScroll} autoplay={true}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
