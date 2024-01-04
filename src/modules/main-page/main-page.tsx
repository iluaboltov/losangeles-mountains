import React, { useEffect, useRef, useState } from 'react'

import { slides } from '../../contants/carouselSlides'
import { schedule } from '../../contants/mountainSchedule'
import { Logo } from '../../components/logo/logo'
import { Carousel } from '../../components/carousel/carousel'
import './styles.css'
import { MountainsSchedule } from '../../components/mountains-schedule/mountains-schedule'

export const MainPage: React.FC = () => {
  const [headerActive, setHeader] = useState(false)
  const historySectionRef = useRef<HTMLDivElement>(null)
  const teamSectionRef = useRef<HTMLDivElement>(null)
  const entrySectionRef = useRef<HTMLDivElement>(null)
  const updateHeader = (): void => {
    const entry = entrySectionRef.current
    if (entry != null) {
      const rect = entry.getBoundingClientRect()
      console.log(rect.top)
      if (rect.top <= -150) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    }
  }
  useEffect(() => {
    document.body.addEventListener('scroll', updateHeader)

    return () => { document.body.removeEventListener('scroll', updateHeader) }
  }, [])
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>): void => {
    if(sectionRef.current !== null){
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
      <div>
          <header className={headerActive ? 'active-background' : ''}>
              <Logo nameActive={headerActive}/>
              <nav>
                  <ol>
                         <li onClick={() => { scrollToSection(historySectionRef) }}>
                             HISTORY
                         </li>
                          <li onClick={() => { scrollToSection(teamSectionRef) }}>
                              TEAM
                          </li>
                  </ol>
              </nav>
          </header>
          <main>
              <section ref={entrySectionRef} className='logo-background' style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/mountains_logo.png")`, backgroundSize: 'cover', backgroundPositionX: '40%' }}>

              </section>
              <article ref={historySectionRef} className='history' style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/mountains_history.png")`, backgroundSize: 'cover', backgroundPositionX: 'center' }}>
                  <div className='history-container'>
                      <div className='history-title'>
                          <h2>History</h2>
                      </div>
                      <div className='history-article'>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                          </p>
                      </div>
                  </div>
                  <Carousel images={slides} effect='slide' showIndicators={true}/>
              </article>
              <article ref={teamSectionRef} id='team'>
                  <div className='climb-container'>
                      <div className='climb-title'>
                          <h2>CLIMB</h2>
                      </div>
                      <div className='climb-article'>
                          <p>
                              Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                          </p>
                      </div>
                  </div>
                  <MountainsSchedule mountainsList={schedule}/>
              </article>
          </main>
          <footer>
                <div className='footer-content'>
                    <Logo/>
                    <div className='footer-text'>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
                </div>
          </footer>
      </div>
  )
}
