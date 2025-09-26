import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PageLayout({ children }) {
  return (
    <div className="w-full min-h-screen relative flex flex-col bg-[#5F2AC5] text-white">
      {/**NAVBAR */}
      <div className="w-full h-[92px] z-10">
        <Navbar />
      </div>
      {children}
      {/* <div className=""></div> */}

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
