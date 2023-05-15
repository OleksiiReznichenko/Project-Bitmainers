import { selectSectionChooseAnimationStarted } from '@/store/base';
import classes from '@/styles/componentsStyles/Landing/sectionForest.module.scss';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

type ActiveCharacter = 'red' | 'yellow' | 'green';

export default function SectionForest() {
    

    return (
        <section className={classes['section-forest'] + ' section'}>
            <div className={classes['background-stars-container']}>
                <Image src="/static/img/LandingPage/SectionForest/backgroundStars.png" alt="" 
                // width={348}
                // height={448}
                fill
                className={classes['background-stars']} />
            </div>
            <div className={classes['scale-container']}>
                <div className={classes['trees-background']}>
                    <div className={classes['trees-front-container']}>
                        <Image src="/static/img/LandingPage/SectionForest/frontTrees.png" alt="" 
                        // width={348}
                        // height={448}
                        fill
                        className={classes['trees-front']} />
                    </div>
                    <div className={classes['trees-back-container']}>
                        <Image src="/static/img/LandingPage/SectionForest/backgroundTrees.png" alt="" 
                        // width={348}
                        // height={448}
                        fill
                        className={classes['trees-back']} />
                    </div>
                    {/* <img src="/static/img/LandingPage/SectionForest/cristal.png" alt="" 
                    className={classes.cristal} /> */}
                </div>
                {/* <div className={classes['grass-container']}>
                    <img src="/static/img/LandingPage/SectionForest/grass.png" alt="" 
                    className={classes.grass} />
                </div> */}
                {/* <div className={classes['miner-container']}>
                    <img src="/static/img/LandingPage/SectionForest/characterMiner.png" alt="" 
                    className={classes.miner} />
                </div> */}
            </div>
            <div className={classes['miner-container']}>
                <img src="/static/img/LandingPage/SectionForest/characterMiner.png" alt="" 
                className={classes.miner} />
            </div>
            <div className={classes['grass-container']}>
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
        </section>
    )
};