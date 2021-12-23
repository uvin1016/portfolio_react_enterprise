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
      <Route exact path="/department" component={Department} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/youtube" component={Youtube} />
      <Route exact path="/location" component={Location} />
      <Route exact path="/join" component={Join} />

      <Footer />
    </div>
  );
}

export default App;
