import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoursesPreview } from "@/components/CoursesPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <CoursesPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
