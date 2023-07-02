import Footer from '@/components/Singular/App/Footer';
import TransitionWrapper from '@/components/Singular/App/TransitionWrapper';
import { slideFunctionsActions } from '@/store/slideFunctions';
import classes from '@/styles/pagesStyles/faq.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type CurrentSectionId = 'accountWallet' | 'gameChat' | 'fairplaySecurity';

interface CurrentSection {
    id: CurrentSectionId;
    text: string;
}

interface FaqQuestion {
    id: string;
    question: string;
    answer: string;
}

interface FaqQuestions {
    id: CurrentSectionId;
    questions: FaqQuestion[];
}

interface FaqTitleObj {
    white: string;
    yellow: string;
}

interface FaqTitle {
    id: CurrentSectionId;
    title: FaqTitleObj;
}

const currentSections: CurrentSection[] = [
    {
        id: 'accountWallet',
        text: 'Account & Wallet'
    },
    {
        id: 'gameChat',
        text: 'Game & Chat'
    },
    {
        id: 'fairplaySecurity',
        text: 'Fairplay & Security'
    }
];

const faqQuestions: FaqQuestions[] = [
    {
        id: 'accountWallet',
        questions: [
            {
                id: 'accountWalletQ1',
                question: 'How do i make an account?',
                answer: 'To make an account, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'accountWalletQ2',
                question: 'How do i make an account?',
                answer: 'To make an account, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'accountWalletQ3',
                question: 'How do i make an account?',
                answer: 'To make an account, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'accountWalletQ4',
                question: 'How do i make an account?',
                answer: 'To make an account, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'accountWalletQ5',
                question: 'How do i make an account?',
                answer: 'To make an account, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
        ]
    },
    {
        id: 'gameChat',
        questions: [
            {
                id: 'gameChatQ1',
                question: 'How do i use a game chat?',
                answer: 'To use a game chat, click the register button on the top right of the screen. Making a game chat is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'gameChatQ2',
                question: 'How do i use a game chat?',
                answer: 'To use a game chat, click the register button on the top right of the screen. Making a game chat is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'gameChatQ3',
                question: 'How do i use a game chat?',
                answer: 'To use a game chat, click the register button on the top right of the screen. Making a game chat is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'gameChatQ4',
                question: 'How do i use a game chat?',
                answer: 'To use a game chat, click the register button on the top right of the screen. Making a game chat is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'gameChatQ5',
                question: 'How do i use a game chat?',
                answer: 'To use a game chat, click the register button on the top right of the screen. Making a game chat is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
        ]
    },
    {
        id: 'fairplaySecurity',
        questions: [
            {
                id: 'fairplaySecurityQ1',
                question: 'How does fairplay security works?',
                answer: 'Fairplay security works like that, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'fairplaySecurityQ2',
                question: 'How does fairplay security works?',
                answer: 'Fairplay security works like that, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'fairplaySecurityQ3',
                question: 'How does fairplay security works?',
                answer: 'Fairplay security works like that, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'fairplaySecurityQ4',
                question: 'How does fairplay security works?',
                answer: 'Fairplay security works like that, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
            {
                id: 'fairplaySecurityQ5',
                question: 'How does fairplay security works?',
                answer: 'Fairplay security works like that, click the register button on the top right of the screen. Making an account is super simple, all you need is a username and a good password, that’s it! For users who don’t care so much about their anonymity, we also support social logins via Google and Telegram',
            },
        ]
    },
];

const faqTitles: FaqTitle[] = [
    {
        id: 'accountWallet',
        title: {
            white: 'Account & ',
            yellow: ' Wallet'
        }
    },
    {
        id: 'gameChat',
        title: {
            white: 'Game & ',
            yellow: ' Chat'
        }
    },
    {
        id: 'fairplaySecurity',
        title: {
            white: 'Fairplay & ',
            yellow: ' Security'
        }
    },
]

export default function FaqPage() {
    const dispatch = useDispatch();
    const [currentSection, setCurrentSection] = useState<CurrentSectionId>('accountWallet');
    const [currentQuestions, setCurrentQuestions] = useState<FaqQuestion[]>(faqQuestions[0].questions);
    const [currentTitle, setCurrentTitle] = useState<FaqTitleObj>(faqTitles[0].title);

    // CHANGE OF QUESTIONS BY TOPICS
    useEffect(() => {
        const questions = faqQuestions.find(el => {
            return el.id === currentSection;
        })?.questions;
        if (questions) {
            setCurrentQuestions(questions);
        }
        
        const title = faqTitles.find(el => {
            return el.id === currentSection;
        })?.title;
        if (title) {
            setCurrentTitle(title);
        }

    }, [currentSection]);

    // TOGGLE QUESTION DESCRIPTION EVENT
    const toggleEvent = (event: React.MouseEvent): void => {
        const target = event.target as HTMLElement;
        const parent = target?.closest('.toggle-container');
        const descriptionContainer = parent?.querySelector('.description-container') as HTMLElement;
        
        if (parent && descriptionContainer && !parent.classList.contains('animating')) {
            const arrow = parent?.querySelector(`.${classes['arrow']}`);
    
            let timeoutTime = 700;
    
            dispatch(slideFunctionsActions.slideToggle({
                target: descriptionContainer,
            }));
            
            if (arrow) {
                arrow.classList.toggle(classes['arrow-active']);
            }
    
            parent.classList.add('animating');
    
            setTimeout(() => {
                parent.classList.remove('animating');
            }, timeoutTime);
        }
    };


    return (
        <TransitionWrapper>
            <div className={classes['page-faq']}>
                <div className={classes['inner-container']}>
                    <div className={classes.left}>
                        <span className={classes.subtitle}>FAQ</span>
                        <ul className={classes['list-sections']}>
                            {currentSections.map(el => (
                                <li key={el.id}
                                className={classes.item}>
                                    <button
                                    onClick={setCurrentSection.bind(null, el.id)}
                                    className={classes['button-section'] + ' ' + 
                                    (currentSection === el.id ? classes.active : '')}>
                                        <div className={classes['check-mark']}></div>
                                        <span>{el.text}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.right}>
                        <h1 className={classes.title}>
                            {currentTitle.white} 
                            <span className={classes.yellow}>
                                <img src="/static/svg/faqLeftParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-left']} />
                                {currentTitle.yellow}
                                <img src="/static/svg/faqRightParenthesis.svg" alt="" className={classes['parenthesis'] + ' ' + classes['parenthesis-right']} />
                            </span>
                        </h1>
                        <div onClick={toggleEvent} className={classes.questions}>
                            {currentQuestions.map(el => (
                                <div key={el.id} className={classes.question + ' toggle-container'}>
                                    <div className={classes['title-container'] + ' title-container'}>
                                        <h3 className={classes['title-question']}>{el.question}</h3>
                                        <svg className={classes.arrow} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.59042 10.144L0.982422 1.53705L2.39642 0.123047L11.0034 8.72905V1.14405H13.0034V12.144H2.00342V10.144H9.59042Z" fill="#353535"/>
                                        </svg>
                                    </div>
                                    <div className={classes['description-container'] + ' description-container'}>
                                        <div className={classes.answer}>{el.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </TransitionWrapper>
    )
};