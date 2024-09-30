import { CONSTANTS } from '@/constants';
import { IntermediateModels } from '@/models';

export default function isValidSamplesForIndoorCycling(
  samples: IntermediateModels.Sample[],
  activityType: string
): boolean {
  if (activityType !== CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER)
    return true;

  const heartRateSamples = samples
    .map((s, i) => ({
      isHeartRateSample:
        s.sampleType === CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER,
      sampleIndex: i,
    }))
    .filter((s) => s.isHeartRateSample)
    .sort((s) => s.sampleIndex);

  if (heartRateSamples.length % 2 !== 0) return false;

  const chunkedArray: (typeof heartRateSamples)[number][][] = [];

  for (let i = 0; i < heartRateSamples.length; i += 2) {
    chunkedArray.push(heartRateSamples.slice(i, i + 2));
  }

  if (chunkedArray.some((c) => c[0].sampleIndex !== c[1].sampleIndex - 1))
    return false;

  return true;
}
