//Link must imported
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    // Fix3: to must be placed instead of exact path to navigate
    //Fix4: path must be {`/team-matches/${id}`}
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
