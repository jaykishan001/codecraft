import React from 'react'
import { Example } from './Example';
import Container from './container';
import HeroText from './HeroText';
import RetroGrid from './ui/retro-grid';
function Hero() {
  return (
    <>
    <RetroGrid />
      <Container>
        <div className="flex items-center justify-center w-[80%] h-[100vh] text-center mx-auto">
          <HeroText />
        </div>
      </Container>
    </>
  );
}

export default Hero;

