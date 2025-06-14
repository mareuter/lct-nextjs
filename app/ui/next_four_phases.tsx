import { PhaseList } from '@/app/lib/definitions'
import PhaseCard from '@/app/ui/phase_card'

const NextFourPhases = ({ phaseList }: { phaseList: PhaseList }) => {
  const emptyPhase = {
    phase_name: undefined,
    phase_date: '0000-00-00',
    phase_time: '00:00 UTC',
  }

  return (
    <div>
      <h1 className="pb-2 text-2xl">Next Four Phases</h1>
      <div>
        <div id="0" className="pb-2">
          <PhaseCard {...emptyPhase} />
        </div>
        <div id="1" className="pb-2">
          <PhaseCard {...emptyPhase} />
        </div>
        <div id="2" className="pb-2">
          <PhaseCard {...emptyPhase} />
        </div>
        <div id="3" className="pb-2">
          <PhaseCard {...emptyPhase} />
        </div>
      </div>
    </div>
  )
}

export default NextFourPhases
