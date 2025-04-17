import { ReserveButton } from "@/components/reserve-button";
import AboutSection from "./(Home Page)/About";
import CoOrganizationLogos from "./(Home Page)/Co-OrganiztionLogo";
import ConferenceCTASections from "./(Home Page)/CTA";
import Dates from "./(Home Page)/Dates";
import DownloadButtons from "./(Home Page)/Downloadbuttons";
import FAQ from "./(Home Page)/FAQ";
import Hero from "./(Home Page)/Hero";
import ConferenceObjectives from "./(Home Page)/Objective";
import SDGSection from "./(Home Page)/SDGS";
import SpeakersView from "./(Home Page)/Speakers";
import Testomonial from "./(Home Page)/Testomonial";
import VenueCTA from "./(Home Page)/VebueCTA";

export default function Home() {
  return (
    <div>     
      <Hero/>
      <CoOrganizationLogos/>
      <AboutSection/>
      <DownloadButtons/>
      <ConferenceObjectives/>
      {/* <SpeakerSection/> */}
      {/* conference highlights need to be added */}
      <SpeakersView/>
      <Dates/>
      <ConferenceCTASections/>
      <SDGSection/>
      <VenueCTA/>
      <Testomonial/>
      <FAQ/>
      <ReserveButton />
    </div>
  );
}
