import React from 'react'
import EventCards from '../components/EventComponents/EventCards'
import { EventCollection } from '../data/EventCollection'

export default function EventsPage() {
  return (
    <div><EventCards EventCollection={EventCollection}/></div>
  )
}
