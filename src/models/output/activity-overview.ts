import Lap from './lap';

export default interface ActivityOverview {
  userId: string;
  activityType: string;
  device: string;
  maxHeartRateInBeatsPerMinute: number;
  durationInSeconds: number;
  laps: Lap[];
}
