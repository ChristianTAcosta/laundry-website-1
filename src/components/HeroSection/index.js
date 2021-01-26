import React from "react";
import {Link} from 'react-router-dom';
import {Button} from '../Button';
import "../HeroSection/HeroSection.css";

function HeroSection({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  sectionId
}) {
  return (
    <div id={sectionId} className="hero--section">
      {/*             <div className='row'>
                <div className='col'>
                    <div className='text-wrapper'>
                    <h1 className='section-header'>Laundry Service Delivered to your door</h1>
                    <p className='section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae suscipit nisi, sollicitudin viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='col'>
                    <img src='images/img1.jpg' className='section-img' alt='laundry'></img>
                </div>
            </div> */}

      <div className="container">
            <div className="row hero--section-row"
            style={{display:"flex", flexDirection:imgStart ==='start' ? 'row-reverse':'row'}}>

            <div className="col">
                <div className="hero-text-wrapper">
                    <h1 className="heading">{headLine}</h1>
                    <p className="description">{description}</p>
                    <Link to="/signup">
                        <Button >{buttonLabel}</Button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="hero-img-wrapper">
                    <img  src={img} alt={alt} className='hero-img'/>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default HeroSection;
