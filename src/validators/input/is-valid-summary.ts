import { InputModels } from '@/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isValidSummary(obj: any): obj is InputModels.Summary {
  return (
    !!obj &&
    typeof obj.userId === 'string' &&
    typeof obj.activityId === 'number' &&
    typeof obj.activityName === 'string' &&
    typeof obj.durationInSeconds === 'number' &&
    typeof obj.startTimeInSeconds === 'number' &&
    typeof obj.startTimeOffsetInSeconds === 'number' &&
    typeof obj.activityType === 'string' &&
    typeof obj.averageHeartRateInBeatsPerMinute === 'number' &&
    typeof obj.activeKilocalories === 'number' &&
    typeof obj.deviceName === 'string' &&
    typeof obj.maxHeartRateInBeatsPerMinute === 'number'
  );
}
