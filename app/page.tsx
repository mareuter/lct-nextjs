'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import jstz from 'jstz'
import { getAverageTimezoneCoordinates } from '@/app/lib/average_timezone_coordinates'
import { useDateValue } from '@/app/lib/date_context'

import launch_screen from '@/public/launcher_screen.png'

export default function Home() {
  let date = useDateValue().date
  let timezone = useRef(jstz.determine())
  let [coordinates, setCoordinates] = useState({
    latitude: 0.0,
    longitude: 0.0,
    good: false,
  })

  function getSecondsTimestamp(dt: Date) {
    return dt.getTime() / 1000
  }

  useEffect(() => {
    function setLocation(position: GeolocationPosition) {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        good: true,
      })
    }

    function showError(error: GeolocationPositionError) {
      var message
      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = 'User denied the request for Geolocation.'
          break
        case error.POSITION_UNAVAILABLE:
          message = 'Location information is unavailable.'
          break
        case error.TIMEOUT:
          message = 'The request to get user location timed out.'
          break
        default:
          message = 'An unknown error occurred.'
          break
      }
      message += ' Using average latitude/longitude from timezone.'
      message += ' Inaccurate information shown in italics!'
      alert(message)
      const avgCoordinates = getAverageTimezoneCoordinates(timezone.current.name())
      setCoordinates({
        latitude: avgCoordinates[0],
        longitude: avgCoordinates[1],
        good: false,
      })
    }

    navigator.geolocation.getCurrentPosition(setLocation, showError)
  }, [coordinates.latitude, coordinates.longitude, coordinates.good, timezone])

  return (
    <main className="h-screen w-screen">
      <Image priority={false} src={launch_screen} alt="Lunar Club Tools" fill={true} style={{ objectFit: 'contain' }} />
    </main>
  )
}
