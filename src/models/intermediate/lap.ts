// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LapInput from '../input/lap';

/**
 *See {@link LapInput} for the example
 */
export default interface Lap {
  startTimeInSeconds: number;
  airTemperatureCelsius: number;
  heartRate: number;
  totalDistanceInMeters: number;
  timerDurationInSeconds: number;
}
