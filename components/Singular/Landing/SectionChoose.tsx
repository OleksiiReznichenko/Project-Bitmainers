import classes from '@/styles/componentsStyles/Landing/sectionChoose.module.scss';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

type ActiveCharacter = 'red' | 'yellow' | 'green';

export default function SectionChoose() {
    const [activeCharacter, setActiveCharacter] = useState<ActiveCharacter>('yellow');
    const characterBoxes = useRef<HTMLDivElement>(null);

    const scrollToCharacter = (): void => {
        if (window.innerWidth > 2150 || window.innerWidth < 850) return;

        const baseFontSizeString = getComputedStyle(document.querySelector('html')!).fontSize;
        const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);

        let characterBoxWidth = 61;

        if (window.innerWidth < 1550) {
            characterBoxWidth = 52;
        }

        if (window.innerWidth < 1150) {
            characterBoxWidth = 47;
        }

        if (window.innerWidth < 1000) {
            characterBoxWidth = 42;
        }

        const containerWidth = characterBoxWidth * baseFontSize * 3 + 3.4 * baseFontSize * 2 + 3;
        
        let x = (containerWidth - window.innerWidth) / 2;

        if (activeCharacter === 'red') {
            x = 0;
        } else if (activeCharacter === 'yellow') {
            x = -(containerWidth - window.innerWidth) / 2;
        } else if (activeCharacter === 'green') {
            x = -(containerWidth - window.innerWidth);
        }

        // console.log('containerWidth', containerWidth);
        // console.log('X', x);

        gsap.to(`.${classes['character-boxes']}`, { duration: .8, x: x});
    };

    const chooseCharacter = (event: React.MouseEvent): void => {
        const target = event.target as HTMLElement;

        const characterBox = target.closest(`.${classes['character-box']}`);

        if (!characterBox) return;

        if (characterBox?.classList.contains('red')) {
            setActiveCharacter('red');
        } else if (characterBox?.classList.contains('yellow')) {
            setActiveCharacter('yellow');
        } else if (characterBox?.classList.contains('green')) {
            setActiveCharacter('green');
        }

    };

    useEffect(() => {
        scrollToCharacter();
    }, [activeCharacter])

    return (
        <section className={classes['section-choose'] + ' section'}>
            <div onMouseOver={chooseCharacter} className={classes['character-boxes']} ref={characterBoxes}>
                <div className={classes['character-box-red'] + ' ' + classes['character-box'] + ' red ' + (activeCharacter === 'red' ? classes.active : '')}>
                    <img src="/static/img/LandingPage/SectionChoose/characterRed.png" alt="" className={classes.character} />
                    <div className={classes.info}>
                        <strong className={classes.name}>Devil</strong>
                        <div className={classes['flex-container']}>
                            <div className={classes['info-text']}>NEW NFT COLLECTION.</div>
                            <div className={classes['info-text']}>CLASS: LEGENDARY</div>
                        </div>
                    </div>
                    <div className={classes['black-layer']}></div>
                    <div className={classes['shadow-bottom'] + ' desktop'}></div>
                    <div className={classes['shadow-bottom-2'] + ' desktop'}></div>
                    <div className={classes['shadow-right'] + ' mobile'}></div>
                    <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                </div>
                <div className={classes['character-box-yellow'] + ' ' + classes['character-box'] + ' yellow ' + (activeCharacter === 'yellow' ? classes.active : '')}>
                    <img src="/static/img/LandingPage/SectionChoose/characterYellow.png" alt="" className={classes.character} />
                    <div className={classes.info}>
                        <strong className={classes.name}>Man</strong>
                        <div className={classes['flex-container']}>
                            <div className={classes['info-text']}>NEW NFT COLLECTION.</div>
                            <div className={classes['info-text']}>CLASS: LEGENDARY</div>
                        </div>
                    </div>
                    <img src="/static/img/LandingPage/SectionChoose/banana1.png" alt="" className={classes['banana-1'] + ' desktop'} />
                    <img src="/static/img/LandingPage/SectionChoose/banana2.png" alt="" className={classes['banana-2'] + ' desktop'} />
                    <img src="/static/img/LandingPage/SectionChoose/banana3.png" alt="" className={classes['banana-3'] + ' desktop'} />
                    <div className={classes['black-layer']}></div>
                    <div className={classes['shadow-bottom'] + ' desktop'}></div>
                    <div className={classes['shadow-bottom-2'] + ' desktop'}></div>
                    <div className={classes['shadow-left'] + ' mobile'}></div>
                    <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                </div>
                <div className={classes['character-box-green'] + ' ' + classes['character-box'] + ' green ' + (activeCharacter === 'green' ? classes.active : '')}>
                    <img src="/static/img/LandingPage/SectionChoose/characterGreen.png" alt="" className={classes.character} />
                    <div className={classes.info}>
                        <strong className={classes.name}>Alien</strong>
                        <div className={classes['flex-container']}>
                            <div className={classes['info-text']}>NEW NFT COLLECTION.</div>
                            <div className={classes['info-text']}>CLASS: LEGENDARY</div>
                        </div>
                    </div>
                    <div className={classes['black-layer']}></div>
                    <div className={classes['shadow-bottom'] + ' desktop'}></div>
                    <div className={classes['shadow-bottom-2'] + ' desktop'}></div>
                    <div className={classes['shadow-right'] + ' mobile'}></div>
                    <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                    <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                </div>
            </div>
        </section>
    )
};