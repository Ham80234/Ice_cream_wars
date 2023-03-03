import "./AdDesigner.css";
import { useState } from "react";

const AdDesigner = () => {


  const [flavor, setFlavor] = useState("Chocolate");
  const [darkMode , setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(44)


  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad ${darkMode ? 'dark': 'light'}`}>
        <p>Vote for</p>
        <p className="flavor" style={{fontSize : fontSize}}>{flavor}</p>
      </div>
      <h3 style={{ color: "purple" }}>What to Support</h3>
      <div>
        <button className={flavor === "Chocolate" ? 'disabled' : ''}
          disabled={flavor === "Chocolate"}
          onClick={e => setFlavor("Chocolate")}>
            Chocolate
            </button>
        <button className={flavor === "Vanilla" ? 'disabled' : ''} disabled={flavor === "Vanilla"} onClick={e => setFlavor("Vanilla")}>Vanilla</button>
        <button className={flavor === "Strawberry" ? 'disabled' : ''} disabled={flavor === "Strawberry"} onClick={e => setFlavor("Strawberry")}>Strawberry</button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button className={!darkMode ? 'disabled' : ''} onClick={e => setDarkMode(false)}>Light</button>
        <button className={darkMode ? 'disabled' : ''} onClick={e => setDarkMode(true)}>Dark</button>
      </div>
      <h3>Font Size</h3>
      <div style={{ display: "flex" }}>
        <button onClick={e =>  {setFontSize(fontSize - 5)}}>Down</button>
        <p>{fontSize}</p>
        <button onClick={e =>  {setFontSize(fontSize + 5)}}>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
