import { forwardRef, useState, useRef, useEffect } from 'react'
import { data as emojiList} from '../Services/data'
import { EmojiButton } from './EmojiButton'
import { EmojiSearch } from './EmojiSearch'

export const EmojiPick = (props, inputRef) => {
    const [show, setShow] = useState(false)
    const [emojis, setEmojis] = useState(emojiList)

    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', e =>{
            if(!containerRef.current.contains(e.target)){
                setShow(false)
                setEmojis(emojiList)
            }
        })
    }, [])
    


    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        if(!!query){
            const search = emojiList.filter(emoji => {
                return emoji.name.toLowerCase().includes(query) || 
                emoji.keywords.toLowerCase().includes(query)
            })
            setEmojis(search)
        }else{
            setEmojis(emojiList)
        }
    }

    const handleOnClickEmoji = (emoji) => {
        const cursorPosition = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPosition);
        const next = text.slice(cursorPosition);

        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
        inputRef.current.focus();
    }



  return (
    <div ref={containerRef} className="button__container">
        <button onClick={() => setShow(!show)} className="emoji__button">😊</button>
        {show ? <div className='container'>
            <EmojiSearch onSearch={handleSearch}/>
            <div className='emojis__container'>
                {emojis.map(emoji => (
                    <EmojiButton key={emoji.id} emoji={emoji} onClick={handleOnClickEmoji}/>
                ))}
            </div>
        </div> : ""}
    </div>
  )
}

export default forwardRef(EmojiPick)
