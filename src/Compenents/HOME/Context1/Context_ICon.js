import React, { useContext } from 'react'
import { LangC } from './LangContext'
import FR_lang from  "./Imgs_lang/france.svg"
import EN_Lang from "./Imgs_lang/United_Kingdom.svg"
import RS_lang from "./Imgs_lang/Russia2.svg"
import AL_lang from "./Imgs_lang/albania.svg"
import ES_lang from "./Imgs_lang/Spain.svg"
import AR_lang from "./Imgs_lang/morocco.svg"
import "./style_Incon.css"
export default function CompImg() {
    const {Lang,setLang}=useContext(LangC);
  return (
    <div className='Lang_div' >
      <img src={FR_lang} class="rounded" className='Lang_icon'  onClick={()=>{setLang('FR')}} alt="" />
      <img src={EN_Lang} className='Lang_icon'  onClick={()=>{setLang('EN')}} alt="" />
      <img src={RS_lang} className='Lang_icon'  onClick={()=>{setLang('RS')}} alt="" />
      <img src={AL_lang} className='Lang_icon'  onClick={()=>{setLang('AL')}} alt="" />
      <img src={ES_lang} className='Lang_icon'   onClick={()=>{setLang('ES')}} alt="" />
      <img src={AR_lang} className='Lang_icon'   onClick={()=>{setLang('AR')}} alt="" />

    </div>
  )
}
