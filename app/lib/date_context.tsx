'use client'

import { createContext, useContext, useState } from 'react'
import { DateContextObject } from './definitions'

const DateContext = createContext({ date: new Date(), setDate: () => {} } as DateContextObject)
DateContext.displayName = 'DateContext'

const DateProvider = ({ children }: { children: React.ReactNode }) => {
  let [date, setDate] = useState(new Date())
  return <DateContext.Provider value={{ date: date, setDate: setDate }}>{children}</DateContext.Provider>
}

const useDateValue = () => useContext(DateContext)

export { DateContext, DateProvider, useDateValue }
