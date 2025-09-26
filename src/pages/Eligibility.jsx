import InEligible from '../components/InEligible';
import PageLayout from './PageLayout';

function Eligibility() {
  return (
    <PageLayout>
      <div className="justify-center flex flex-col h-full w-full px-[5rem] items-center">
        <InEligible />
      </div>
    </PageLayout>
  );
}

export default Eligibility;
