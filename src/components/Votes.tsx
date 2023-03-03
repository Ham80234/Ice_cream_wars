import { useCallback, useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVotes, setChocolateVotes] = useState(1)
  const [VanillaVotes, setVanillaVotes] = useState(1)
  const [StrawberryVotes, setStrawberryVotes] = useState(1)


  const maxWidth = 500

  const total = chocolateVotes + VanillaVotes + StrawberryVotes

 
  
  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={e => { setChocolateVotes(chocolateVotes + 1)}}>Chocolate</button>
        <button onClick={e => { setVanillaVotes(VanillaVotes + 1)}}>Vanilla</button>
        <button onClick={e => { setStrawberryVotes(StrawberryVotes + 1)}}>Strawberry</button>
      </div>
      <p className="vote-info">Chocolate: {chocolateVotes} ({Math.round(((chocolateVotes/total)*100) )}%)</p>
      <div>
        <div className="chocolate bar" style={{width: (maxWidth * (chocolateVotes/total))}}></div>
      </div>
      <p className="vote-info">Vanilla: {VanillaVotes} ({Math.round(((VanillaVotes/total)*100) )}%)</p>
      <div>
        <div className="vanilla bar" style={{width: (maxWidth * (VanillaVotes/total))}}></div>
      </div>
      <p className="vote-info">Strawberry: {StrawberryVotes} ({Math.round(((StrawberryVotes/total)*100) )}%)</p>
      <div>
        <div className="strawberry bar" style={{width: (maxWidth * (StrawberryVotes/total))}}></div>
      </div>
    </section>
  );
};

export default Votes;
