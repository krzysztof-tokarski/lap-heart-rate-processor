import HeartRateSample from './heart-rate-sample';

export default interface Lap {
  startTimeInSeconds: number;
  totalDistanceInMeters: number;
  timerDurationInSeconds: number;
  heartRateSamples: HeartRateSample[];
}
