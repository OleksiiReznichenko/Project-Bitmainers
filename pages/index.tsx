import Header from '@/components/Singular/Landing/Header';
import { baseActions, selectIsTouchDevice } from '@/store/base';
import classes from '@/styles/pagesStyles/landing.module.scss';
import classesHeader from '@/styles/componentsStyles/Landing/header.module.scss';
import classesSectionChoose from '@/styles/componentsStyles/Landing/sectionChoose.module.scss';
import classesSectionForest from '@/styles/componentsStyles/Landing/sectionForest.module.scss';
import classesSectionRocks from '@/styles/componentsStyles/Landing/sectionRocks.module.scss';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionChoose from '@/components/Singular/Landing/SectionChoose';
import SectionForest from '@/components/Singular/Landing/SectionForest';
import SectionRocks from '@/components/Singular/Landing/SectionRocks';
import Footer from '@/components/Singular/App/Footer';

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
        let scrollTimelineEnd = 'top -1360%';
    
        if (navigator.userAgent.match(/firefox|fxios/i)) {
            scrollTimelineEnd = 'top -1700%';
        }
    
        if (window.outerWidth < 850 || isTouchDevice) {
            scrollTimelineEnd = 'top -9300px';
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
                let YPlayingMachineInfo = -8 * baseFontSize;
                // let YPlayingMachine = 0;
                let YPlayingMachineContainer = 160 * vh;
                let YSectionForestScaleContainer2 = '-65%';
                let YAppearingInfo2Container = 45 * vh;
                let YOuterScaleContainer2 = 4 * vh;
                
                let XCharacterBox = 55 * baseFontSize;
                let XCharacterBoxYellow = '-50%';
                let XTranslateContainer1 = -120 * vw;
                let XTranslateContainer2 = -230 * vw;
                let XTranslateContainer3 = -240 * vw;

                let ScaleSectionChooseScaleContainer = .2;
                let ScaleSectionChooseScaleContainer2 = .5;
                let ScalePlayingMachineContainer = 8;

                let WidthSectionForestScaleContainer2 = 35 / .4 * baseFontSize;
                
                let VhBackground = window.innerHeight / 100;

                if (window.innerHeight > 1100) {
                    YPlayingMachineInfo = -6 * baseFontSize;
                }

                if (window.innerHeight > 1300) {
                    YPlayingMachineInfo = -4 * baseFontSize;
                }

                if (window.innerHeight > 1500) {
                    YPlayingMachineInfo = -2 * baseFontSize;
                }

                if (window.innerWidth > 1900) {
                    YScaleContainer = -98 * vh;
                    YScaleContainer2 = -90 * vh;
                }

                if (window.innerWidth > 1950) {
                    ScalePlayingMachineContainer = 10;
                }

                if (window.innerWidth > 2550) {
                    ScalePlayingMachineContainer = 11;
                    WidthSectionForestScaleContainer2 = 35 / .3 * baseFontSize;
                }

                if (window.innerWidth > 2850) {
                    ScalePlayingMachineContainer = 13;
                }

                if (window.innerWidth > 3250) {
                    ScalePlayingMachineContainer = 14;
                }

                if (window.innerWidth > 2150) {
                    XCharacterBox = 35 * vw;
                    // XCharacterBoxYellow = '-50% !important';
                }

                if (window.innerWidth < 1650) {
                    XTranslateContainer1 = -1300 + -50 * vw;
                    XTranslateContainer2 = -2800 + -50 * vw;
                    XTranslateContainer3 = -3100 + -50 * vw;

                    if (window.innerHeight < 730) {
                        YAppearingInfo2Container = 48 * vh;
                    }

                    if (window.innerHeight > 900) {
                        YPlayingMachineInfo = -6 * baseFontSize;
                    }

                    if (window.innerHeight > 1000) {
                        YPlayingMachineInfo = -4 * baseFontSize;
                    }

                    if (window.innerHeight > 1100) {
                        YPlayingMachineInfo = -3 * baseFontSize;
                    }

                    if (window.innerHeight > 1200) {
                        YPlayingMachineInfo = -2 * baseFontSize;
                    }
                }

                if (window.innerWidth < 1300) {
                    ScaleSectionChooseScaleContainer = .32;
                    ScaleSectionChooseScaleContainer2 = .56;

                    if (window.innerHeight > 750) {
                        // YPlayingMachine = -20 * vh;
                        YPlayingMachineContainer = 95 * vh;
                    }

                    if (window.innerHeight > 850) {
                        VhBackground = 850 / 100;
                        YSectionForestScaleContainer2 = '-62%';
                        YAppearingInfo2Container = 39 * vh;
                    }

                    if (window.innerHeight > 900) {
                        YPlayingMachineContainer = 115 * vh;
                    }

                    if (window.innerHeight > 950) {
                        YSectionForestScaleContainer2 = '-60%';
                    }

                    if (window.innerHeight > 1000) {
                        ScaleSectionChooseScaleContainer2 = .62;
                        YPlayingMachineContainer = 95 * vh;
                        YAppearingInfo2Container = 30 * vh;
                    }

                    if (window.innerHeight > 1100) {
                        ScaleSectionChooseScaleContainer2 = .66;
                        YPlayingMachineContainer = 80 * vh;
                        YSectionForestScaleContainer2 = '-56%';
                    }

                    if (window.innerHeight > 1200) {
                        YSectionForestScaleContainer2 = '-52%';
                    }
                }

                if (window.innerWidth < 1200) {
                    
                    if (window.innerHeight > 700) {
                        YAppearingInfo2Container = 39 * vh;
                    }

                    if (window.innerHeight > 800) {
                        YPlayingMachineInfo *= .8;
                    }
                    
                    if (window.innerHeight > 1100) {
                        YOuterScaleContainer2 = 1 * vh;
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
                .to(`.${classesHeader['scale-container']}`, {duration: 1.5, scale: 4, rotate: 10, x: 110 * vw, y: YScaleContainer, ease: 'linear'}, 'header-animation-1')
                .to(`.${classesHeader['character-3']}`, {duration: 1.5, y: '-2rem', ease: 'linear'}, 'header-animation-1')
                .from(`.${classesHeader['appearing-info']}`, {duration: .8, delay: .7, autoAlpha: 0, y: -5 * vh, ease: 'linear'}, 'header-animation-1')
                .add('header-animation-2')
                // .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: -3, x: -110 * vw, y: -104 * vh, ease: 'linear'}, 'header-animation-2')
                .to(`.${classesHeader['scale-container']}`, {duration: 1.5, rotate: -1, x: -155 * vw, y: YScaleContainer2, ease: 'linear'}, 'header-animation-2+=.2')
                .to(`.${classesHeader['appearing-info']}`, {duration: .4, x: -40 * vw + -50 * baseFontSize, y: 15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2+=.2')
                .to(`.${classesHeader['character-4']}`, {duration: .4, y: 4 * vh, ease: 'linear'}, 'header-animation-2+=.2')
                .to(`.${classesHeader['scale-container']}`, {duration: .8, delay: 1.5, scale: 4.1, x: -150 * vw, y: YScaleContainer2 + -4 * vh, ease: 'linear'}, 'header-animation-2+=.2')
                .from(`.${classesHeader['appearing-info-2']}`, {duration: .8, delay: 1.5, y: -5 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2+=.2')
                .add('header-animation-3')
                .to(`.${classesHeader['inner-container']}`, {duration: .4, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['appearing-info-2']}`, {duration: .7, x: 20 * vw + 40 * baseFontSize, y: -15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['scale-container']}`, {duration: 1.5, rotate: 0, x: 0, y: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['scale-container']}`, {duration: 1.5, delay: 1.5, scale: 1, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['cloud-left-last']}`, {duration: 1.5, delay: 1.5, opacity: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['cloud-right-last']}`, {duration: 1.5, delay: 1.5, opacity: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['appearing-info-3']}`, {duration: .9, delay: .8, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .add('header-animation-4')
                // .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 0, display: 'none', ease: 'linear'}, 'header-animation-4+=.1')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, backgroundColor: 'transparent', ease: 'linear'}, 'header-animation-4+=.1')
                .from(`.${classesSectionChoose['character-box-red']}`, {duration: 1, x: -XCharacterBox, ease: 'linear'}, 'header-animation-4+=.1')
                .from(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, x: 3 * XCharacterBox, ease: 'linear'}, 'header-animation-4+=.1')
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
                .to(`.${classesSectionChoose['character-box-yellow']} .${classesSectionChoose['character-container']}`, {duration: 1, scale: .35, y: '-50%', ease: 'linear'}, 'section-choose-animation-2')
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
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 1.5, x: -85 * vw, y: -5 * 8, ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, y: '-5rem', x: '-3rem', ease: 'linear'}, 'section-forest-animation-3')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, y: '-5rem', x: -3 * vw, ease: 'linear'}, 'section-forest-animation-3')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.5, x: '-19rem', y: '-5rem', ease: 'linear'}, 'section-forest-animation-3')
                .from(`.${classesSectionForest.crystal}`, {duration: 1, scale: .8, x: 80 * vw, y: 10 * vh, ease: 'linear'}, 'section-forest-animation-3')
                .add('section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-4')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-12rem', x: 6 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest['miner']}`, {duration: .8, x: '-2rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest.crystal}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-forest-animation-4')
                .from(`.${classesSectionForest['appearing-info']}`, {duration: .8, y: 100 * vh, x: 10 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .add('section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['appearing-info']}`, {duration: 1, y: -50 * vh, x: -110 * vw, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.9, y: -30 * VhBackground, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -79 * vw, y: -21 * VhBackground, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 2.1, x: -130 * vw, y: -9 * 8, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .from(`.${classesSectionForest['main-tube']}`, {duration: 1, scale: .7, x: 40 * vw, y: 5 * vh, opacity: 0, ease: 'linear'}, 'section-forest-animation-5+=.25')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, y: '-12rem', x: -5 * vw, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, x: '-28rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-5+=.25')
                .add('section-forest-animation-6')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 0, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
                .add('section-forest-animation-7')
                .to(`.${classesSectionForest['main-tube-container']}`, {duration: 1, y: '80rem', opacity: 0, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, y: '80rem', opacity: 0, ease: 'linear'}, 'section-forest-animation-7')
                .from(`.${classesSectionForest['tubes-container']}`, {duration: 1, x: 0, y: '80rem', ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, opacity: 0, scale: 2.5, y: -40 * VhBackground, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -99 * vw, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, opacity: 0, scale: 2.5, x: -180 * vw, y: -12 * 8, ease: 'linear'}, 'section-forest-animation-7')
                .fromTo(`.${classesSectionForest['scale-container-2']}`, 
                {duration: 1, opacity: 0, scale: 1, x: '-35%', ease: 'linear'}, 
                {duration: 1, opacity: 1, scale: 1.9, y: '-100%', ease: 'linear'}, 
                'section-forest-animation-7')
                .fromTo(`.${classesSectionForest['grass-container-2']}`, 
                {duration: 1, opacity: 0, scale: 1, x: 20 * vw, ease: 'linear'}, 
                {duration: 1, opacity: 1, scale: 2, y: -8 * 8, x: -10 * vw, ease: 'linear'}, 
                'section-forest-animation-7')
                .add('section-forest-animation-8')
                .from(`.${classesSectionForest['appearing-info-2-container']}`, {duration: 1, opacity: 0, scale: .3, x: '-50%', ease: 'linear'}, 'section-forest-animation-8')
                .to(`.${classesSectionForest['tubes-container']}`, {duration: 1, opacity: 0, scale: 1.3, x: 30 * vw, y: 10 * vh, ease: 'linear'}, 'section-forest-animation-8')
                .to(`.${classesSectionForest['tube-container-1']}`, {duration: 1, x: -30 * vw, ease: 'linear'}, 'section-forest-animation-8')
                .to(`.${classesSectionForest['grass-container-2']}`, {duration: 1, scale: 2.5, x: -10 * vw, y: 5 * VhBackground, ease: 'linear'}, 'section-forest-animation-8')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 0, overflow: 'hidden', maxWidth: 100 * vw, ease: 'linear'}, 'section-forest-animation-8')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 1, scale: 2.4, ease: 'linear'}, 'section-forest-animation-8')
                .add('section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: 0, display: 'none', ease: 'linear'}, 'section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: .4, opacity: 0, ease: 'linear'}, 'section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: 1.2, scale: ScalePlayingMachineContainer, y: YPlayingMachineContainer, ease: 'linear'}, 'section-forest-animation-9-=.2')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: .8, delay: .2, scale: .3, y: YPlayingMachineInfo, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .25, delay: .2, width: WidthSectionForestScaleContainer2, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .5, delay: .45, width: 35 / .4 * baseFontSize, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .5, delay: .2, y: YSectionForestScaleContainer2, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .4, delay: .2, x: '-50%', ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .8, delay: .2, backgroundColor: '#16181A', scale: .4, height: 35 / .5 * baseFontSize, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['grass-container-2']}`, {duration: .2, opacity: 0, ease: 'linear'}, 'section-forest-animation-9')
                .add('section-forest-animation-10')
                .to(`.${classesSectionForest['playing-machine']}`, {duration: 1.2, scale: .8, y: YAppearingInfo2Container - 4 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['outher-scale-container-2']}`, {duration: 1.2, y: YAppearingInfo2Container + YOuterScaleContainer2, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 1.2, scale: .25, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: 1.2, scale: .2, y: YPlayingMachineInfo + YAppearingInfo2Container, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['appearing-info-3']}`, {duration: 1.2, scale: 0, y: 100 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['banana-fire-container-1']}`, {duration: 1.2, x: -40 * vw, y: 80 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['banana-fire-container-2']}`, {duration: 1.2, x: 40 * vw, y: -80 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .add('section-forest-animation-11')
                .to(`.${classesSectionForest['playing-machine']}`, {duration: 1.2, y: YAppearingInfo2Container - 4 * vh + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['outher-scale-container-2']}`, {duration: 1.2, y: YAppearingInfo2Container + YOuterScaleContainer2 + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: 1.2, scale: .2, y: YPlayingMachineInfo + YAppearingInfo2Container + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['appearing-info-3']}`, {duration: 1.2, y: -100 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['banana-fire-container-1']}`, {duration: 1.2, x: -60 * vw, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['banana-fire-container-2']}`, {duration: 1.2, x: 60 * vw, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .add('section-rocks-animation-1')
                .from(`.${classesSectionRocks['section-rocks']}`, {duration: 0, display: 'none', ease: 'linear'}, 'section-rocks-animation-1-=.7')
                .from(`.${classesSectionRocks['section-rocks']}`, {duration: .4, opacity: 0, ease: 'linear'}, 'section-rocks-animation-1-=.7')
                .from(`.${classesSectionRocks['roadmap-line']}`, {duration: 1, y: 100 * vh, ease: 'linear'}, 'section-rocks-animation-1-=.7')
                .from(`.${classesSectionRocks['cave']}`, {duration: .6, delay: .4, x: 35 * vw, ease: 'linear'}, 'section-rocks-animation-1-=.7')
                .add('section-rocks-animation-2')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 2, x: XTranslateContainer1, ease: 'linear'}, 'section-rocks-animation-2+=.15')
                .to(`.${classesSectionRocks['roadmap-line']}`, {duration: 2, x: -20 * vw, ease: 'linear'}, 'section-rocks-animation-2+=.15')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 2, scale: 1.2, ease: 'linear'}, 'section-rocks-animation-2+=.15')
                .from(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-1']}`, {duration: 2, opacity: 0, scale: .8, y: 20 * vh, ease: 'linear'}, 'section-rocks-animation-2+=.15')
                .add('section-rocks-animation-3')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 2, x: XTranslateContainer2, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 2, scale: 2, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .from(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-2']}`, {duration: 2, opacity: 0, scale: .8, y: -20 * vh, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .add('section-rocks-animation-4')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 1.5, x: XTranslateContainer3, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['rocks-top']}`, {duration: 1.5, x: -7 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['rocks-bottom']}`, {duration: 1.5, x: -7 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 1.5, scale: 1.1, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-2']}`, {duration: 1.5, x: -60 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .from(`.${classesSectionRocks['last-block']}`, {duration: 1.5, x: 100 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')


            } else {
                let YPlayingMachineInfo = -5 * baseFontSize;
                // let YPlayingMachine = 0;
                let YPlayingMachineContainer = 120 * vh;
                let YSectionForestScaleContainer2 = '-60%';
                let YAppearingInfo2Container = 36 * vh;
                // let YOuterScaleContainer2 = 4 * vh;
                let YOuterScaleContainer2 = 0;
                let YPlayingMachine = 6 * vh;

                let XScaleContainer = 95 * vw;
                let XTranslateContainer1 = -1300 + -50 * vw;
                let XTranslateContainer2 = -2800 + -50 * vw;
                let XTranslateContainer3 = -3000 + -50 * vw;

                let ScaleSectionChooseScaleContainer = .5;
                let ScaleSectionChooseScaleContainer2 = .6;
                let ScalePlayingMachineContainer = 8;

                let WidthSectionForestScaleContainer2 = 35 / .4 * baseFontSize;

                let DurationRoadmapLine = .5;

                let VhBackground = window.innerHeight / 100;

                if (window.innerHeight > 700) {
                    YAppearingInfo2Container = 28 * vh;
                }

                if (window.innerHeight > 800) {
                    YAppearingInfo2Container = 20 * vh;
                    YPlayingMachineContainer = 100 * vh;
                }

                if (window.innerHeight > 900) {
                    YPlayingMachine = 8 * vh;
                    // YOuterScaleContainer2 = 2 * vh;
                    YOuterScaleContainer2 = -2 * vh;
                    YPlayingMachineContainer = 80 * vh;
                    YPlayingMachineInfo = -3 * baseFontSize;
                }

                if (window.innerHeight > 1000) {
                    YPlayingMachineContainer = 60 * vh;
                    YPlayingMachineInfo = -1 * baseFontSize;
                }

                if (window.innerHeight > 1050) {
                    YSectionForestScaleContainer2 = '-54%';
                }

                // if (window.innerHeight > 1150) {
                //     YPlayingMachineContainer = 50 * vh;
                //     YPlayingMachineInfo = 1 * baseFontSize;
                // }

                if (window.innerHeight > 950) {
                    YAppearingInfo2Container = 12 * vh;
                }

                if (window.innerWidth < 700) {
                    XScaleContainer = 85 * vw;
                }

                if (window.innerWidth < 600) {
                    XScaleContainer = 75 * vw;
                    DurationRoadmapLine = .75;
                }

                if (window.innerWidth < 500) {
                    XScaleContainer = 55 * vw;
                    DurationRoadmapLine = 1;
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
                .to(`.${classesHeader['scale-container']}`, {duration: 1, rotate: -1, x: -155 * vw, y: -134 * vh, ease: 'linear'}, 'header-animation-2+=.2')
                .to(`.${classesHeader['appearing-info']}`, {duration: .3, x: -40 * vw + -30 * baseFontSize, y: 15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2+=.2')
                .from(`.${classesHeader['appearing-info-2']}`, {duration: .3, delay: .7, y: -5 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-2+=.2')
                .add('header-animation-3')
                .to(`.${classesHeader['inner-container']}`, {duration: .3, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['appearing-info-2']}`, {duration: .3, x: 20 * vw + 40 * baseFontSize, y: -15 * vh, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['scale-container']}`, {duration: .7, rotate: 0, x: 0, y: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .to(`.${classesHeader['scale-container']}`, {duration: .7, delay: .7, scale: 1, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['cloud-left-last']}`, {duration: .7, delay: .7, opacity: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['cloud-right-last']}`, {duration: .7, delay: .7, opacity: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .from(`.${classesHeader['appearing-info-3']}`, {duration: .3, delay: .6, autoAlpha: 0, ease: 'linear'}, 'header-animation-3+=.2')
                .add('header-animation-4')
                // .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 0, display: 'none', ease: 'linear'}, 'header-animation-4+=.1')
                .from(`.${classesSectionChoose['section-choose']}`, {duration: 1, autoAlpha: 0, ease: 'linear'}, 'header-animation-4+=.1')
                .from(`.${classesSectionChoose['character-box-red']} .${classesSectionChoose['character-container']}`, 
                {duration: 1, x: '-40%', ease: 'linear'}, 
                'header-animation-4+=.1')
                .from(`.${classesSectionChoose['character-box-yellow']} .${classesSectionChoose['character-container']}`, 
                {duration: 1, x: '80%', ease: 'linear'}, 
                'header-animation-4+=.1')
                .from(`.${classesSectionChoose['character-box-green']} .${classesSectionChoose['character-container']}`, 
                {duration: 1, x: '-40%', ease: 'linear'}, 
                'header-animation-4+=.1')
                // .from(`.${classesSectionChoose['character-boxes']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                
                // .from(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                // .from(`.${classesSectionChoose['character-box-green']}`, {duration: 1, y: 110 * vh, ease: 'linear'}, 'header-animation-4')
                .add('section-choose-animation')
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 1, cursor: 'default', backgroundImage: 'linear-gradient(to right, #FFB23F, #FFB23F)', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', height: 110 * vh, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-red']}`, {duration: 1, y: -35 * vh, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-box-green']}`, {duration: 1, y: 35 * vh, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['character-boxes']}`, {duration: .4, y: 0, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['info-left']}`, {duration: .8, opacity: 0, x: -30 * vw, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose['info-right']}`, {duration: .8, opacity: 0, x: 30 * vw, ease: 'linear'}, 'section-choose-animation')
                .to(`.${classesSectionChoose.shadow}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-choose-animation')
                .fromTo(`.${classesSectionChoose['character-box-yellow']} .${classesSectionChoose['character']}`, 
                {duration: 1, y: '10%', x: '40%', ease: 'linear'}, 
                {duration: 1, scale: .5, y: 0, x: 0, ease: 'linear'}, 
                'section-choose-animation')
                .fromTo(`.${classesSectionChoose['character-box-red']} .${classesSectionChoose['character']}`, 
                {duration: 1, y: '10%', x: '-40%', ease: 'linear'}, 
                {duration: 1, scale: .5, y: 0, x: 0, ease: 'linear'}, 
                'section-choose-animation')
                .fromTo(`.${classesSectionChoose['character-box-green']} .${classesSectionChoose['character']}`, 
                {duration: 1, y: '10%', x: '40%', ease: 'linear'}, 
                {duration: 1, scale: .5, y: 0, x: 0, ease: 'linear'}, 
                'section-choose-animation')
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
                .to(`.${classesSectionChoose['character-box-yellow']}`, {duration: 0, background: 'transparent', ease: 'linear'}, 'section-choose-animation-5')
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
                .to(`.${classesSectionForest['miner']}`, {duration: .8, x: '-2rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-4')
                .to(`.${classesSectionForest.crystal}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-forest-animation-4')
                .from(`.${classesSectionForest['appearing-info']}`, {duration: .8, y: 100 * vh, x: 10 * vw, ease: 'linear'}, 'section-forest-animation-4')
                .add('section-forest-animation-5')
                // .to(`.${classesSectionForest['miner']}`, {duration: .5, y: '-8rem', x: '10rem', ease: 'linear'}, 'section-forest-animation-5')
                .to(`.${classesSectionForest['appearing-info']}`, {duration: 1, y: -50 * vh, x: -110 * vw, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, scale: 1.9, y: -30 * VhBackground, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -79 * vw, y: -21 * VhBackground, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, scale: 2.1, x: -130 * vw, y: -6 * VhBackground, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .from(`.${classesSectionForest['main-tube']}`, {duration: 1, scale: .7, x: 40 * vw, y: 5 * vh, opacity: 0, ease: 'linear'}, 'section-forest-animation-5+=.25')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, y: '-12rem', x: -5 * vw, ease: 'linear'}, 'section-forest-animation-5+=.25')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, scale: 1.9, x: '-28rem', y: '-12rem', ease: 'linear'}, 'section-forest-animation-5+=.25')
                .add('section-forest-animation-6')
                // .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 6 * vw, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, x: 0, y: '-32rem', ease: 'linear'}, 'section-forest-animation-6')
                .add('section-forest-animation-7')
                .to(`.${classesSectionForest['main-tube-container']}`, {duration: 1, y: '80rem', opacity: 0, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['miner']}`, {duration: 1, y: '80rem', opacity: 0, ease: 'linear'}, 'section-forest-animation-7')
                .from(`.${classesSectionForest['tubes-container']}`, {duration: 1, x: 0, y: '80rem', ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['scale-container']}`, {duration: 1, opacity: 0, scale: 2.5, y: -40 * VhBackground, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['trees-background']}`, {duration: 1, x: -99 * vw, ease: 'linear'}, 'section-forest-animation-7')
                .to(`.${classesSectionForest['grass-container']}`, {duration: 1, opacity: 0, scale: 2.5, x: -180 * vw, y: -12 * VhBackground, ease: 'linear'}, 'section-forest-animation-7')
                .fromTo(`.${classesSectionForest['scale-container-2']}`, 
                {duration: 1, opacity: 0, scale: 1, x: 20 * vw, ease: 'linear'}, 
                {duration: 1, opacity: 1, scale: 1.9, y: '-110%', x: 0, ease: 'linear'}, 
                'section-forest-animation-7')
                .fromTo(`.${classesSectionForest['grass-container-2']}`, 
                {duration: 1, opacity: 0, scale: 1, x: 20 * vw, ease: 'linear'}, 
                {duration: 1, opacity: 1, scale: 2, y: -8 * VhBackground, x: -10 * vw, ease: 'linear'}, 
                'section-forest-animation-7')
                .add('section-forest-animation-8')
                .to(`.${classesSectionForest['tubes-container']}`, {duration: 1.4, x: -(1300 - window.innerWidth + 50), ease: 'linear'}, 'section-forest-animation-8')
                .add('section-forest-animation-8.2')
                .from(`.${classesSectionForest['appearing-info-2']}`, {duration: 1, opacity: 0, scale: .3, x: '-60%', ease: 'linear'}, 'section-forest-animation-8.2')
                .to(`.${classesSectionForest['tubes-container']}`, {duration: 1, opacity: 0, scale: 1.3, y: 10 * vh, ease: 'linear'}, 'section-forest-animation-8.2')
                // .to(`.${classesSectionForest['tube-container-1']}`, {duration: 1, x: -30 * vw, ease: 'linear'}, 'section-forest-animation-8.2')
                .to(`.${classesSectionForest['grass-container-2']}`, {duration: 1, scale: 2.5, x: -10 * vw, y: 5 * VhBackground, ease: 'linear'}, 'section-forest-animation-8.2')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 1, scale: 2.4, y: '-120%', ease: 'linear'}, 'section-forest-animation-8.2')
                .add('section-forest-animation-9')
                // .from(`.${classesSectionRocks['section-rocks']}`, {duration: 0, display: 'none', ease: 'linear'}, 'section-forest-animation-9')
                // .from(`.${classesSectionRocks['section-rocks']}`, {duration: .4, opacity: 0, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 0, overflow: 'hidden', maxWidth: 100 * vw, ease: 'linear'}, 'section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: 0, display: 'none', ease: 'linear'}, 'section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: .4, opacity: 0, ease: 'linear'}, 'section-forest-animation-9')
                .from(`.${classesSectionForest['playing-machine-container']}`, {duration: 1.2, scale: ScalePlayingMachineContainer, y: YPlayingMachineContainer, ease: 'linear'}, 'section-forest-animation-9-=.2')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: .8, delay: .2, scale: .3, y: YPlayingMachineInfo, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .25, delay: .2, width: WidthSectionForestScaleContainer2, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .5, delay: .45, width: 35 / .4 * baseFontSize, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .4, delay: .2, y: YSectionForestScaleContainer2, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .4, delay: .2, x: '-50%', ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: .8, delay: .2, backgroundColor: '#16181A', scale: .4, height: 35 / .5 * baseFontSize, ease: 'linear'}, 'section-forest-animation-9')
                .to(`.${classesSectionForest['grass-container-2']}`, {duration: .2, opacity: 0, ease: 'linear'}, 'section-forest-animation-9')
                .add('section-forest-animation-10')
                .to(`.${classesSectionForest['playing-machine']}`, {duration: 1.2, scale: .8, y: YAppearingInfo2Container - YPlayingMachine, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['outher-scale-container-2']}`, {duration: 1.2, y: YAppearingInfo2Container + YOuterScaleContainer2, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['scale-container-2']}`, {duration: 1.2, scale: .25, ease: 'linear'}, 'section-forest-animation-10')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: 1.2, scale: .2, y: -8 * baseFontSize + YAppearingInfo2Container, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['appearing-info-3']}`, {duration: 1.2, scale: 0, y: 100 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['banana-fire-container-1']}`, {duration: 1.2, x: -40 * vw, y: 80 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .from(`.${classesSectionForest['banana-fire-container-2']}`, {duration: 1.2, x: 40 * vw, y: -80 * vh, ease: 'linear'}, 'section-forest-animation-10')
                .add('section-forest-animation-11')
                .to(`.${classesSectionForest['playing-machine']}`, {duration: 1.2, y: YAppearingInfo2Container - 4 * vh + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['outher-scale-container-2']}`, {duration: 1.2, y: YAppearingInfo2Container + YOuterScaleContainer2 + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['appearing-info-2-container']}`, {duration: 1.2, scale: .2, y: YPlayingMachineInfo + YAppearingInfo2Container + 95 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['appearing-info-3']}`, {duration: 1.2, y: -100 * vh, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['banana-fire-container-1']}`, {duration: 1.2, x: -60 * vw, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .to(`.${classesSectionForest['banana-fire-container-2']}`, {duration: 1.2, x: 60 * vw, ease: 'linear'}, 'section-forest-animation-11+=.2')
                .add('section-rocks-animation-1')
                .from(`.${classesSectionRocks['section-rocks']}`, {duration: 0, display: 'none', ease: 'linear'}, 'section-rocks-animation-1-=.9')
                .from(`.${classesSectionRocks['section-rocks']}`, {duration: .4, opacity: 0, ease: 'linear'}, 'section-rocks-animation-1-=.9')
                .from(`.${classesSectionRocks['roadmap-line']}`, {duration: 1, y: 100 * vh, ease: 'linear'}, 'section-rocks-animation-1-=.9')
                .from(`.${classesSectionRocks['cave']}`, {duration: .6, delay: .4, x: 75 * vw, ease: 'linear'}, 'section-rocks-animation-1-=.9')
                .add('section-rocks-animation-1.2')
                .to(`.${classesSectionRocks['roadmap-line']}`, {duration: DurationRoadmapLine, x: -(1000 - window.innerWidth), ease: 'linear'}, 'section-rocks-animation-1.2')
                .add('section-rocks-animation-2')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 1.8, x: XTranslateContainer1, ease: 'linear'}, 'section-rocks-animation-2')
                .to(`.${classesSectionRocks['roadmap-line']}`, {duration: 1.8, x: -20 * vw, ease: 'linear'}, 'section-rocks-animation-2')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 1.8, scale: 1.2, ease: 'linear'}, 'section-rocks-animation-2')
                .from(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-1']}`, {duration: 1.8, opacity: 0, scale: .8, y: 20 * vh, ease: 'linear'}, 'section-rocks-animation-2')
                .add('section-rocks-animation-3')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 1.8, x: XTranslateContainer2, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 1.8, scale: 1.8, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .from(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-2']}`, {duration: 1.8, opacity: 0, scale: .8, y: -20 * vh, ease: 'linear'}, 'section-rocks-animation-3+=.2')
                .add('section-rocks-animation-4')
                .to(`.${classesSectionRocks['translate-cotainer']}`, {duration: 1.3, x: XTranslateContainer3, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['rocks-top']}`, {duration: 1.3, x: -7 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['rocks-bottom']}`, {duration: 1.3, x: -7 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks['scale-container']}`, {duration: 1.3, scale: 1.1, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .to(`.${classesSectionRocks.cave} .${classesSectionRocks['crystal-container-2']}`, {duration: 1.3, x: -400, ease: 'linear'}, 'section-rocks-animation-4+=.2')
                .from(`.${classesSectionRocks['last-block']}`, {duration: 1.3, x: 100 * vw, ease: 'linear'}, 'section-rocks-animation-4+=.2')
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
                <SectionRocks />
            </div>
            <Footer />
        </div>
    )
}