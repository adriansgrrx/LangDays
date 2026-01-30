import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const Home = ( {user, setUser, error} ) => {
  return (
    <div className='min-h-screen bg-amber-50'>
      <Navbar />
      Home
      <Menu />
    </div>
  )
}

export default Home