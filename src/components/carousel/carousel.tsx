import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
type ImageSlide = {
    src: string,
    alt: string,
}
export const Carousel = ({
                      images,
                      showIndicators = true,
                  }: {
    images: ImageSlide[],
    showIndicators : boolean,
    effect: string,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = useCallback(() => {
        setActiveIndex((activeIndex) =>
            activeIndex === 0 ? images.length - 5 : activeIndex - 4
        );
    }, [images.length]);

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 4 ? 0 : activeIndex + 4
        );
    }, [images.length, activeIndex]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrev();
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
                handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [handleNext]);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [handleNext]);
    return (
        <div className='carousel-wrapper' onKeyDown={handleKeyDown}>
                <div className='carousel-items'>
                    <div className={`carousel-item`} >
                        <img className='carousel-img' src={images[activeIndex].src} alt={images[activeIndex].alt} />
                    </div>
                    <div className={`carousel-item`} >
                        <img className='carousel-img' src={images[activeIndex+1].src} alt={images[activeIndex+1].alt} />
                    </div>
                    <div className={`carousel-item`}>
                        <img className='carousel-img' src={images[activeIndex+2].src} alt={images[activeIndex+2].alt} />
                    </div>
                    <div className={`carousel-item`}>
                        <img className='carousel-img' src={images[activeIndex+3].src} alt={images[activeIndex+3].alt} />
                    </div>
                </div>
            {showIndicators && (<div className='carousel-pagination'>
                {images.map((_, index) => {
                        if(index%4===0){
                            return(
                                <button
                                    key={index}
                                    className={`pagination-indicator ${
                                        index === activeIndex ? 'active' : ''
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                    // aria-label={`Go to slide ${index + 1}`}
                                    // aria-selected={index === activeIndex}
                                ></button>
                            )
                        }
                        return null;
                    }
                )}
            </div>)}
        </div>
    );
};
