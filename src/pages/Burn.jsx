import BurnFrens from '../components/BurnFrens';
import PageLayout from './PageLayout';

function Burn() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <BurnFrens />
      </div>
    </PageLayout>
  );
}

export default Burn;
