import React from 'react'
import { CollabMember } from './CollabMember'

import collab from './collabData.json'

export default function Collaborators() {
  return (
    <div>
      <CollabMember member={collab.etimo} anchor="left" />
      <CollabMember member={collab.belzo} anchor="left" />
    </div>
  )
}
