import React from 'react'
import { useState } from 'react'

export const EmojiSearch = ({onSearch}) => {

    const [value, setValue] = useState("")

    const handleChange = (e) =>{
        setValue(e.target.value)
        onSearch(e)
    }


  return (
    <div>
        <input  onChange={handleChange} value={value} type="text" className='input__text'/>
    </div>
  )
}
