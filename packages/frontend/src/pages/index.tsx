import { motion, useScroll } from 'framer-motion';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
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
        <section>
          <h2>Where sports achievements live on forever.</h2>
          <p>Helping young athletes reach their full potential.</p>
        </section>
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
