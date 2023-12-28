import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/icons/arrow.svg'

const InfoBox =({text , link , btnText})=>(
<div className='info-box'>
  <p className='font-medium sm:text-xl text-center'>{text}</p>  
    <Link to={link} className='neo-brutalism-white neo-btn'>{btnText}
    <img src ={img} className='w-4 h-4 object-contain'/></Link>
</div>
);
const renderContent ={
1:(<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am  
<span className='front-semibold'> Chinthaka Lakshan</span>👋<br/>A Software Engineer from Srilanka</h1>),
2:(<InfoBox
text='Worked in many projects and picked up many skills along the way'
link='https://www.linkedin.com/in/chinthaka-lakshan-a4399821b/'
btnText="LinkedIn profile"

/>),


3:(<InfoBox
    text='Worked in many projects and picked up many skills along the way'
    link='/contact'
    btnText="Contact me"
    
    />),
4:(<InfoBox
    text='Worked in many projects and picked up many skills along the way'
    link='https://www.linkedin.com/in/chinthaka-lakshan-a4399821b/'
    btnText="bdgfg"
    
    />)
}

const HomeInfo = ({currentStage}) => {
  return  renderContent[currentStage]||null;
}

export default HomeInfo