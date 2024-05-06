"use client";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../Button/EmblaCarouselDotButton';
import { NextButton, PrevButton, usPrevNextButtons } from '../Button/EmblaCarouselArrowButtons';

type PropType = {
    slides: number[],
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {slides, options} = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)
    const {prevButtonDisabled, nextButtonDisabled, onPrevButtonClick, onNextButtonClick} = usPrevNextButtons(emblaApi)

    return (
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
    
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevButtonDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextButtonDisabled} />
            </div>
    
            <div className="embla__dots">
              {scrollSnaps.map((_, index: number) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }
    
    export default EmblaCarousel
    