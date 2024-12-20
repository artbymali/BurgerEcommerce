import React, { useState, useEffect } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useBasket } from '../../CartContext';


function Carousel() {

  const {addItem} = useBasket() 


  const slides = [
    {
      SliderSrc: '/BugBgOne.jpg',
      SliderHeading: 'World Famous Burger',
      SliderPrice: 6.0,
      product: {
        id: 1,
        name: 'Classic Cheezy Burger',
        price: 12.00,
        description: '100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun',
        weight: '220gr',
        calories: '600cal',
        imgUrl: '/BugOne.png'
      }
    },
    {
      SliderSrc: '/BugBgTwo.jpg',
      SliderHeading: 'Popular ShrommBacon',
      SliderPrice: 10.0,
      product: {
        id: 7,
        name: 'ShroomBacon Burger',
        price: 10.00,
        description: 'Mushroom bacon, Swiss cheese, lettuce, tomato, special sauce',
        weight: '240gr',
        calories: '700cal',
        imgUrl: '/BugSeven.png'
      }
    },
    {
      SliderSrc: '/BugBgThree.jpg',
      SliderHeading: 'Best Local TunaBurger',
      SliderPrice: 13.0,
      product: {
        id: 6,
        name: 'CrazyBeefTuna Burger',
        price: 13.00,
        description: 'Tuna steak patty, avocado, special sauce, lettuce, sesame seed bun',
        weight: '200gr',
        calories: '500cal',
        imgUrl: '/BugSix.png'
      }
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (direction) => {
    const newIndex = (activeIndex + direction + slides.length) % slides.length;
    setActiveIndex(newIndex);
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlide = slides[activeIndex];
  const product = currentSlide.product;

  const handleAddItem = () => {
    addItem(product);  
  }


  return (
    <>
      <section aria-label='Newest Photos'>
        <div className="Carousel" data-carousel>

          <div className="cutter-top">
            <img src="/asset 14.png" alt="" />
          </div>

          <div className="cutter-bottom">
            <img src="/asset 15.png" alt="" />
          </div>

          <button className='carousel-button prev' onClick={() => handleSlideChange(-1)}>
            <FaChevronLeft />
          </button>

          <ul className='slides'>
            {slides.map((slide, index) => (
                <li key={index} className={`slide ${index === activeIndex ? 'active' : ''}`} data-active={index === activeIndex} style={{backgroundImage: `url(${slide.SliderSrc})`}}>
                    <div className={`slide-text ${index === activeIndex ? "show" : ""}`}>
                        <h2>{slide.SliderHeading}</h2>
                        <div className="food-detals">
                                <img src="/CowLogo.png" alt="" />
                                <p>100% Grass-fed beef patty, cheddar cheese, special sauce, tomato, pickles, lettuce, sesame seed bun</p>
                        </div>
                        <div className="food-button">
                                <div className="button-price">
                                    <h3>${slide.SliderPrice.toFixed(2)}</h3>
                                    <p>220gr / 600cal</p>
                                </div>
                                <div className="Addbutton">
                                    <i onClick={handleAddItem}><MdAdd /></i>
                                </div>
                        </div>
                    </div>
                </li>
            ))}
          </ul>

          <button className='carousel-button next' onClick={() => handleSlideChange(1)}>
            <FaChevronRight />
          </button>

          <div className="dots-container">
            {slides.map((_, index) => (
            <span key={index} className={`dot ${index === activeIndex ? "active" : "" }`} onClick={() => handleDotClick(index)}></span>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Carousel