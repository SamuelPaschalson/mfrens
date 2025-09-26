import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MonCard from '../components/MonCard';
import MonFrens from '../components/MonFrens';
import Tokenomics from '../components/Tokenomics';
import PageLayout from './PageLayout';

function Home() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full">
        <Hero />
        <MonFrens />
        <Tokenomics />
        <MonCard />
      </div>
    </PageLayout>
  );
}

export default Home;
