import {useState, useEffect} from 'react'
import { user } from '../data/user'
import { delay } from '../middleware/module'


import '../styles/headline.css'
import '../styles/structure.css'

export default function HeadLine() {
    const wordList = user.describeWords
    const [word, setWord] = useState<string>(wordList[0])
    const [mount, setMount] = useState<boolean>(true)

    // Component did mount ?
    useEffect(() => {
        if(mount) {
            changeWord(1)
            setMount(false)
        }
       
    }, [])
    
    const changeWord = async (index: number) => {
        await delay(2000)
        
        if(index >= wordList.length) index = 0

        // Clear current word
        let clearWord: string = word
        while(clearWord.length > 0) {
            await delay(200)
            setWord(prev => {
                const updateWord = prev.slice(0, -1)
                clearWord = updateWord

                return updateWord
            })
        }

        await delay(500)

        const currentWord: string = wordList[index]
        const letterList: Array<string> = currentWord.split('')
        for(const letter of letterList) {
            await delay(200);
            setWord(prev => {return (prev + letter)})
        }


        changeWord(++index)
    }

  return (
    <div className='head-line'>
        <div className="column main-column">
            <h2 className='into-text text-gradient'>
            Hello, I’m <br />
            Sachindu Kavishka <br/>
            I am a {word}
            </h2>
        </div>

        <div className="column">
            <img src="/images/glow.gif" alt="" className='image-burn'/>
        </div>
    </div>
  )
}
