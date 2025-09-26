import End from '../components/End';
import PageLayout from './PageLayout';

function Ended() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <End />
      </div>
    </PageLayout>
  );
}

export default Ended;
