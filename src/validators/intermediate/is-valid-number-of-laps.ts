import { CONSTANTS } from '@/constants';
import { IntermediateModels } from '@/models';

export default function isValidNumberOfLaps(
  samples: IntermediateModels.Sample[],
  laps: IntermediateModels.Lap[],
  activityType: string
): boolean {
  const heartRateSamples = samples.filter(
    (s) => s.sampleType === CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER
  );

  return (
    heartRateSamples.length ===
    (activityType === CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
      ? laps.length * 2
      : laps.length)
  );
}
