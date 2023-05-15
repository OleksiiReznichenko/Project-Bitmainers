import { baseActions, selectMobileNavOpenedIndicator } from '@/store/base';
import classes from '@/styles/componentsStyles/navigationMenu.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function NavigationMenu() {
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);
    // const counter2 = useSelector((state: any) => state.counter.counter);

    const navigationMenuClasses = 'mobile ' + classes['navigation-menu'] + ' ' + (!mobileNavOpenedIndicator ? classes['menu-closed'] : '');


    return (
        <div className={navigationMenuClasses}>
            <div className={classes['inner-container']}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <Link href='/' className={classes.link}>Home</Link>
                    </li>
                    <li className={classes.item}>
                        <Link href='/' className={classes.link}>Game</Link>
                    </li>
                    <li className={classes.item}>
                        <Link href='/faq' className={classes.link}>Faq</Link>
                    </li>
                </ul>
                <a href="#" className={'btn-yellow ' + classes['button-link']}>Buy on Getgems</a>
            </div>
        </div>
    )
}