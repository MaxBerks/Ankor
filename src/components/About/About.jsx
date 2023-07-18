import React from 'react'
import './About.scss'
import ankorLogo from '../../assets/icons/ankorLogoGrey.svg';
import photoRight from '../../assets/images/photoRight.jpg';
import photoLeft from '../../assets/images/photoLeft.jpg';
import TripInfo from '../TripInfo/TripInfo';

export default function About() {
  return (
    <div className='about'>
      <div className="about__container">
        <TripInfo />
        <div className="about__content">
          <img className="about__logo" src={ankorLogo} alt="#" />
          <div className="about__gallery">
            <h2 className="about__label about__label-left">анкор —<br/>простір</h2>
            <img src={photoRight} alt="#" className="about__img about__img-right" />
            <img src={photoLeft} alt="#" className="about__img about__img-left" />
            <h2 className="about__label about__label-right">вільної<br/>молоді</h2>
          </div>
          <h2 className="about__title">Про нас</h2>
          <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ipsum dolor sit amet consectetur. Aliquam id diam maecenas ultricies mi eget mauris. Lorem donec massa sapien faucibus et molestie ac feugiat. Augue ut lectus arcu bibendum at. Amet porttitor eget dolor morbi non arcu risus. 
          </p>
        </div>
      </div>
    </div>
  )
}
