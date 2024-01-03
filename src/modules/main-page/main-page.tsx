import React, {useEffect, useRef, useState} from "react";

import {Logo} from "../../components/logo/logo";
import {Carousel} from "../../components/carousel/carousel";
import "./styles.css"
import {MountainsSchedule} from "../../components/mountains-schedule/mountains-schedule";

export const MainPage = () =>{
    const slides = [
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 1"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 2"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 3"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 4"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 1"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 2"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 3"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 4"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 1"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_1.png`, alt: "Slide 2"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 3"},
        {src: `${process.env.PUBLIC_URL}/img/carousel_example_2.png`, alt: "Slide 4"},
    ];
    const mountainsSchedule = [
        {
            title: "Mountain 1",
            schedule: [
                {
                    day: 25,
                    month: "Nov",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 28,
                    month: "Nov",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 18,
                    month: "Dec",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 7,
                    month: "Jan",
                    year: 2017,
                    title: "Vestibulum viverra"
                },
            ],
            backgroundImg: `${process.env.PUBLIC_URL}/img/mountain_1.png`
        },
        {
            title: "Mountain 2",
            backgroundImg: `${process.env.PUBLIC_URL}/img/mountain_2.png`,
            schedule: [
                {
                    day: 17,
                    month: "Nov",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 13,
                    month: "Dec",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 28,
                    month: "Dec",
                    year: 2016,
                    title: "Vestibulum viverra"
                },
                {
                    day: 9,
                    month: "Jan",
                    year: 2017,
                    title: "Vestibulum viverra"
                },
            ]
        }
    ]
    const [headerBackground, setHeader] = useState(false);
    const historySectionRef = useRef(null)
    const teamSectionRef = useRef(null)
    const changeHeader = () => {
        if (window.scrollY >= 250) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    useEffect(() => {
        changeHeader()
        window.addEventListener("scroll", changeHeader)
    })
    const scrollToSection = (sectionRef: React.MutableRefObject<any>) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return(
      <div>
          <header className={headerBackground ? 'active-background': ''}>
              <Logo/>
              <nav>
                  <ol>
                         <li onClick={()=>scrollToSection(historySectionRef)}>
                             HISTORY
                         </li>
                          <li onClick={()=>scrollToSection(teamSectionRef)}>
                              TEAM
                          </li>
                  </ol>
              </nav>
          </header>
          <main>
              <section className='logo-background' style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/mountains_logo.png")`, backgroundSize: "cover"}}>

              </section>
              <article ref={historySectionRef} className='history' style={{backgroundImage: `url("${process.env.PUBLIC_URL}/img/mountains_history.png")`, backgroundSize: "cover"}}>
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
                  <MountainsSchedule mountainsList={mountainsSchedule}/>
              </article>
          </main>
          <footer>
                <div className='footer-content'>
                    <Logo/>
                    <div className='footer-text'>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
                </div>
          </footer>
      </div>
    );
}