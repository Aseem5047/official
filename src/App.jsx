import React from "react";
import "./index.css";
import {
  Consultation,
  CreateWebinar,
  Home,
  PiracyControl,
  Questions,
  Testimonials,
  ThriveBusiness,
} from "./pages";
import Navbar from "./components/navbar";
import DefaultLayout from "./wrapper/DefaultLayout";
import Footer from "./components/footer";

const HomeSection = DefaultLayout(Home);
const ThriveBusinessSection = DefaultLayout(ThriveBusiness);
const CreateWebinarSection = DefaultLayout(CreateWebinar);
const PiracyControlSection = DefaultLayout(PiracyControl);
const ConsultationSection = DefaultLayout(Consultation);
const TestimonialsSection = DefaultLayout(Testimonials);
const QuestionsAccordionSection = DefaultLayout(Questions);

const App = () => {
  return (
    <main className="size-full relative grid grid-cols-1 items-center overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Home Page */}
      <HomeSection />
      {/* Thrive Business */}
      <ThriveBusinessSection />
      {/* Create Webinar */}
      <CreateWebinarSection />
      {/* Piracy Control */}
      <PiracyControlSection />
      {/* Consultation */}
      <ConsultationSection />
      {/* Testimonials */}
      <TestimonialsSection />
      {/* Questions Accordian */}
      <QuestionsAccordionSection />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default App;
