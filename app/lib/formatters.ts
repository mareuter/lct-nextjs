import { DateTime } from 'luxon'

const formatDoubleValue = (value: number, precision: number) => {
  return Number(Math.round(parseFloat(value + 'e' + precision)) + 'e-' + precision).toFixed(precision)
}

const getDirectionLabel = (coordinate: number, direction: string) => {
  if (coordinate < 0) {
    return direction[1]
  } else {
    return direction[0]
  }
}

export const formatDoubleLabel = (value: number, backCaption: string, precision: number = 2) => {
  const formatNum = formatDoubleValue(value, precision)
  return formatNum + backCaption
}

export const formatCoordinateLabel = (coordinate: number, direction: string | null) => {
  const degrees = Math.trunc(Math.abs(coordinate))
  const minutesDouble = (Math.abs(coordinate) - degrees) * 60.0
  const degreesString = degrees.toString() + '°'
  const minutesString = formatDoubleLabel(minutesDouble, "'")

  let coordinateString = degreesString + ' ' + minutesString

  if (direction !== null) {
    if (coordinate < 0) {
      coordinateString += ' ' + direction[2]
    } else {
      coordinateString += ' ' + direction[0]
    }
  }

  return coordinateString
}

export function formatTimeWithSeconds(
  timestamp: number,
  timezone: string,
  showTz: boolean = false,
  useShortTz: boolean = false,
) {
  const date = DateTime.fromSeconds(timestamp).setZone(timezone)
  let dateString = date.toFormat('y-MM-dd HH:mm:ss')
  if (showTz) {
    if (useShortTz) {
      dateString += ' ' + date.offsetNameShort
    } else {
      dateString += ' ' + date.zoneName
    }
  }
  return dateString
}

export const formatTimeWithMinutes = (timeTuple: Array<number>, timezone: string, useNbsp: boolean = false) => {
  const seconds = Math.trunc(timeTuple[5])
  const milliseconds = Math.round((timeTuple[5] - seconds) * 1000)
  const local = DateTime.utc(
    timeTuple[0],
    timeTuple[1],
    timeTuple[2],
    timeTuple[3],
    timeTuple[4],
    seconds,
    milliseconds,
  )
  const localForTimezone = local.setZone(timezone)
  let dateString = localForTimezone.toFormat('y-MM-dd HH:mm')
  let separator = ' '
  if (useNbsp) {
    separator = '&nbsp;'
  }
  dateString += separator + localForTimezone.offsetNameShort
  return dateString
}

export const formatTimeOnly = (timeTuple: Array<number>) => {
  const seconds = Math.trunc(timeTuple[5])
  const milliseconds = Math.round((timeTuple[5] - seconds) * 1000)
  const local = DateTime.local(
    timeTuple[0],
    timeTuple[1],
    timeTuple[2],
    timeTuple[3],
    timeTuple[4],
    seconds,
    milliseconds,
  )
  const timeString = local.toFormat('HH:mm')
  return timeString
}

export const formatRightAscension = (value: number) => {
  const hoursDecimal = value / 15.0
  const hours = Math.trunc(hoursDecimal)
  const minutesDecimal = (hoursDecimal - hours) * 60.0
  const minutes = Math.round(minutesDecimal)

  const hoursString = hours.toString().padStart(2, '0') + 'h'
  const minutesString = minutes.toString().padStart(2, '0') + 'm'
  return hoursString + ' ' + minutesString
}

export const formatDoubleCoordinateLabel = (coordinate: number, direction: string) => {
  const coordinateValue = formatDoubleValue(Math.abs(coordinate), 2)
  const coordinateString = coordinateValue.toString() + '°'
  const directionString = getDirectionLabel(coordinate, direction)
  return coordinateString + ' ' + directionString
}
