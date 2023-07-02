import classes from '@/styles/componentsStyles/preloader.module.scss';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';


export default function Preloader() {
    const preloaderTimeline = gsap.timeline({});
    const [percent, setPercent] = useState<number>(0);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PRELOADER ANIMATION
    const initAnimation = (): void => {
        preloaderTimeline
        .to(`.${classes['line-to-top']}`, {duration: .1, delay: 1, height: '50%'}, 0)
        .to(`.${classes['line-to-right']}`, {duration: .1, delay: 1, width: '50%'}, 0)
        .to(`.${classes.percent}`, {duration: .1, delay: 2.2, color: '#FFC700'}, 0)
        .to(`.${classes.line}`, {duration: .1, delay: 2.2, backgroundColor: '#FFC700'}, 0)
        .to(`.${classes['line-to-top']}`, {duration: .1, delay: 2.2, height: '100%'}, 0)
        .to(`.${classes['line-to-right']}`, {duration: .1, delay: 2.2, width: '100%'}, 0)
        .to(`.${classes.preloader}`, {duration: .5, delay: 3, autoAlpha: 0}, 0)
        .to("html", { duration: 0, overflowY: "visible", delay: 3 }, 0);
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SET PRELOADER PERCENT AND INITIAL OVERFLOW-Y OF HTML AND INIT ANIMATION
    useEffect(() => {
        const html = document.querySelector('html')!;
        html.style.overflowY = 'hidden';
        initAnimation();

        setTimeout(() => {
            setPercent(50);
        }, 1000);

        setTimeout(() => {
            setPercent(100);
            window.scrollTo(0, 0);
        }, 2200);
    }, []);


    return (
        <div className={classes.preloader}>
            <div className={classes['inner-container']}>
                <div className={classes.percent}>{percent}%</div>
                <div className={classes.lines}>
                    <div className={classes.line + ' ' + classes['line-to-top']}></div>
                    <div className={classes.line + ' ' + classes['line-to-right']}></div>
                </div>
            </div>
        </div>
    )
}