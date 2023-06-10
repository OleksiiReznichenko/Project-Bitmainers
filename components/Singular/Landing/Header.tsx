import classes from '@/styles/componentsStyles/Landing/header.module.scss';
import { Power1, Power3, gsap } from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';


export default function Header() {
    let ctx = gsap.context(() => {})

    const initBoxesAnimation = (): void => {
        ctx = gsap.context(() => {
            gsap.to(`.${classes['box-1']}`, {duration: 2, rotate: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut})
            gsap.to(`.${classes['box-2']}`, {duration: 2, rotate: -35, repeat: -1, yoyo: true, ease: Power1.easeInOut})
            gsap.to(`.${classes['box-5']}`, {duration: 2, rotate: -25, repeat: -1, yoyo: true, ease: Power1.easeInOut})
            gsap.to(`.${classes['box-left']}`, {duration: 2, rotate: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut})
            gsap.to(`.${classes['box-right']}`, {duration: 2, rotate: -20, repeat: -1, yoyo: true, ease: Power1.easeInOut})
        });
    };

    useEffect(() => {
        initBoxesAnimation();
        return () => ctx.revert();
    }, []);


    return (
        <header className={classes.header + ' section'}>
            <div className={classes['appearing-info']}>
                <h2 className={classes.title}>
                    <span className={classes.medium}>Unique </span>
                    <span className={classes.big}>
                        <div className={classes['shadow-top']}></div>
                        <span> NFT </span>
                        <div className={classes['shadow-bottom']}></div>
                    </span>
                    <span className={classes.small}> Collection</span>
                </h2>
                <span className={classes.subtitle}>by Banana Labs</span>
            </div>
            <div className={classes['appearing-info-2']}>
                <h2 className={classes.title}>
                    <span className={classes.big}>Based </span>
                    <span className={classes.medium}>
                        <div className={classes['shadow-top']}></div>
                        <span> on TON </span>
                        <div className={classes['shadow-bottom']}></div>
                    </span>
                    <span className={classes.small}> blockchain</span>
                </h2>
                <span className={classes.subtitle}>by Banana Labs</span>
            </div>
            <div className={classes['scale-container']}>
                <Image quality={95}  src='/static/img/LandingPage/Header/headerBackground1.jpg' 
                alt='' fill className={classes.background} />
                <img src='/static/img/LandingPage/Header/cloudLeftLastSection.png' 
                alt='' className={classes['cloud-left-last']} />
                <img src='/static/img/LandingPage/Header/cloudRightLastSection.png' 
                alt='' className={classes['cloud-right-last']} />
                <div className={classes['appearing-info-3']}>
                    <h1 className={classes.title}>
                        Choose your <br className="mobile" />
                        <span className={classes.yellow}>
                            <img src="/static/svg/landingLeftParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-left']} />
                            hero
                            <img src="/static/svg/landingRightParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-right']} />
                        </span>
                    </h1>
                    <p className={classes.paragraph}>and start mining for <br className="mobile" /> NFTs and coins in the <br className="mobile" /> upcoming game</p>
                </div>
                <div className={classes['inner-container']}>
                    {/* <div className={classes.clouds}> */}
                        <img src='/static/img/LandingPage/Header/cloud1.png' 
                        alt='' className={classes['cloud-1']} />
                        <img src='/static/img/LandingPage/Header/cloud2.png' 
                        alt='' className={classes['cloud-2']} />
                        <img src='/static/img/LandingPage/Header/cloud3.png' 
                        alt='' className={classes['cloud-3']} />
                        <img src='/static/img/LandingPage/Header/cloud4.png' 
                        alt='' className={classes['cloud-4'] + ' desktop'} />
                        <img src='/static/img/LandingPage/Header/cloud5.png' 
                        alt='' className={classes['cloud-5'] + ' mobile'} />
                    {/* </div> */}
                    {/* <img src='/static/img/LandingPage/Header/cloudBackground.png' 
                    alt='' className={classes['cloud-background-left']} /> */}
                    <img src="/static/img/LandingPage/Header/box1.png" alt="" className={classes['box-1'] + ' desktop'} />
                    <img src="/static/img/LandingPage/Header/box2.png" alt="" className={classes['box-2'] + ' desktop'} />
                    <div className={classes.info}>
                        <span className={classes.subtitle}>more than just a pixel</span>
                        <h1 className={classes.title}>
                            <span className={classes['first-line']}>Ton </span>
                            <span className={classes['second-line']}> Min </span>
                            <span className={classes['third-line']}> Ers</span>
                        </h1>
                        <img src="/static/img/LandingPage/Header/box3.png" alt="" className={classes['box-left'] + ' desktop'} />
                        <img src="/static/img/LandingPage/Header/box4.png" alt="" className={classes['box-right'] + ' desktop'} />
                    </div>
                    <img src="/static/img/LandingPage/Header/box5.png" alt="" className={classes['box-5'] + ' desktop'} />
                    <div className={classes['characters-left']}>
                        <img src="/static/img/LandingPage/Header/headerCharacter1.png" alt="" className={classes['character-1']} />
                        {/* <img src="/static/img/LandingPage/Header/headerCharacter2.png" alt="" className={classes['character-2']} /> */}
                        <img src="/static/img/LandingPage/Header/headerCharacter2.png" alt="" className={classes['character-2']} />
                        <img src="/static/img/LandingPage/Header/headerCharacter3.png" alt="" className={classes['character-3']} />
                    </div>
                    <div className={classes['characters-right']}>
                        <img src="/static/img/LandingPage/Header/headerCharacter4.png" alt="" className={classes['character-4']} />
                        <img src="/static/img/LandingPage/Header/headerCharacter5.png" alt="" className={classes['character-5']} />
                    </div>
                </div>
            </div>
        </header>
    )
};