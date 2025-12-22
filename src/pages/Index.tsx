import HeroSection from "@/components/romantic/HeroSection";
import StorySection from "@/components/romantic/StorySection";
import TimelineSection from "@/components/romantic/TimelineSection";
import MomentsSection from "@/components/romantic/MomentsSection";
import GallerySection from "@/components/romantic/GallerySection";
import LetterSection from "@/components/romantic/LetterSection";
import Footer from "@/components/romantic/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <TimelineSection />
      <MomentsSection />
      <GallerySection />
      <LetterSection />
      <Footer />
    </main>
  );
};

export default Index;
