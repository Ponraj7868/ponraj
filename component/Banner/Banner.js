import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.scss"
export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div> <Slider {...settings}>
        <section id="banner1">
        <div class="container">
            <div class="row">
                      
            <div class="banner-col">
                <h1>Welcome to Company</h1>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div class="d-banner">
                    <a href="google.com">Read More</a>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section id="banner2">
        <div class="container">
            <div class="row">
                      
            <div class="banner-col">
                <h1>Welcome to Company</h1>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div class="d-banner">
                    <a href="google.com">Read More</a>
                </div>
                </div>
            </div>
        </div>
    </section>
    <section id="banner3">
        <div class="container">
            <div class="row">
                      
            <div class="banner-col">
                <h1>Welcome to Company</h1>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div class="d-banner">
                    <a href="google.com">Read More</a>
                </div>
                </div>
            </div>
        </div>
    </section>
    </Slider>  
      </div>
    );
  }
}


