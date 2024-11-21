import AboutSection from "./(Home Page)/About";
import CoOrganizationLogos from "./(Home Page)/Co-OrganiztionLogo";
import ConferenceCTASections from "./(Home Page)/CTA";
import Dates from "./(Home Page)/Dates";
import FAQ from "./(Home Page)/FAQ";
import Hero from "./(Home Page)/Hero";
import ConferenceObjectives from "./(Home Page)/Objective";
import SpeakerSection from "./(Home Page)/Speaker";
import Testomonial from "./(Home Page)/Testomonial";
import VenueCTA from "./(Home Page)/VebueCTA";

export default function Home() {
  return (
    <div>     
      <Hero/>
      <CoOrganizationLogos/>
      <AboutSection/>
      <ConferenceObjectives/>
      <SpeakerSection/>
      {/* conference highlights need to be added */}
      <ConferenceCTASections/>
      <VenueCTA/>
      <Testomonial/>
      <Dates/>
      <FAQ/>

    </div>
  );
}
