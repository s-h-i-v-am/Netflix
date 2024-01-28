import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utilis/constants'

const GptSearchBar = () => {
  
  const language = useSelector(store => store.Language.langKey); 

  return (
    <div className='flex justify-center'>
        <form className='bg-black w-[50%] p-2 flex justify-between'>
            <input className='w-[75%] py-3 px-4 outline-none' type="text" placeholder={lang[language].placeholder}/>
            <button className='bg-red-700 w-[20%] rounded-lg text-white font-bold'>{lang[language].btntext}</button>
        </form>
    </div>
  )
}

export default GptSearchBar