import { FormattedPhase, PhaseList } from '@/app/lib/definitions'
import PhaseCard from '@/app/ui/phase_card'
import { formatTimeWithMinutesSplit } from '../lib/formatters'

const NextFourPhases = ({ phaseList, timezone }: { phaseList: PhaseList; timezone: string }) => {
  const emptyPhase: FormattedPhase = {
    phase_name: undefined,
    phase_date: '0000-00-00',
    phase_time: '00:00 UTC',
  }

  let nextFourPhases: FormattedPhase[] = new Array(4)
  if (Object.entries(phaseList).length === 0) {
    nextFourPhases.fill(emptyPhase)
  } else {
    nextFourPhases = []
    for (const [_index, value] of Object.entries(phaseList)) {
      // console.log(_index)
      // console.log(value.datetime)
      // console.log(timezone)
      const formatted = formatTimeWithMinutesSplit(value.datetime, timezone)
      nextFourPhases.push({
        phase_name: value.phase,
        phase_date: formatted.date,
        phase_time: formatted.time,
      })
    }
  }

  return (
    <div>
      <h1 className="pb-2 text-2xl">Next Four Phases</h1>
      <div>
        {nextFourPhases.map((phase, index) => (
          <div key={index} className="pb-2">
            <PhaseCard {...phase} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NextFourPhases
