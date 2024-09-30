import { CONSTANTS } from '@/constants';
import { IntermediateModels } from '@/models';
import { IntermediateValidators } from '@/validators';
import { describe, expect, it } from 'vitest';

describe('isValidNumberOfLaps', () => {
  const validate = IntermediateValidators.isValidNumberOfLaps;

  it('should return true when heart rate samples match laps for non-indoor cycling', () => {
    const samples = [
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
    ] as IntermediateModels.Sample[];

    const laps = [{}, {}] as IntermediateModels.Lap[];

    const result = validate(samples, laps, 'someOtherActivity');
    expect(result).toBe(true);
  });

  it('should return false when heart rate samples do not match laps for non-indoor cycling', () => {
    const samples = [
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
    ] as IntermediateModels.Sample[];

    const laps = [{}, {}] as IntermediateModels.Lap[];

    const result = validate(samples, laps, 'someOtherActivity');
    expect(result).toBe(false);
  });

  it('should return true when heart rate samples are double the laps for indoor cycling', () => {
    const samples = [
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
    ] as IntermediateModels.Sample[];

    const laps = [{}, {}] as IntermediateModels.Lap[];

    const result = validate(
      samples,
      laps,
      CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
    );
    expect(result).toBe(true);
  });

  it('should return false when heart rate samples are not double the laps for indoor cycling', () => {
    const samples = [
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
      { sampleType: CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER },
    ] as IntermediateModels.Sample[];

    const laps = [{}, {}] as IntermediateModels.Lap[];

    const result = validate(
      samples,
      laps,
      CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
    );
    expect(result).toBe(false);
  });
});
