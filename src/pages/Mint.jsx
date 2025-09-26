import MintMFRENS from '../components/MintMFRENS';
import PageLayout from './PageLayout';

function Mint() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <MintMFRENS />
      </div>
    </PageLayout>
  );
}

export default Mint;
