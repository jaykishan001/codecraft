import React from 'react';
import Container from './container';
import SparklesText from './ui/sparkles-text';
import { BorderBeam } from './ui/border-beam';
import { Cobe } from './Cobe';
import Ripple from './ui/ripple';
import { BentoDemo } from './BentoDemo';

function Service() {
  return (
    // <Cobe />
    <Container >
    <div className="h-[100vh] relative">
      <div className="w-full pt-6 flex items-center justify-center text-white text-3xl font-bold h-1/6">
        <SparklesText text= "Services We Offer" />
      </div>
    <Ripple />
    <div className='absolute flex justify-between items-center gap-8 top-1/3'>
    {/* <div className ="h-[400px] flex items-center justify-center w-[350px] bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <p className='text-2xl font-semibold text-white text-center'>
    Web development 
    </p>
    </div>
    <div className ="h-[400px] flex items-center justify-center w-[350px] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
    <p className='text-2xl font-semibold text-white text-center'>
    Mobile friendly designs
    </p>
    </div>
    <div className ="h-[400px] flex items-center justify-center w-[350px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-xl border-gray-100">
    <p className='text-2xl font-semibold text-white text-center'>
    SEO Optimization 
    </p>    
    </div> */}
    <BentoDemo />
    </div>
    </div>
    </Container>
  );
}

export default Service;


