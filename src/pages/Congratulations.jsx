import Congratulation from '../components/Congratulation';
import PageLayout from './PageLayout';

function Congratulations() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <Congratulation />
      </div>
    </PageLayout>
  );
}

export default Congratulations;
