import { CheckIcon } from '@chakra-ui/icons';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import * as _ from 'lodash';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null);
  // const buttonRegister = createRef<HTMLButtonElement>();
  const [buttonRegister, setButtonRegister] = useState<HTMLButtonElement>();

  const scrollYProgress = useMotionValue(0);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const onScroll = () => {
    if (!parallax.current || !parallax.current) return;
    const t = Number(parallax.current.current / parallax.current.space);
    scrollYProgress.set(t);
  };

  useEffect(() => {
    if (
      parallax?.current?.container?.current &&
      !parallax?.current?.container?.current?.onScroll
    ) {
      parallax.current.container.current.onscroll = onScroll;
    }

    buttonRegister &&
      buttonRegister.addEventListener('click', (event: any) => {
        buttonRegister.classList.add('registered');
      });
  });

  return (
    <>
      <Parallax pages={5} className="main" ref={parallax}>
        <ParallaxLayer className="logo" offset={0}>
          <motion.div
            initial={{ scale: 10, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ opacity, scale }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <h1>CLAN</h1>
          </motion.div>
          <motion.div
            initial={{ translateX: -1000, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ opacity, scale }}
            transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
          >
            <h2>sports</h2>
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Image
            src={'/primera.svg'}
            style={{ height: '100%', width: '100%' }}
            width={100}
            height={200}
            alt="primera"
          />
        </ParallaxLayer>

        <ParallaxLayer
          className="section"
          offset={1}
          speed={1}
          sticky={{ start: 1, end: 1 }}
        >
          <h1>Where sports achievements live on forever.</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
          sticky={{ start: 2, end: 4 }}
          className="section-image"
        >
          <Image
            src={'/pistas.svg'}
            style={{ height: '100%', width: '100%', opacity: 0.6 }}
            width={100}
            height={200}
            alt="pistas"
          />
        </ParallaxLayer>

        <ParallaxLayer className="section" offset={2} speed={1}>
          <h1>Helping young athletes reach their full potential.</h1>
          <h2>and making it easy to track their sports success.</h2>
        </ParallaxLayer>
        <ParallaxLayer className="section" offset={3} speed={0.5}>
          <h1>Record their journey to greatness.</h1>
          <h2>A lifetime of achievements, all in one place.</h2>
        </ParallaxLayer>
        <ParallaxLayer className="section" offset={4} speed={1.25}>
          <div className="center">
            <h1 className="join-us">Join us!</h1>
          </div>
          <div className="form-line">
            <div className="input-container">
              <input
                placeholder="Your email"
                type="text"
                autoComplete="email"
              />{' '}
              <button
                className="btn btn-register"
                ref={_.debounce(
                  (ref: any) => ref && setButtonRegister(ref),
                  2000,
                  { leading: false },
                )}
              >
                <span className="btn-content btn-content--default">
                  Register
                </span>
                <span className="btn-icon btn--icon-registered">
                  <CheckIcon />
                </span>
              </button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
export default Home;
