import React from 'react'
import {useRef} from 'react'
import EmojiPick from './EmojiPick'

export const EmojiPickInput = () => {
    const refInput = useRef(null)




  return (
    <div className='all__container'>
        <div className='main__container'>
          <input type="text" ref={refInput} className="input__text"/>
          <EmojiPick ref={refInput}/>
        </div>
    </div>
  )
}
