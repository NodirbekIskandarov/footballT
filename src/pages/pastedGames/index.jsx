import GamesTournament from "../../components/gamesTourament"
import PlayersTournament from "../../components/playersTournament"
import Asists from "../../components/playersTournament/Asists"
import ResultsTournamentTable from "../../components/resultsTournamentTable"

function PastedGames() {
  return (
    <div>
      <GamesTournament/>
      <ResultsTournamentTable/>
      <PlayersTournament/>
      <Asists/>
    </div>
  )
}

export default PastedGames