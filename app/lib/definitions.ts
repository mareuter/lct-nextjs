import { StaticImageData } from 'next/image'

export interface PhaseIcon {
  [index: string]: StaticImageData
}

export type Phase = {
  name: string | undefined
  date: string
  time: string
}

export interface PhaseList {
  [index: number]: Phase
}
