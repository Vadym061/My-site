import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/vadym-shtyra-52b629225/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/s_vadym1927/" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Vadym061" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial