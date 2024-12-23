import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Example } from './components/Example';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
  
    <div className=''>
      <div className='bg-black'>
      <Header />
      <Hero />
      </div>
      <div className='bg-[#282828]'>
      
      <Service />
      <Example />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App;
