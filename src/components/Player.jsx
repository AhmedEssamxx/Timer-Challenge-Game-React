import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  const playerNamee = useRef();

  const handleClick = () => {
    setPlayerName(playerNamee.current.value);
    playerNamee.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerNamee} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
