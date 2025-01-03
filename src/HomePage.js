import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default HomePage;