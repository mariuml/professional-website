import React from "react";
import Home from "./components/Home";

// Buttons
import WorkButton from "./components/WorkButton";
import SeeMyWork from "./components/SeeMyWork";


function App() {
  return (
    <div className='App'>
      {/* Home page */}
<Home></Home>
<WorkButton> </WorkButton>
<SeeMyWork></SeeMyWork>

    </div>
  );
}

export default App;
