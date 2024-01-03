import "./styles.css"
import {useEffect, useState} from "react";
export const Logo = ()=>{
    const [logoTitle, setTitle] = useState(false);
    const changeTitle = () => {
        if (window.scrollY >= 250) {
            setTitle(true)
        } else {
            setTitle(false)
        }
    }
    const scorllOnTop = ()=> {
        window.scroll(0,0)
    }
    useEffect(() => {
        changeTitle()
        window.addEventListener("scroll", changeTitle)
    })
    return(
        <div className='logo-wrapper' onClick={()=>scorllOnTop()}>
            <div className='logo-container'>
                <img src="/img/logo.png" alt=""/>
            </div>
            {logoTitle ? <div className='company-name'>
                <span>LOSANGELES</span>
                <span>MOUNTAINS</span>
            </div> : null}
        </div>
    )
}
