import React from 'react'

import { Card } from './lib/Card'
 
export const App = () => {
  return (
    <div>
      <Card 
        coverImage='https://www.fillmurray.com/500/300'
        thumbnailUrl='https://www.fillmurray.com/100/100'
        title='Title goes here' 
        secondaryText='Secondary goes here'/>
    </div>
  )
}
