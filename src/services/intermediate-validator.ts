import { IntermediateModels } from '@/models';
import { IntermediateValidators } from '@/validators';

export class IntermediateValidatorService {
  public static validateLoadedData(
    { activityType }: IntermediateModels.Summary,
    laps: IntermediateModels.Lap[],
    samples: IntermediateModels.Sample[]
  ): boolean {
    return (
      IntermediateValidators.isValidNumberOfLaps(samples, laps, activityType) &&
      IntermediateValidators.isValidSamplesForIndoorCycling(
        samples,
        activityType
      )
    );
  }
}
