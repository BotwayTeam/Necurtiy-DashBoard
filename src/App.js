import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MasterDashBoard from "./pages/MasterDashBoard";
import DashBoard from "./pages/DashBoard";


function App() {
  const [activeMenu,setActiveMenu] = useState(true)
  const [screenSize,setScreenSize] = useState(undefined)

  console.log(screenSize);
  return (
    <div>
      <Header 
      activeMenu={activeMenu}
      setActiveMenu={setActiveMenu}
      screenSize={screenSize}
      setScreenSize={setScreenSize}/>
          <div className={
            `${activeMenu 
              ? `md:ml-60`:`flex-2`}`
           }>
              <DashBoard/>
            </div>
    </div>
  );
}

export default App;
