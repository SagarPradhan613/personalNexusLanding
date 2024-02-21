import Hero from '../view/landing/Hero'
import LandingSecondary from '../view/landing/LandingSecondary'
import Scroller from '../view/landing/Scroller'
import PinSectionCompoent from '../view/landing/PinSectionCompoent'
import JoinSection from '../view/landing/JoinSection'
import ContactSection from '../view/landing/ContactSection'
import PartnerSection from '../view/landing/PartnerSection'
import LastSection from '../view/landing/LastSection'
import { useRef } from 'react'

const Main = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRefSign = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToTargetSign = () => {
    if (targetRefSign.current) {
      targetRefSign.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Hero scrollToTarget={scrollToTarget} targetRef={targetRefSign} />
      <LandingSecondary />
      <Scroller />
      <PinSectionCompoent />
      <JoinSection targetRef={targetRef} scrollToTarget={scrollToTargetSign} />
      <ContactSection />
      <PartnerSection />
      <LastSection />
    </>
  )
}

export default Main
