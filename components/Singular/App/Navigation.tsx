import { baseActions, selectMobileNavOpenedIndicator } from '@/store/base';
import classes from '@/styles/componentsStyles/navigation.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Navigation() {
    const dispatch = useDispatch();
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);

    const toggleButtonClasses = 'mobile ' + classes['toggle-menu-button'] + ' ' + (mobileNavOpenedIndicator ? classes['active'] : '');

    const toggleNavMenu = (): void => {
        dispatch(baseActions.toggleMobileNavOpenedIndicator());
    };

    return (
        <nav className={classes.navigation}>
            <div className={classes['inner-container']}>
                <div className={classes.left}>
                    <button onClick={toggleNavMenu} className={toggleButtonClasses}>
                        <div className={classes.line + ' ' + classes['line-1']}></div>
                        <div className={classes.line + ' ' + classes['line-2']}></div>
                        <div className={classes.line + ' ' + classes['line-3']}></div>
                    </button>
                    <Link href='/' className={classes['logo-link']}>
                        <img src="/static/img/logo.png" alt="" className={classes.logo} />
                    </Link>
                    <ul className={classes.list}>
                        <li className={classes.item + ' desktop'}>
                            <Link href='/' className={classes.link}>Game</Link>
                        </li>
                        <li className={classes.item + ' desktop'}>
                            <Link href='/faq' className={classes.link}>Faq</Link>
                        </li>
                    </ul>
                </div>
                <a href="#" target='_blank' className={'btn-yellow desktop ' + classes['button-link']}>Buy on Getgems</a>
            </div>
        </nav>
    )
}