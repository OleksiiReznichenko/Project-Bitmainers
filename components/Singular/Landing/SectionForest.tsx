import { selectSectionChooseAnimationStarted } from '@/store/base';
import classes from '@/styles/componentsStyles/Landing/sectionForest.module.scss';
import Image from 'next/image';

export default function SectionForest() {
    

    return (
        <section className={classes['section-forest'] + ' section'}>
            <div className={classes['background-stars-container']}>
                <Image quality={95} priority={true} src="/static/img/LandingPage/SectionForest/backgroundStars.png" alt="" 
                fill
                className={classes['background-stars']} />
            </div>
            <div className={classes['scale-container']}>
                <div className={classes['trees-background']}>
                    <div className={classes['trees-front-container']}>
                        <Image quality={95} priority={true} src="/static/img/LandingPage/SectionForest/frontTrees.png" alt="" 
                        fill
                        className={classes['trees-front']} />
                    </div>
                    <div className={classes['trees-back-container']}>
                        <Image quality={95} priority={true} src="/static/img/LandingPage/SectionForest/backgroundTrees.png" alt="" 
                        fill
                        className={classes['trees-back']} />
                    </div>
                </div>
            </div>
            <div className={classes['outher-scale-container-2']}>
                <div className={classes['scale-container-2']}>
                    <div className={classes['trees-background-2']}>
                        <div className={classes['trees-front-container']}>
                            <Image quality={95} priority={true} src="/static/img/LandingPage/SectionForest/frontTrees.png" alt="" 
                            fill
                            className={classes['trees-front']} />
                        </div>
                        <div className={classes['trees-back-container']}>
                            <Image quality={95} priority={true} src="/static/img/LandingPage/SectionForest/backgroundTrees.png" alt="" 
                            fill
                            className={classes['trees-back']} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['character-container'] + ' ' + classes['yellow-character-container']}>
                <img src="/static/img/LandingPage/SectionForest/characterMiner.png" alt="" 
                className={classes.character} />
            </div>
            <div className={classes['character-container'] + ' ' + classes['red-character-container']}>
                <img src="/static/img/LandingPage/SectionForest/characterRed.png" alt="" 
                className={classes.character} />
            </div>
            <div className={classes['character-container'] + ' ' + classes['green-character-container']}>
                <img src="/static/img/LandingPage/SectionForest/characterGreen.png" alt="" 
                className={classes.character} />
            </div>
            <div className={classes['grass-container']}>
                <img src="/static/img/LandingPage/SectionForest/grass.png" alt="" 
                className={classes.grass} />
            </div>
            <div className={classes['grass-container-2']}>
                <img src="/static/img/LandingPage/SectionForest/grass.png" alt="" 
                className={classes.grass} />
            </div>
            <div className={classes['crystal-container']}>
                <img src="/static/img/LandingPage/SectionForest/cristal.png" alt="" 
                className={classes.crystal} />
            </div>
            <div className={classes['main-tube-container']}>
                <img src="/static/img/LandingPage/SectionForest/tube.png" alt="" 
                className={classes['main-tube']} />
            </div>
            <div className={classes['tubes-container']}>
                <div className={classes['tube-container'] + ' ' + classes['tube-container-1']}>
                    <img src="/static/img/LandingPage/SectionForest/tube.png" alt="" className={classes.tube} />
                    <img src="/static/img/LandingPage/SectionForest/tubeCharacter1.png" alt="" className={classes.character} />
                </div>
                <div className={classes['tube-container']}>
                    <img src="/static/img/LandingPage/SectionForest/tube.png" alt="" className={classes.tube} />
                    <img src="/static/img/LandingPage/SectionForest/tubeCharacter2.png" alt="" className={classes.character} />
                </div>
                <div className={classes['tube-container']}>
                    <img src="/static/img/LandingPage/SectionForest/tube.png" alt="" className={classes.tube} />
                    <img src="/static/img/LandingPage/SectionForest/tubeCharacter3.png" alt="" className={classes.character} />
                </div>
            </div>
            <div className={classes['appearing-info']}>
                <h1 className={classes.title}>
                    <span className={classes.white}>Mine and </span>
                    <span className={classes.yellow}>
                        <img src="/static/svg/landingLeftParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-left']} />
                        earn
                        <img src="/static/svg/landingRightParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-right']} />
                    </span>
                </h1>
                <p className={classes.paragraph}>Decent rewards every day for our best players</p>
            </div>
            <div className={classes['appearing-info-2']}>
                <div className={classes['appearing-info-2-container']}>
                    <span className={classes.subtitle}>Easy to</span>
                    <a href="#" className={classes['button-start']}>
                        <img src="/static/svg/LandingPage/buttonBackground.svg" alt="" className={classes['button-background']} />
                        <span>Start</span>
                    </a>
                </div>
            </div>
            <div className={classes['playing-machine-container']}>
                <Image quality={95}  src="/static/img/LandingPage/SectionRocks/playingMachine.png" alt="" 
                fill
                className={classes['playing-machine']} />
            </div>
            <div className={classes['appearing-info-3']}>
                <h1 className={classes.title}>
                    <span className={classes.white}>New Generation </span>
                    <span className={classes.yellow}>
                        <img src="/static/svg/landingLeftParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-left']} />
                        NFT Game
                        <img src="/static/svg/landingRightParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-right']} />
                    </span>
                </h1>
                <p className={classes.paragraph}>No stupid grind. Mere but exciting.</p>
            </div>
            <div className={classes['banana-fire-container-1']}>
                <img src="/static/img/LandingPage/SectionRocks/bananaFire.png" alt="" className={classes['banana-fire']} />
            </div>
            <div className={classes['banana-fire-container-2']}>
                <img src="/static/img/LandingPage/SectionRocks/bananaFire.png" alt="" className={classes['banana-fire']} />
            </div>
        </section>
    )
};