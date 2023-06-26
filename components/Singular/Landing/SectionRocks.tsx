import { selectSectionChooseAnimationStarted } from '@/store/base';
import classes from '@/styles/componentsStyles/Landing/sectionRocks.module.scss';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function SectionRocks() {
    

    return (
        <section className={classes['section-rocks'] + ' section'}>
            <div className={classes['translate-cotainer']}>
                <div className={classes['roadmap-line']}>
                    <div className={classes['roadmap-sign-container']}>
                        <img src="/static/img/LandingPage/SectionRocks/roadmap.png" alt="" className={classes['roadmap-sign']} />
                    </div>
                    <div className={classes['crystal-container'] + ' ' + classes['crystal-container-1']}>
                        <span className={classes.subtitle}>Collection created</span>
                        <img src="/static/img/LandingPage/SectionRocks/crystal.png" alt="" className={classes.crystal} />
                        <img src="/static/img/LandingPage/SectionRocks/crystalStone.png" alt="" className={classes['crystal-stone']} />
                    </div>
                    <div className={classes['character-container']}>
                        <img src="/static/img/LandingPage/SectionForest/characterMiner.png" alt="" className={classes.character} />
                    </div>
                    <div className={classes['crystal-container'] + ' ' + classes['crystal-container-2']}>
                        <span className={classes.subtitle}>Minting system developed</span>
                        <img src="/static/img/LandingPage/SectionRocks/crystal.png" alt="" className={classes.crystal} />
                        <img src="/static/img/LandingPage/SectionRocks/crystalStone.png" alt="" className={classes['crystal-stone']} />
                    </div>
                    <img src="/static/img/LandingPage/SectionRocks/rocksLine.png" alt="" className={classes['rocks-line']} />
                </div>
                <div className={classes.cave}>
                    <div className={classes['scale-container']}>
                        <img src="/static/img/LandingPage/SectionRocks/rock1.png" alt="" className={classes['rock-1']} />
                        <div className={classes['rocks-top-container']}>
                            <Image quality={95} priority={true} src='/static/img/LandingPage/SectionRocks/rockTop.png' alt=''
                            fill
                            className={classes['rocks-top']} />
                        </div>
                        <div className={classes['background-rocks-container']}>
                            <Image quality={95} priority={true} src='/static/img/LandingPage/SectionRocks/backgroundRocks.png' alt=''
                            fill
                            className={classes['background-rocks']} />
                        </div>
                        <div className={classes['rocks-bottom-container']}>
                            <Image quality={95} priority={true} src='/static/img/LandingPage/SectionRocks/rockBottom.png' alt=''
                            fill
                            className={classes['rocks-bottom']} />
                        </div>
                    </div>
                    <div className={classes['crystal-container'] + ' ' + classes['crystal-container-1']}>
                        <span className={classes.subtitle}>Mining game development</span>
                        <img src="/static/img/LandingPage/SectionRocks/crystal.png" alt="" className={classes.crystal} />
                    </div>
                    <div className={classes['crystal-container'] + ' ' + classes['crystal-container-2']}>
                        <img src="/static/img/LandingPage/SectionRocks/crystal.png" alt="" className={classes.crystal} />
                        <span className={classes.subtitle}>Reward system development</span>
                    </div>
                </div>
            </div>
            <div className={classes['last-block']}>
                <div className={classes.info}>
                    <h2 className={classes.title}>Are you ready?</h2>
                    <p className={classes.description}>Miner owners will have a chance <br className='desktop' /> to Get coins, NFTs from other <br className='desktop' /> collections or one of 10.000 BitMiners!</p>
                    <a href="#" target='_blank' className={'btn-yellow ' + classes['button-link']}>Buy on Getgems</a>
                </div>
                <img src="/static/img/LandingPage/SectionRocks/rockTopLastBlock.png" alt="" className={classes['rock-top']} />
                <img src="/static/img/LandingPage/SectionRocks/rockBottomLastBlock.png" alt="" className={classes['rock-bottom']} />
            </div>
        </section>
    )
};