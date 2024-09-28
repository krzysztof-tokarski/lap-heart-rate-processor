// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SummaryInput from '../input/summary';

/**
 *See {@link SummaryInput} for the example
 */
export default interface Summary {
  userId: string;
  activityId: number;
  activityName: string;
  durationInSeconds: number;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  activityType: string;
  averageHeartRateInBeatsPerMinute: number;
  activeKilocalories: number;
  deviceName: string;
  maxHeartRateInBeatsPerMinute: number;
}
