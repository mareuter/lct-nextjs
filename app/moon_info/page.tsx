import { cookies } from 'next/headers'
import NextFourPhases from '@/app/ui/next_four_phases'

const MoonInfo = async () => {
  const cookieStore = await cookies()
  const timezone = cookieStore.get('timezone')!.value
  const timestamp = cookieStore.get('timestamp')!.value
  const latitude = cookieStore.get('latitude')!.value
  const longitude = cookieStore.get('longitude')!.value
  //   console.log(`A: ${cookieStore.get('coords-good')!.value}`)

  const url = 'https://lct-web.onrender.com/moon_info?'
  const res = await fetch(
    url +
      new URLSearchParams({
        date: timestamp,
        tz: timezone,
        lat: latitude,
        lon: longitude,
      }),
  )
  if (!res.ok) {
    // console.log(res)
    throw new Error('Unable to fetch package data.')
  }
  const data = await res.json()

  return (
    <>
      <NextFourPhases phaseList={data['next_four_phases']} timezone={timezone} />
    </>
  )
}

export default MoonInfo
