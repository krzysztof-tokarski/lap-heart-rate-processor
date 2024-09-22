import { Lap } from './lap';

export interface ActivityOverview {
  userId: string;
  type: string;
  device: string;
  maxHeartRate: number;
  duration: number;
  laps: Lap[];
}
