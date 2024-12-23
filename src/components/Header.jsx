import React from 'react';
import Container from './container';

function Header() {
  return (
    // <div className="fixed w-full top-0 left-0 z-50 bg-black">
      <Container>
        <div className="p-4 flex justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Triad Code Solutions</h1>
          </div>
          <div>
            <ul className="flex gap-8">
              <li className="font-bold text-white">
                <a href="/">Home</a>
              </li>
              <li className="font-bold text-white">
                <a href="/about">About</a>
              </li>
              <li className="font-bold text-white">
                <a href="/services">Services</a>
              </li>
              <li className="font-bold text-white">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    //  </div>
  );
}

export default Header;
