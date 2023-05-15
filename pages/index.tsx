import Header from '@/components/Singular/Landing/Header';
import { baseActions, selectIsTouchDevice } from '@/store/base';
import classes from '@/styles/pagesStyles/landing.module.scss';
import classesHeader from '@/styles/componentsStyles/Landing/header.module.scss';
import classesSectionChoose from '@/styles/componentsStyles/Landing/sectionChoose.module.scss';
import classesSectionForest from '@/styles/componentsStyles/Landing/sectionForest.module.scss';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionChoose from '@/components/Singular/Landing/SectionChoose';
import SectionForest from '@/components/Singular/Landing/SectionForest';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const dispatch = useDispatch();
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
        let scrollTimelineEnd = 'top -680%';
    
        if (navigator.userAgent.match(/firefox|fxios/i)) {
            scrollTimelineEnd = 'top -180%';
        }
    
        if (window.outerWidth < 850 || isTouchDevice) {
            scrollTimelineEnd = 'top -5000px';
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
                    // onUpdate: self => {
                    //     console.log(self.)
                    // }
                }
            });
        
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // GSAP ANIMATIONS
            if (window.outerWidth > 850) {
                let YScaleContainer = -94 * vh;
                let YScaleContainer2 = -84 * vh;
                let XCharacterBox = 55 * baseFontSize;
                let XCharacterBoxYellow = '-50%';

                let ScaleSectionChooseScaleContainer = .2;
                let ScaleSectionChooseScaleContainer2 = .5;

                let VhBackground = window.innerHeight / 100;

                if (window.innerWidth > 1900) {
                    YScaleContainer = -98 * vh;
                    YScaleContainer2 = -90 * vh;
                }

                if (window.innerWidth > 2150) {
                    XCharacterBox = 35 * vw;
                    // XCharacterBoxYellow = '-50% !important';
                }

                if (window.innerWidth < 1300) {
                    ScaleSectionChooseScaleContainer = .32;
                    ScaleSectionChooseScaleContainer2 = .56;

                    if (window.innerHeight > 850) {
                        VhBackground = 850 / 100;
                    }

                    if (window.innerHeight > 1000) {
                        ScaleSectionChooseScaleContainer2 = .62;
                    }

                    if (window.innerHeight > 1100) {
                        ScaleSectionChooseScaleContainer2 = .66;
                    }
                }

                if (window.innerWidth < 1150) {
                    XCharacterBox = 49 * baseFontSize;
                }

                if (window.innerWidth < 1000) {
                    XCharacterBox = 45 * baseFontSize;
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
                .add('header-animation-4')
                // .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 0, display: 'none', ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, backgroundColor: 'transparent', ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-red']}`, {duration: 1, x: -XCharacterBox, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, x: 3 * XCharacterBox, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-green']}`, {duration: 1, x: XCharacterBox, onStart: () => {
                    console.log('Started');
                    dispatch(baseActions.sectionChooseAnimationStartedToTrue());
                }, 
                onReverseComplete: () => {
                    console.log('Reverse Completed');
                    dispatch(baseActions.sectionChooseAnimationStartedToFalse());
                },  ease: 'linear'}, 'header-animation-4')
                .add('section-choose-animation')
                .to(`.${classesSectionChoose['banana-3']}`, {duration: 1, x: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, cursor: 'default', width: 100 * vw, x: XCharacterBoxYellow, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-red']}`, {duration: 1, display: 'none', x: -XCharacterBox, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-green']}`, {duration: 1, display: 'none', x: XCharacterBox, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-boxes']}`, {duration: .4, x: 0, ease: 'linear'}, 'section-choose-animation')
                .add('section-choose-animation-2')
                .to(`.${classesSectionChoose['banana-1']}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose['banana-2']}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose['banana-3']}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose.border}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose.info}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose.shadow}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation-2')
                .to(`.${classesSectionChoose['character-box-yellow']} .${classesSectionChoose['character']}`, {duration: 1, scale: .35, y: '-50%', ease: 'linear'}, 'section-choose-animation-2')
                .add('section-choose-animation-3')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .8, backgroundColor: '#FFB23F', ease: 'linear'}, 'section-choose-animation-3-=.2')
                .from(`.${classesSectionChoose['box-part-top']}`, {duration: .8, y: -120 * vh, x: 5 * vw, rotate: 7, ease: 'linear'}, 'section-choose-animation-3-=.2')
                .from(`.${classesSectionChoose['box-part-bottom']}`, {duration: .8, y: 80 * vh, x: 5 * vw, rotate: -7, ease: 'linear'}, 'section-choose-animation-3-=.2')
                .add('section-choose-animation-4')
                .to(`.${classesHeader.header}`, {duration: .1, display: 'none', ease: 'linear'}, 'section-choose-animation-4')
                .from(`.${classesSectionForest['section-forest']}`, {duration: .1, display: 'none', ease: 'linear'}, 'section-choose-animation-4')
                .from(`.${classesSectionChoose.grabber}`, {duration: .5, y: -60 * vh, ease: 'linear'}, 'section-choose-animation-4')
                .add('section-choose-animation-5')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .5, scale: ScaleSectionChooseScaleContainer, y: -12 * vh, ease: 'linear'}, 'section-choose-animation-5')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .5, backgroundColor: 'transparent', ease: 'linear'}, 'section-choose-animation-5')
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 0, backgroundColor: 'transparent', ease: 'linear'}, 'section-choose-animation-5')
                .add('section-forest-animation')
                .fromTo(`.${classesSectionForest['trees-background']}`, {duration: .5, y: 60 * vh, ease: 'linear'}, 
                {duration: .8, y: -10 * VhBackground, x: 14 * vw, scale: 1.2, ease: 'linear'}, 'section-forest-animation')
                .fromTo(`.${classesSectionForest['grass-container']}`, {duration: .5, y: 60 * vh, ease: 'linear'}, 
                {duration: .8, y: 1 * VhBackground, x: 14 * vw, scale: 1.2, ease: 'linear'}, 'section-forest-animation')
                // .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, scale: .5, y: 30 * vh, x: -5 * vw, ease: 'linear'}, 'section-forest-animation')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, scale: ScaleSectionChooseScaleContainer2, y: 30 * VhBackground, x: -5 * vw, ease: 'linear'}, 'section-forest-animation')
                .add('section-forest-animation-2')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, y: -110 * VhBackground, ease: 'linear'}, 'section-forest-animation-2')
                // .from(`.${classesSectionForest['miner']}`, {duration: .4, opacity: 0, x: '3rem', y: '-3rem', ease: 'linear'}, 'section-forest-animation-2')
                .fromTo(`.${classesSectionForest['miner']}`, 
                {duration: .4, opacity: 0, x: '-6rem', y: '-3rem', ease: 'linear'},
                {duration: .4, opacity: 1, x: '-10rem', y: 0, ease: 'linear'}, 'section-forest-animation-2')
                .add('section-forest-animation-3')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .5, display: 'none', ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.5, y: -20 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -59 * vw, y: -16 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 1.5, x: -85 * vw, y: -5 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, y: '-5rem', x: '-3rem', ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, y: '-5rem', x: -3 * vw, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, x: '-19rem', y: '-5rem', ease: 'linear'}, 'section-forest-animation-3')
                .from(`.${classesSectionForest.crystal}`, {duration: 1, scale: .8, x: 80 * vw, y: 10 * vh, ease: 'linear'}, 'section-forest-animation-3')
                .add('section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-12rem', x: 6 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest['miner']}`, {duration: .5, x: '-2rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest.crystal}`, {duration: .5, opacity: 0, ease: 'linear'}, 'section-forest-animation-4')
                .from(`.${classesSectionForest['appearing-info']}`, {duration: .8, y: 100 * vh, x: 10 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .add('section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['appearing-info']}`, {duration: 1, y: -50 * vh, x: -110 * vw, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.9, y: -30 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -79 * vw, y: -21 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 2.1, x: -130 * vw, y: -9 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .from(`.${classesSectionForest['main-tube']}`, {duration: 1, scale: .7, x: 40 * vw, y: 5 * vh, opacity: 0, ease: 'linear'}, 'section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, y: '-12rem', x: -5 * vw, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, x: '-28rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-5')
                .add('section-forest-animation-6')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 6 * vw, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 0, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
            } else {
                let VhBackground = window.innerHeight / 100;
                let XScaleContainer = 95 * vw;

                
                let YScaleContainer = -94 * vh;
                let YScaleContainer2 = -84 * vh;
                let XCharacterBox = 55 * baseFontSize;
                let XCharacterBoxYellow = '-50%';

                let ScaleSectionChooseScaleContainer = .2;
                let ScaleSectionChooseScaleContainer2 = .5;

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
                .add('header-animation-4')
                // .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 0, display: 'none', ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, backgroundColor: 'transparent', ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-red']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['character-box-green']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .add('section-choose-animation')
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, cursor: 'default', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', height: 110 * vh, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-red']}`, {duration: 1, y: -35 * vh, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-green']}`, {duration: 1, y: 35 * vh, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-boxes']}`, {duration: .4, y: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['info-left']}`, {duration: .8, opacity: 0, x: -30 * vw, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['info-right']}`, {duration: .8, opacity: 0, x: 30 * vw, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose.shadow}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .add('section-choose-animation-2')
                .to(`.${classesSectionChoose['character-box-yellow']} .${classesSectionChoose['character']}`, {duration: 1, scale: .35, y: '-50%', ease: 'linear'}, 'section-choose-animation-2')
                .add('section-choose-animation-3')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .8, backgroundColor: '#FFB23F', ease: 'linear'}, 'section-choose-animation-3-=.2')
                .from(`.${classesSectionChoose['box-part-top']}`, {duration: .8, y: -120 * vh, x: 5 * vw, rotate: 7, ease: 'linear'}, 'section-choose-animation-3-=.2')
                .from(`.${classesSectionChoose['box-part-bottom']}`, {duration: .8, y: 80 * vh, x: 5 * vw, rotate: -7, ease: 'linear'}, 'section-choose-animation-3-=.2')
                .add('section-choose-animation-4')
                .to(`.${classesHeader.header}`, {duration: .1, display: 'none', ease: 'linear'}, 'section-choose-animation-4')
                .from(`.${classesSectionForest['section-forest']}`, {duration: .1, display: 'none', ease: 'linear'}, 'section-choose-animation-4')
                .from(`.${classesSectionChoose.grabber}`, {duration: .5, y: -60 * vh, ease: 'linear'}, 'section-choose-animation-4')
                .add('section-choose-animation-5')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .5, scale: ScaleSectionChooseScaleContainer, y: -12 * vh, ease: 'linear'}, 'section-choose-animation-5')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .5, backgroundColor: 'transparent', ease: 'linear'}, 'section-choose-animation-5')
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 0, backgroundColor: 'transparent', ease: 'linear'}, 'section-choose-animation-5')
                .add('section-forest-animation')
                .fromTo(`.${classesSectionForest['trees-background']}`, {duration: .5, y: 60 * vh, ease: 'linear'}, 
                {duration: .8, y: -10 * VhBackground, x: 14 * vw, scale: 1.2, ease: 'linear'}, 'section-forest-animation')
                .fromTo(`.${classesSectionForest['grass-container']}`, {duration: .5, y: 60 * vh, ease: 'linear'}, 
                {duration: .8, y: 1 * VhBackground, x: 14 * vw, scale: 1.2, ease: 'linear'}, 'section-forest-animation')
                // .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, scale: .5, y: 30 * vh, x: -5 * vw, ease: 'linear'}, 'section-forest-animation')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, scale: ScaleSectionChooseScaleContainer2, y: 30 * VhBackground, x: -5 * vw, ease: 'linear'}, 'section-forest-animation')
                .add('section-forest-animation-2')
                .to(`.${classesSectionChoose['scale-container']}`, {duration: .8, y: -110 * VhBackground, ease: 'linear'}, 'section-forest-animation-2')
                // .from(`.${classesSectionForest['miner']}`, {duration: .4, opacity: 0, x: '3rem', y: '-3rem', ease: 'linear'}, 'section-forest-animation-2')
                .fromTo(`.${classesSectionForest['miner']}`, 
                {duration: .4, opacity: 0, x: '-6rem', y: '-3rem', ease: 'linear'},
                {duration: .4, opacity: 1, x: '-10rem', y: 0, ease: 'linear'}, 'section-forest-animation-2')
                .add('section-forest-animation-3')
                .to(`.${classesSectionChoose['section-choose']}`, {duration: .5, display: 'none', ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.5, y: -20 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -59 * vw, y: -16 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 1.5, x: -85 * vw, y: -5 * VhBackground, ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, y: '-5rem', x: '-3rem', ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, y: '-5rem', x: -3 * vw, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, x: '-19rem', y: '-5rem', ease: 'linear'}, 'section-forest-animation-3')
                .from(`.${classesSectionForest.crystal}`, {duration: 1, scale: .8, x: 80 * vw, y: 10 * vh, ease: 'linear'}, 'section-forest-animation-3')
                .add('section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-12rem', x: 6 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest['miner']}`, {duration: .5, x: '-2rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest.crystal}`, {duration: .5, opacity: 0, ease: 'linear'}, 'section-forest-animation-4')
                .from(`.${classesSectionForest['appearing-info']}`, {duration: .8, y: 100 * vh, x: 10 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .add('section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['appearing-info']}`, {duration: 1, y: -50 * vh, x: -110 * vw, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.9, y: -30 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -79 * vw, y: -21 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 2.1, x: -130 * vw, y: -6 * VhBackground, ease: 'linear'}, 'section-forest-animation-5')
                .from(`.${classesSectionForest['main-tube']}`, {duration: 1, scale: .7, x: 40 * vw, y: 5 * vh, opacity: 0, ease: 'linear'}, 'section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, y: '-12rem', x: -5 * vw, ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, x: '-28rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-5')
                .add('section-forest-animation-6')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 6 * vw, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 0, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
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
                <SectionForest />
            </div>
        </div>
    )
}