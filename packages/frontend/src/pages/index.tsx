import { motion, useScroll } from 'framer-motion';
import type { NextPage } from 'next';
import { useRef } from 'react';

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const squareVariants = {
    visible: { opacity: 1, scale: 2, transition: { duration: 1 }, rotate: -10 },
    hidden: { opacity: 0, scale: -10 },
  };

  return (
    <>
      <main>
        <motion.div
          className="progressBar"
          style={{ scaleX: scrollYProgress }}
        />
        <section>
          <h1>CLAN</h1>
          <h2>sports</h2>
        </section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={squareVariants}>
            <section>
              <h2>Where sports achievements live on forever.</h2>
              <p>Helping young athletes reach their full potential.</p>
            </section>
          </motion.div>
        </motion.div>
        <section>
          <h2>Helping young athletes reach their full potential.</h2>
        </section>
        <section>
          <h2>Making it easy to track their sports success.</h2>
        </section>
        <section>
          <h2>Record their journey to greatness.</h2>
        </section>
        <section>
          <h2>A lifetime of achievements, all in one place.</h2>
        </section>
      </main>
    </>
  );
};
export default Home;
