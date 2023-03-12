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
      <Parallax pages={4} className="main" ref={parallax}>
        {/* 
        <ParallaxLayer
          offset={5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Image
            src={'/chicas.svg'}
            style={{ height: '60%', width: '60%' }}
            width={100}
            height={200}
            alt="chicas"
          />
        </ParallaxLayer>


        <ParallaxLayer
          offset={8}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Image
            src={'/fans.svg'}
            style={{ height: '60%', width: '60%' }}
            width={100}
            height={200}
            alt="fans"
          />
        </ParallaxLayer> */}

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
          sticky={{ start: 2, end: 3 }}
        >
          <Image
            src={'/pistas.svg'}
            style={{ height: '100%', width: '100%' }}
            width={100}
            height={200}
            alt="pistas"
          />
        </ParallaxLayer>

        <ParallaxLayer
          className="section"
          offset={2}
          speed={1}
          style={{ zIndex: '900' }}
        >
          <h1 style={{ zIndex: '900' }}>
            Helping young athletes reach their full potential.
          </h1>
          <h2>and making it easy to track their sports success.</h2>
        </ParallaxLayer>
        <ParallaxLayer className="section" offset={3} speed={1}>
          <h1>Record their journey to greatness.</h1>
          <h2>A lifetime of achievements, all in one place.</h2>
        </ParallaxLayer>

        {/* 

        <ParallaxLayer
          className="section"
          offset={5}
          speed={1.5}
          sticky={{ start: 7, end: 8 }}
        >
          <h1>Helping young athletes reach their full potential.</h1>
          <p>Join us!</p>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={8}
          speed={1.5}
          sticky={{ start: 8, end: 10 }}
        ></ParallaxLayer> */}
      </Parallax>
    </>
  );
};
export default Home;
