import './styles.css'
export const Logo = ({nameActive = true}: {nameActive?: boolean})=>{
    const scorllOnTop = ()=> {
        window.scroll(0,0)
    }
    return(
        <div className='logo-wrapper' onClick={()=>{ scorllOnTop(); }}>
            <div className='logo-container'>
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt=""/>
            </div>
            {nameActive ? <div className='company-name'>
                <span>LOSANGELES</span>
                <span>MOUNTAINS</span>
            </div> : null}
        </div>
    )
}
