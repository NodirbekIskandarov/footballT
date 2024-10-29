import GamesTournament from "../../components/gamesTourament"
import PlayersTournament from "../../components/playersTournament"
import ResultsTournamentTable from "../../components/resultsTournamentTable"

function PastedGames() {
  return (
    <div>
      <div className="container">
        <div style={{
          marginTop: "50px",
          display: "flex",
          gap: "15px"
        }}>
          <span style={{
            fontWeight: "500",
            fontSize: "28px"
          }}>Filter</span>
          <input type="text"  placeholder="kun"/>
          <input type="text"  placeholder="oy"/>
          <input type="text"  placeholder="yil"/>
        </div>
      </div>
      <GamesTournament/>
      <ResultsTournamentTable/>
      <PlayersTournament/>
    </div>
  )
}

export default PastedGames