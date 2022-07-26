import Achievements from '../components/Achievements/Achievements';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { useThree } from '../hooks/useThree';
import ThreeApp from '../threejs/ThreeApp';

const Home = () => {
  const canvas = useThree(ThreeApp);
  return (
    <Layout>
      <Section grid>
        <Hero />
        <div ref={canvas} style={{ height: '50vh' }} />
      </Section>
      <Technologies />
      <Timeline />
      <Projects />
      <Achievements />
    </Layout>
  );
};

export default Home;
