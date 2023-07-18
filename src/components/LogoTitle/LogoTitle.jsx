import React from 'react'
import './LogoTitle.scss'
import ankorLogo from '../../assets/icons/ankorLogoGrey.svg';

export default function LogoTitle({ title, subtitle }) {
  return (
    <div className='logoTitle'>
      <img src={ankorLogo} alt="#" className="logoTitle__logo" />
      <h2 className="logoTitle__title">{title}</h2>
      <h3 className="logoTitle__subtitle">{subtitle}</h3>
    </div>
  )
}
