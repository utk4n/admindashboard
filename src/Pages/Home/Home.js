import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import FeaturedChart from '../../components/Charts/FeaturedChart';
import NormalChart from '../../components/Charts/NormalChart';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home_container">
       <Navbar />
       <div className="widgets">
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earnings'/>
        <Widget type='balance'/>
       </div>
       <div className="charts">
        <FeaturedChart />
        <NormalChart />
       </div>
      </div>
    </div>
  )
}

export default Home