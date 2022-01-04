import {Route} from 'react-router-dom';
import './css/style.css';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Main from './main/main.js';
import Department from './sub/Department.js';
import Community from './sub/Community.js';
import Gallery from './sub/Gallery.js';
import Youtube from './sub/Youtube.js';
import Location from './sub/Location.js';
import Join from './sub/Join.js';

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
