import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Letters from './Letters';
import Memories from './Memories';

const Home = ( {user, setUser, error} ) => {
  return (
    <div className='min-h-screen bg-white overflow-hidden '>

      <section id="hero" className='min-h-screen'>
        <Navbar />
        <Hero />
      </section>

      <section id="memories">
        <Memories />
      </section>

      <section id="letters">
        <Letters />
      </section>

      <Menu />
    </div>
  )
}

export default Home