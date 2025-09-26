import Bought from '../components/Bought';
import PageLayout from './PageLayout';

function Buy() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <Bought />
      </div>
    </PageLayout>
  );
}

export default Buy;
