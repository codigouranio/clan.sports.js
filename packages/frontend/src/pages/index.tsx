import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useScroll } from 'framer-motion';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const squareVariants = {
    initial: { scale: 3 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2 }, rotate: -10 },
    hidden: { opacity: 0, scale: -1 },
  };

  return (
    <Parallax pages={9} className="main">
      <ParallaxLayer className="logo">
        <h1>CLAN</h1>
        <h2>sports</h2>
      </ParallaxLayer>
      <ParallaxLayer
        className="section"
        offset={1}
        speed={1.5}
        sticky={{ start: 1, end: 2 }}
      >
        <h2>Where sports achievements live on forever.</h2>
      </ParallaxLayer>
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
  );
};
export default Home;
