import { StaticImageData } from 'next/image'

export interface PhaseIcon {
  [index: string]: StaticImageData
}

// type Dictionary<K extends string | number | symbol, V> = {
//   [key in K]: V
// }

export type Phase = {
  phase: string
  datetime: Array<number>
}

export interface PhaseList {
  [index: string]: Phase
}

export type FormattedPhase = {
  phase_name: string | undefined
  phase_date: string
  phase_time: string
}

export type Location = {
  latitude: number
  longitude: number
  good: boolean
}

export interface DateContextObject {
  date: Date
  setDate: Function
}
