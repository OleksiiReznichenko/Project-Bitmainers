import { selectSectionChooseAnimationStarted, selectActiveChooseCharacter, baseActions } from '@/store/base';
import classes from '@/styles/componentsStyles/Landing/sectionChoose.module.scss';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SectionChoose() {
    const dispatch = useDispatch();
    const sectionChooseAnimationStarted = useSelector(selectSectionChooseAnimationStarted);
    const activeCharacter = useSelector(selectActiveChooseCharacter);
    
    // DOM ELEMENTS
    const characterBoxes = useRef<HTMLDivElement>(null);
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SCROLL TO ACTIVE CHARACTER
    const scrollToCharacter = (): void => {
        if (window.innerWidth > 2150 || sectionChooseAnimationStarted) return;

        const baseFontSizeString = getComputedStyle(document.querySelector('html')!).fontSize;
        const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);
        let vh = window.innerHeight / 100;

        if (window.innerWidth > 850) {

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
    
            gsap.to(`.${classes['character-boxes']}`, { duration: .8, x: x});
        } else {
            const containerHeight = 40 * vh + 40 * vh + 55 * vh - 14 * vh - 13 * vh;

            if (containerHeight <= window.innerHeight) return;
            
            let y = (containerHeight - window.innerHeight) / 2;
    
            if (activeCharacter === 'red') {
                y = 0;
            } else if (activeCharacter === 'yellow') {
                y = -(containerHeight - window.innerHeight) / 2;
            } else if (activeCharacter === 'green') {
                y = -(containerHeight - window.innerHeight);
            }
    
            gsap.to(`.${classes['character-boxes']}`, { duration: .8, y: y});
        }
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHOSE ACTIVE CHARACTER ON MOUSEMOVE
    const chooseCharacter = (event: React.MouseEvent): void => {
        if (sectionChooseAnimationStarted) return;
        const target = event.target as HTMLElement;

        const characterBox = target.closest(`.${classes['character-box']}`);

        if (!characterBox) return;

        if (characterBox?.classList.contains('red')) {
            dispatch(baseActions.selectActiveChooseCharacter({character: 'red'}));
        } else if (characterBox?.classList.contains('yellow')) {
            dispatch(baseActions.selectActiveChooseCharacter({character: 'yellow'}));
        } else if (characterBox?.classList.contains('green')) {
            dispatch(baseActions.selectActiveChooseCharacter({character: 'green'}));
        }

    };

    useEffect(() => {
        scrollToCharacter();
    }, [activeCharacter]);

    return (
        <section className={classes['section-choose'] + ' section'}>
            <div className={classes['background-color']}></div>
            <div className={classes['scale-container']}>
                <img src="/static/img/LandingPage/SectionChoose/grabber.png" alt="" className={classes.grabber} />
                <div onMouseOver={chooseCharacter} className={classes['character-boxes']} ref={characterBoxes}>
                    <div className={classes['character-box-red'] + ' ' + classes['character-box'] + ' red ' + (activeCharacter === 'red' ? classes.active : '')}>
                        <div className={classes['inner-container']}>
                            <div className={classes['character-container']}>
                                <img src="/static/img/LandingPage/SectionChoose/characterRed.png" alt="" className={classes.character} />
                            </div>
                            <img src="/static/img/LandingPage/SectionChoose/boxPartTop.png" alt="" className={classes['box-part-top']} />
                            <img src="/static/img/LandingPage/SectionChoose/boxPartBottom.png" alt="" className={classes['box-part-bottom']} />
                            <div className={classes.info + ' ' + classes['info-right']}>
                                <strong className={classes.name}>Devil</strong>
                                <div className={classes['flex-container']}>
                                    <div className={classes['info-text']}>NEW NFT COLLECTION.</div>
                                    <div className={classes['info-text']}>CLASS: LEGENDARY</div>
                                </div>
                            </div>
                            <div className={classes['black-layer']}></div>
                            <div className={classes.shadow + ' ' + classes['shadow-bottom'] + ' desktop'}></div>
                            <div className={classes.shadow + ' ' + classes['shadow-bottom-2'] + ' desktop'}></div>
                            <div className={classes['borders-container']}>
                                <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                            <div className={classes['borders-bold-container']}>
                                <img src="/static/svg/LandingPage/borderBoldBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                        </div>
                    </div>
                    <div className={classes['character-box-yellow'] + ' ' + classes['character-box'] + ' yellow ' + (activeCharacter === 'yellow' ? classes.active : '')}>
                        <div className={classes['inner-container']}>
                            <div className={classes['character-container']}>
                                <img src="/static/img/LandingPage/SectionChoose/characterYellow.png" alt="" className={classes.character} />
                            </div>
                            <img src="/static/img/LandingPage/SectionChoose/boxPartTop.png" alt="" className={classes['box-part-top']} />
                            <img src="/static/img/LandingPage/SectionChoose/boxPartBottom.png" alt="" className={classes['box-part-bottom']} />
                            <div className={classes.info + ' ' + classes['info-left']}>
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
                            <div className={classes.shadow + ' ' + classes['shadow-bottom'] + ' desktop'}></div>
                            <div className={classes.shadow + ' ' + classes['shadow-bottom-2'] + ' desktop'}></div>
                            <div className={classes['borders-container']}>
                                <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                            <div className={classes['borders-bold-container']}>
                                <img src="/static/svg/LandingPage/borderBoldBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                        </div>
                    </div>
                    <div className={classes['character-box-green'] + ' ' + classes['character-box'] + ' green ' + (activeCharacter === 'green' ? classes.active : '')}>
                        <div className={classes['inner-container']}>
                            <div className={classes['character-container']}>
                                <img src="/static/img/LandingPage/SectionChoose/characterGreen.png" alt="" className={classes.character} />
                            </div>
                            <img src="/static/img/LandingPage/SectionChoose/boxPartTop.png" alt="" className={classes['box-part-top']} />
                            <img src="/static/img/LandingPage/SectionChoose/boxPartBottom.png" alt="" className={classes['box-part-bottom']} />
                            <div className={classes.info + ' ' + classes['info-right']}>
                                <strong className={classes.name}>Alien</strong>
                                <div className={classes['flex-container']}>
                                    <div className={classes['info-text']}>NEW NFT COLLECTION.</div>
                                    <div className={classes['info-text']}>CLASS: LEGENDARY</div>
                                </div>
                            </div>
                            <div className={classes['black-layer']}></div>
                            <div className={classes.shadow + ' ' + classes['shadow-bottom'] + ' desktop'}></div>
                            <div className={classes.shadow + ' ' + classes['shadow-bottom-2'] + ' desktop'}></div>
                            <div className={classes['borders-container']}>
                                <img src="/static/svg/LandingPage/borderBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                            <div className={classes['borders-bold-container']}>
                                <img src="/static/svg/LandingPage/borderBoldBottomLeft.svg" alt="" className={classes['border-bottom-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldBottomRight.svg" alt="" className={classes['border-bottom-right'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopLeft.svg" alt="" className={classes['border-top-left'] + ' ' + classes.border + ' desktop'} />
                                <img src="/static/svg/LandingPage/borderBoldTopRight.svg" alt="" className={classes['border-top-right'] + ' ' + classes.border + ' desktop'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};