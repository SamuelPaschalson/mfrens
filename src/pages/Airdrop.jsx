import ComingSoon from '../components/ComingSoon';
import PageLayout from './PageLayout';

function Airdrop() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <ComingSoon />
      </div>
    </PageLayout>
  );
}

export default Airdrop;
