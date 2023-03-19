import React from 'react'

export const EmojiButton = ({emoji, onClick}) => {

    const handleClick = () =>{
        onClick(emoji)
    }
    
  return (
    <div className='emoji__search__container'>
        <button onClick={handleClick} className="emoji__search__button">{emoji.symbol}</button>
    </div>
  )
}
