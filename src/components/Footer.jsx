import React from 'react';
import Container from './container';

function Footer() {
  return (
    <Container>

    <footer className="text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold">Triad Code Solutions</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CodeCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </Container>
  );
}

export default Footer;
