import { Button, ButtonGroup } from '@chakra-ui/react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useScroll } from 'framer-motion';
import * as _ from 'lodash';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null);

  const [scroll, setScroll] = useState('');

  const onScroll = () => {
    if (!parallax.current || !parallax.current) return;
    const t = String(parallax.current.current / parallax.current.space);
    setScroll(t);
  };
  // console.log(parallax.current.current / parallax.current.space);

  useEffect(() => {
    console.log('effect');
    if (!parallax.current || !parallax.current.container) return;
    console.log(parallax.current);
    parallax.current.container.current.onclick = () => console.log('hola');
    // parallax.current.container.current.onscroll = () => console.log('hola');
    parallax.current.container.current.onscroll = onScroll;
    // onScroll
    // console.log(parallax.current.container.onscroll);
    // console.log(parallax.current.container);
  });

  const squareVariants = {
    initial: { scale: 3 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2 }, rotate: -10 },
    hidden: { opacity: 0, scale: -1 },
  };

  return (
    <>
      <Parallax pages={9} className="main" ref={parallax}>
        <ParallaxLayer className="logo">
          <motion.div
            initial={{ scale: 10, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ scale: 1 + Number(scroll) * 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <h1>CLAN</h1>
          </motion.div>
          <motion.div
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
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
          <h2>Where sports achievements live on forever.</h2>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 8 }}>{scroll}</ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={2}
          speed={1.5}
          sticky={{ start: 3, end: 4 }}
        >
          <h2>Making it easy to track their sports success.</h2>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={3}
          sticky={{ start: 5, end: 6 }}
        >
          <h2>Record their journey to greatness.</h2>
          <p>A lifetime of achievements, all in one place.</p>
        </ParallaxLayer>
        <ParallaxLayer
          className="section"
          offset={5}
          speed={1.5}
          sticky={{ start: 7, end: 8 }}
        >
          <p>Helping young athletes reach their full potential.</p>
        </ParallaxLayer>
        <ParallaxLayer offset={8} className="section">
          <p>Join us!</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
export default Home;
