import HeartRateSample from './heart-rate-sample';

export default interface Lap {
  startTime: Date;
  distance: number;
  duration: number;
  heartRateSamples: HeartRateSample[];
}
