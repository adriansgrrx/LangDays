import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Letters from './Letters';
import Memories from './Memories';

const Home = ( {user, setUser, error} ) => {
  return (
    <div className='min-h-screen bg-amber-50'>

      <section id="hero">
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