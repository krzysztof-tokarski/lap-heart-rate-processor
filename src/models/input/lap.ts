/**
 * @example {
    "startTimeInSeconds": 1661158927,
    "airTemperatureCelsius": 28,
    "heartRate": 109,
    "totalDistanceInMeters": 15,
    "timerDurationInSeconds": 600
  }
 */
export default interface Lap {
  startTimeInSeconds: number;
  airTemperatureCelsius: number;
  heartRate: number;
  totalDistanceInMeters: number;
  timerDurationInSeconds: number;
}
