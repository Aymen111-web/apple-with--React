import react from "react";
import Header from './component/Header/Header'
import Footer from './component/footer/Footer'
import Mainu from './component/main/mainu'
import Ssec from './component/second heiglight/Ssec'
import Third from './component/third/Third'



function App() {
  return (
    <div className="App">
      <Header/>
      <Mainu/>
      <Ssec/>
      <Third/>
      <Footer/>
    </div>
  );
}

export default App;
