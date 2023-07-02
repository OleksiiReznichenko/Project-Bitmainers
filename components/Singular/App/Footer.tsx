import classes from '@/styles/componentsStyles/footer.module.scss';
import Link from 'next/link';


export default function Footer() {

    return (
        <footer className={classes.footer}>
            <div className={classes['inner-container']}>
                <div className={classes.left + ' desktop'}>
                    <Link href='/' className={classes['logo-link']}>
                        <img src="/static/img/logo.png" alt="" className={classes.logo} />
                    </Link>
                    <p className={classes['rights-reserved']}>Copyright © 2022 BitMiners. All rights reserved</p>
                </div>
                <div className={classes.center}>
                    <ul className={classes.list}>
                        <li className={classes.item}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={classes.item}>
                            <Link href='/'>Game</Link>
                        </li>
                        <li className={classes.item}>
                            <Link href='/faq'>Faq</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.right}>
                    <Link href='/' className={classes['logo-link'] + ' mobile'}>
                        <img src="/static/img/logo.png" alt="" className={classes.logo} />
                    </Link>
                    <ul className={classes['list-socials']}>
                        <li className={classes['item-social']}>
                            <a href="#" className={classes['item-social__link']}>
                                <img src="/static/img/footerSocialBackground.png" alt="" className={classes['item-social__background']} />
                                <img src="/static/svg/getgems.svg" alt="" className={classes['item-social__icon']} />
                            </a>
                        </li>
                        <li className={classes['item-social']}>
                            <a href="#" className={classes['item-social__link']}>
                                <img src="/static/img/footerSocialBackground.png" alt="" className={classes['item-social__background']} />
                                <img src="/static/svg/telegram.svg" alt="" className={classes['item-social__icon']} />
                            </a>
                        </li>
                        <li className={classes['item-social']}>
                            <a href="#" className={classes['item-social__link']}>
                                <img src="/static/img/footerSocialBackground.png" alt="" className={classes['item-social__background']} />
                                <img src="/static/svg/discord.svg" alt="" className={classes['item-social__icon']} />
                            </a>
                        </li>
                    </ul>
                    <p className={classes['rights-reserved'] + ' mobile'}>Copyright © 2022 BitMiners. All rights reserved</p>
                    <a href="https://heavens.pro/" target="_blank" className={classes['heavens-link']}>
                        <img src="/static/svg/heavensLogo.svg" alt="" className={classes['heavens-logo']} />
                    </a>
                </div>
            </div>
        </footer>
    )
}