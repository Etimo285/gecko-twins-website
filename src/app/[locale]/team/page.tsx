import React from 'react'
import { TeamMember } from './TeamMember'

import team from './teamData.json'

export default function Team() {
  return (
    <div>
      <TeamMember member={team.etimo} anchor="left" />
      <TeamMember member={team.belzo} anchor="left" />
    </div>
  )
}
