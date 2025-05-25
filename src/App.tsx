import React from "react";
import DisclaimerPopup from "./components/DisclaimerPopup";
import RoutesFile from "./components/Navigation/Routes";
// Add new screen imports here as you create them
// import Services from './screens/Services';
// import Awards from './screens/Awards';
// import Gallery from './screens/Gallery';
// import Videos from './screens/Videos';
// import Contact from './screens/Contact';
// import Pay from './screens/Pay';

const App: React.FC = () => {
  return (
    <>
      <DisclaimerPopup />
      <RoutesFile />
    </>
  );
};

export default App;
