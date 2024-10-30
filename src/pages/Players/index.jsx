import { PlayersBanner, PlayersTable } from "../../components";
import back from "../../assets/images/planedback.png";
function Players() {
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-reapet",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <PlayersBanner />
      <PlayersTable />
    </div>
  );
}

export default Players;
