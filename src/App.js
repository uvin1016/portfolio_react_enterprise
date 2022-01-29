import {Route} from 'react-router-dom';
import './css/style.css';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import Main from './components/main/main.js';
import Department from './components/sub/Department.js';
import Community from './components/sub/Community.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Main} />
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />

      <Footer />
    </div>
  );
}

export default App;
