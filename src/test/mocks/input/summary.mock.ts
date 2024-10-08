import { InputModels } from '@/models';

export const SUMMARY_MOCK = {
  userId: '1234567890',
  activityId: 9480958402,
  activityName: 'Indoor Cycling',
  durationInSeconds: 3667,
  startTimeInSeconds: 1661158927,
  startTimeOffsetInSeconds: 7200,
  activityType: 'INDOOR_CYCLING',
  averageHeartRateInBeatsPerMinute: 150,
  activeKilocalories: 561,
  deviceName: 'instinct2',
  maxHeartRateInBeatsPerMinute: 190,
} satisfies InputModels.Summary;
