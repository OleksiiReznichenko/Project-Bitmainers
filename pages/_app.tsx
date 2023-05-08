import '@/styles/mixins.scss'
import '@/styles/globals.scss'
import '@/styles/shared.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import {wrapper} from "@/store/index";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { baseActions } from '@/store/base';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

// gsap.registerPlugin(ScrollTrigger);

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  // IF TOUCHPAD DEVICE'S HEIGHT CHANGES - CHANGE BASE 100VH HEIGHT
  const appHeight = (): void => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  // ON WINDOW RESIZE
  const onResize = (): void => {
    appHeight();
  };

  useEffect(() => {
    // CLOSE NAVIGATION MENU ON ROUTE CHANGE
    dispatch(baseActions.closeMobileNavOpenedIndicator());

    // CHECK IS TOUCH DEVICE
    dispatch(baseActions.checkIsTouchDevice());
  }, [router]);

  useEffect(() => {
    // ADD WINDOW EVENT LISTENER
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default wrapper.withRedux(App)