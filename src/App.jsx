import InvitationOverlay from './component/InvitationOverlay';
import CoupleSection from './section/CoupleSection';
import DateSection from './section/DateSection';
import GallerySection from './section/GallerySection';
import GiftSection from './section/GiftSection';
import HeroSection from './section/HeroSection';
import JoinSection from './section/JoinSection';
import LoveStorySection from './section/LoveStorySection';
import WishSection from './section/WishSection';

function App() {
  return (
    <>
      <InvitationOverlay />
      <main>
        <HeroSection />
        <CoupleSection />
        <DateSection />
        <LoveStorySection />
        <WishSection />
        <GiftSection />
        <GallerySection />
        <JoinSection />
      </main>
    </>
  );
}

export default App;
