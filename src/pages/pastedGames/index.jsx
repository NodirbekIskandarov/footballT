import GamesTournament from "../../components/gamesTourament"
import PlayersTournament from "../../components/playersTournament"
import ResultsTournamentTable from "../../components/resultsTournamentTable"

function PastedGames() {
  return (
    <div>
      <GamesTournament/>
      <ResultsTournamentTable/>
      <PlayersTournament/>
    </div>
  )
}

export default PastedGames