import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

const GPTSearchPage = () => {
  return (
    <div className='min-h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg")] absolute bg-no-repeat bg-center bg-cover w-full top-0 -z-40 pt-32'>

        <GptSearchBar />
        <GptSuggestions />
    
    </div>

  )
}

export default GPTSearchPage