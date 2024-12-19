import React from 'react'
// icons 
import { FaFileAlt, FaInstagram } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdMovie } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { FaBasketballBall } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
// icons 

// img 
import footerLogo from '../../assets/footer.svg'
import google from '../../assets/googlePlay.svg'
import io from '../../assets/Appstore.svg'
// img 

const Footer = () => {
  return (
    <>
        <footer className='mb-10  z-10'>
        <div className='container xl  '>
            <div className='grid grid-cols-4 gap-5 max-[949px]:grid-cols-3 max-[880px]:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:text-center'>
                <div className='flex flex-col gap-10 max-[450px]:items-center'>
                    <a href="#"><img src={footerLogo} alt="" /></a>
                    <div className='flex flex-col gap-3'>
                        <a href="#"><img src={google} alt="" /></a>
                        <a href="#"><img src={io} alt="" /></a>
                    </div>
                </div>
                <div className='flex flex-col gap-5 max-[450px]:items-center'>
                    <p className='text-2xl text-mainColor'>О нас</p>
                    <p className='flex items-center gap-2 text-xl text-mutedColor hover:text-mainColor cursor-pointer'><FaFileAlt/> Публичная оферта </p>
                    <p className='flex items-center gap-2 text-xl text-mutedColor hover:text-mainColor cursor-pointer'><MdOutlineStarBorder/> Публичная оферта </p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><FaRegQuestionCircle/> F.A.Q </p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><AiOutlinePhone/>Контакты</p>
                </div>
                <div className='flex flex-col gap-5 max-[450px]:items-center'>
                    <p className='text-2xl text-mainColor'>Категории</p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><AiOutlinePlayCircle/>Кино</p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><MdMovie/>Театр</p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><RiMovie2Line/>Консерт</p>
                    <p className='flex items-center gap-2 text-xl  text-mutedColor hover:text-mainColor cursor-pointer'><FaBasketballBall/>Спорт</p>
                </div>
                <div className='flex flex-col gap-8 max-[450px]:items-center'> 
                   <div className='flex flex-col gap-5'>
                        <p className='text-2xl text-mainColor'>Связаться с нами</p>
                        <a href="#" className='text-xl  text-mutedColor hover:text-mainColor cursor-pointer'>+998 (95) 123 45 67</a>
                   </div>
                   <div className='flex flex-col gap-3 max-[450px]:items-center'>
                        <p className='text-2xl  text-mutedColor cursor-pointer'>Социальные сети</p>
                        <div className='flex gap-5 items-center '>
                        <a href="#">
                            <IoLogoInstagram className='text-2xl  text-mutedColor hover:text-mainColor cursor-pointer'/>
                        </a>
                        <a href="#">
                            <IoLogoFacebook className='text-2xl  text-mutedColor hover:text-mainColor cursor-pointer'/>
                        </a>
                        <a href="#">
                            <IoLogoYoutube className='text-2xl  text-mutedColor hover:text-mainColor cursor-pointer'/>
                        </a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer