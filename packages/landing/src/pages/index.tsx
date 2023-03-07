import { Button, ButtonGroup } from '@chakra-ui/react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import {
  motion,
  transform,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import * as _ from 'lodash';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null);

  const scrollYProgress = useMotionValue(0);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const onScroll = () => {
    if (!parallax.current || !parallax.current) return;
    const t = Number(parallax.current.current / parallax.current.space);
    scrollYProgress.set(t);
  };

  useEffect(() => {
    if (!parallax.current || !parallax.current.container) return;
    parallax.current.container.current.onclick = () => console.log('hola');
    parallax.current.container.current.onscroll = onScroll;
  });

  return (
    <>
      <Parallax pages={10} className="main" ref={parallax}>
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
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            style={{ opacity, scale }}
            transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
          >
            <h2>sports</h2>
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={1}
          speed={1.5}
          sticky={{ start: 1, end: 2 }}
        >
          <h1>Where sports achievements live on forever.</h1>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={2}
          speed={1.5}
          sticky={{ start: 3, end: 4 }}
        >
          <h1>Making it easy to track their sports success.</h1>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={3}
          speed={1.5}
          sticky={{ start: 5, end: 6 }}
        >
          <h1>Record their journey to greatness.</h1>
          <p>A lifetime of achievements, all in one place.</p>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={5}
          speed={1.5}
          sticky={{ start: 7, end: 8 }}
        >
          <h1>Helping young athletes reach their full potential.</h1>
          <p>Join us!</p>
          <p>About</p>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={8}
          speed={1.5}
          sticky={{ start: 8, end: 10 }}
        ></ParallaxLayer>
      </Parallax>
    </>
  );
};
export default Home;
