import TransitionWrapper from '@/components/Singular/App/TransitionWrapper';
import classes from '@/styles/pagesStyles/error.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

export default function NotFoundPage() {
    const [isMobileBackground, setIsMobileBackground] = useState<boolean>(false);

    // DOM ELEMENTS
    const character = useRef<HTMLImageElement>(null);

    // ON WINDOW RESIZE
    const checkIsMobileBackground = (): void => {
        if (window.innerWidth > 750) {
            setIsMobileBackground(false);
        } else {
            setIsMobileBackground(true);
        }
    };

    useEffect(() => {
        // CHARACTER ANIMATION
        gsap.fromTo(character.current, {duration: .01, scaleX: 1},
            {duration: .001, scaleX: -1, yoyo: true, repeat: -1, repeatDelay: 1.5});

        checkIsMobileBackground();

        // ADD WINDOW EVENT LISTENER
        window.addEventListener('resize', checkIsMobileBackground);
    }, []);

    return (
        <TransitionWrapper>
            <div className={classes['page-error']}>
                <div className={classes.info}>
                    <h1 className={classes.title}>
                        <span className={classes.yellow}>Nothing </span>
                        <span className={classes.white}> to mine </span>
                        <span className={classes['white-small']}> here yet</span>
                    </h1>
                    <p className={classes.paragraph}>We’re probably working on this page</p>
                    <Link href='/' className={'btn-yellow ' + classes.button}>Home</Link>
                </div>
                <div className={classes['character-container']}>
                    <Image quality={95} src="/static/img/ErrorPage/character.png" alt="" 
                    ref={character}
                    fill
                    className={classes.character} />
                </div>
                <div className={classes['grass-container']}>
                    <Image quality={95} src="/static/img/ErrorPage/grass.png" alt="" 
                    fill
                    className={classes.grass} />
                </div>
                <div className={classes['background-container']}>
                    {!isMobileBackground && 
                    <Image quality={95} src="/static/img/ErrorPage/background.jpg" alt="" 
                    fill
                    className={classes.background} />}
                    {isMobileBackground && 
                    <Image quality={95} src="/static/img/ErrorPage/backgroundMobile.jpg" alt="" 
                    fill
                    className={classes.background} />}
                </div>
            </div>
        </TransitionWrapper>
    )
}