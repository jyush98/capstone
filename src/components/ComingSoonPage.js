import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function ComingSoonPage() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <main className="main-content">
            <section className="hero">
                <div className="hero-text">
                    <h1>Coming soon!</h1>
                </div>
            </section>
        </main>
      <Footer/>
    </div>
  );
}

export default ComingSoonPage;