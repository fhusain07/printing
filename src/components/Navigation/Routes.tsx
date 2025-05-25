import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Dashboard from "../../screens/Dashboard";
import About from "../../screens/About";

function RoutesFile() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* Add new routes here as you create them */}
          {/* <Route path="/services" element={<Services />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pay" element={<Pay />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default RoutesFile;
