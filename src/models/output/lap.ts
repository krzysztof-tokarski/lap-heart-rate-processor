import { HeartRateSample } from './heart-rate-sample';

export interface Lap {
  startTime: Date;
  distance: number;
  duration: number;
  heartRateSamples: HeartRateSample[];
}
