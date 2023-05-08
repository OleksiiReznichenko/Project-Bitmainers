import Header from '@/components/Singular/Landing/Header';
import { selectIsTouchDevice } from '@/store/base';
import classes from '@/styles/pagesStyles/landing.module.scss';
import classesHeader from '@/styles/componentsStyles/Landing/header.module.scss';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionChoose from '@/components/Singular/Landing/SectionChoose';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const isTouchDevice = useSelector(selectIsTouchDevice);
    let timeline = gsap.timeline({});
    let ctx = gsap.context(() => {})

    const initAnimation = (): void => {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CSS UNITS IN PIXELS
        const baseFontSizeString = getComputedStyle(document.querySelector('html')!).fontSize;
        const baseFontSize = +baseFontSizeString.substring(0, baseFontSizeString.length - 2);
        let vw = windowWidth / 100;
        let vwRestricted = windowWidth / 100;
        let vh = windowHeight / 100;
    
        if (window.outerWidth > 1950) {
            vwRestricted = 1920 / 100;
        }
    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TIMELINE END
        let scrollTimelineEnd = 'top -320%';
    
        if (navigator.userAgent.match(/firefox|fxios/i)) {
            scrollTimelineEnd = 'top -180%';
        }
    
        if (window.outerWidth < 850 || isTouchDevice) {
            scrollTimelineEnd = 'top -3000px';
        }
    
        let scrollTimelineTrigger = `.animation-block`;

        ctx = gsap.context(() => {
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // GSAP TIMELINE
            timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollTimelineTrigger,
                    start: 'top 0%',
                    end: scrollTimelineEnd,
                    scrub: 1,
                    pin: scrollTimelineTrigger,
                }
            });
        
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // GSAP ANIMATIONS
            if (window.outerWidth > 850) {
                let YScaleContainer = -94 * vh;
                let YScaleContainer2 = -84 * vh;

                if (window.innerWidth > 1900) {
                    YScaleContainer = -98 * vh;
                    YScaleContainer2 = -90 * vh;
                }

                timeline
                .add('header-animation-1')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, scale: 4, rotate: 10, x: 110 * vw, y: YScaleContainer, ease: 'linear'}, 'header-animation-1')
                .to(`.${classesHeader['character-3']}`, {duration: 1, y: '-2rem', ease: 'linear'}, 'header-animation-1')
                .from(`.${classesHeader['appearing-info']}`, {duration: .3, delay: .7, autoAlpha: 0, y: -5 * vh, ease: 'linear'}, 'header-animation-1')
                .add('header-animation-2')
                // .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: -3, x: -110 * vw, y: -104 * vh, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: -1, x: -155 * vw, y: YScaleContainer2, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['appearing-info']}`, {duration: .3, x: -40 * vw + -50 * baseFontSize, y: 15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['character-4']}`, {duration: .3, y: 4 * vh, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['scale-container']}`, {duration: .3, delay: 1, scale: 4.1, x: -150 * vw, y: YScaleContainer2 + -4 * vh, ease: 'linear'}, 'header-animation-2')
                .from(`.${classesHeader['appearing-info-2']}`, {duration: .3, delay: 1, y: -5 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2')
                .add('header-animation-3')
                .to(`.${classesHeader['inner-container']}`, {duration: .3, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['appearing-info-2']}`, {duration: .3, x: 20 * vw + 40 * baseFontSize, y: -15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: 0, x: 0, y: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, delay: 1, scale: 1, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['cloud-left-last']}`, {duration: 1, delay: 1, opacity: 0, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['cloud-right-last']}`, {duration: 1, delay: 1, opacity: 0, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['appearing-info-3']}`, {duration: .3, delay: .8, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
            } else {
                let XScaleContainer = 95 * vw;

                if (window.innerWidth < 700) {
                    XScaleContainer = 85 * vw;
                }

                if (window.innerWidth < 600) {
                    XScaleContainer = 75 * vw;
                }

                if (window.innerWidth < 500) {
                    XScaleContainer = 55 * vw;
                }

                if (window.innerWidth < 450) {
                    XScaleContainer = 40 * vw;
                }

                if (window.innerWidth < 400) {
                    XScaleContainer = 33 * vw;
                }

                timeline
                .add('header-animation-1')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, scale: 4, x: XScaleContainer, y: -149 * vh, ease: 'linear'}, 'header-animation-1')
                .from(`.${classesHeader['appearing-info']}`, {duration: .3, delay: .7, autoAlpha: 0, y: -5 * vh, ease: 'linear'}, 'header-animation-1')
                .to(`.${classesHeader['character-5']}`, {duration: .3, delay: .7, scale: 1.3, ease: 'linear'}, 'header-animation-1')

                .add('header-animation-2')
                .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: -1, x: -155 * vw, y: -134 * vh, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['appearing-info']}`, {duration: .3, x: -40 * vw + -30 * baseFontSize, y: 15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2')
                .from(`.${classesHeader['appearing-info-2']}`, {duration: .3, delay: .7, y: -5 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2')
                .add('header-animation-3')
                .to(`.${classesHeader['inner-container']}`, {duration: .3, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['appearing-info-2']}`, {duration: .3, x: 20 * vw + 40 * baseFontSize, y: -15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['scale-container']}`, {duration: .7, rotate: 0, x: 0, y: 0, ease: 'linear'}, 'header-animation-3')
                .to(`.${classesHeader['scale-container']}`, {duration: .7, delay: .7, scale: 1, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['cloud-left-last']}`, {duration: .7, delay: .7, opacity: 0, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['cloud-right-last']}`, {duration: .7, delay: .7, opacity: 0, ease: 'linear'}, 'header-animation-3')
                .from(`.${classesHeader['appearing-info-3']}`, {duration: .3, delay: .6, autoAlpha: 0, ease: 'linear'}, 'header-animation-3')
            }
        })
    };

    useEffect(() => {
        initAnimation();
        return () => ctx.revert();
    }, []);

    return (
        <div className={classes['page-main']}>
            <div className={classes['animation-block'] + ' animation-block'}>
                <Header />
                <SectionChoose />
            </div>
        </div>
    )
}