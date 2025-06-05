import Image from 'next/image'

import phase_placeholder from '@/public/phase_placeholder.png'
import first_quarter from '@/public/first_quarter.png'
import full_moon from '@/public/full_moon.png'
import new_moon from '@/public/new_moon.png'
import third_quarter from '@/public/third_quarter.png'
import { PhaseIcon } from '@/app/lib/definitions'

const moonPhaseIcons: PhaseIcon = {
  new_moon: new_moon,
  first_quarter: first_quarter,
  full_moon: full_moon,
  last_quarter: third_quarter,
}

const PhaseCard = ({
  phase_name,
  phase_date,
  phase_time,
}: {
  phase_name: string | undefined
  phase_date: string
  phase_time: string
}) => {
  let phase_image
  if (phase_name === undefined) {
    phase_image = phase_placeholder
  } else {
    phase_image = moonPhaseIcons[phase_name as keyof PhaseIcon]
  }

  return (
    <div className="grid grid-cols-2 rounded-md border-4">
      <div className="relative m-1 aspect-square h-34 p-1 align-middle">
        <Image priority={false} src={phase_image} alt="Moon phase image" fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className="grid grid-rows-2 justify-center-safe">
        <p className="flex items-center text-2xl">{phase_date}</p>
        <p className="flex items-center text-2xl">{phase_time}</p>
      </div>
    </div>
  )
}

export default PhaseCard
