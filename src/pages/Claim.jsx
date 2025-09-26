import ClaimMFRENS from '../components/ClaimMFRENS';
import PageLayout from './PageLayout';

function Claim() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <ClaimMFRENS />
      </div>
    </PageLayout>
  );
}

export default Claim;
