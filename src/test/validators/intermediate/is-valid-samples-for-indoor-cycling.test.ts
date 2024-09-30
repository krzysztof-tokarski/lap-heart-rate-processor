/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntermediateModels } from '@/models';
import { IntermediateValidators } from '@/validators';
import { INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER } from 'src/constants/lap';
import { mapSamplesInputToIntermediate } from 'src/mappers/input/sample';
import { SAMPLES_MOCK } from 'src/test/mocks/input/sample.mock';
import { describe, expect, it } from 'vitest';

describe('isValidSamplesForIndoorCycling', () => {
  const mappedSamples: IntermediateModels.Sample[] =
    mapSamplesInputToIntermediate(SAMPLES_MOCK);

  const validate = IntermediateValidators.isValidSamplesForIndoorCycling;

  it('should return true for valid indoor cycling heart rate sample pairs', () => {
    const result = validate(
      mappedSamples,
      INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
    );
    expect(result).toBe(true);
  });

  it('should return false if heart rate samples are uneven', () => {
    const unevenSamples = [...mappedSamples];
    (unevenSamples[1].sampleType as any) = 1;
    const result = validate(
      unevenSamples,
      INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
    );
    expect(result).toBe(false);
  });

  it('should return false if heart rate sample pairs are not next to each other', () => {
    const invalidSamples = [...mappedSamples];
    [invalidSamples[2], invalidSamples[4]] = [
      invalidSamples[4],
      invalidSamples[2],
    ];

    const result = validate(
      invalidSamples,
      INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
    );
    expect(result).toBe(false);
  });

  it('should return true if not indoor cycling activity type', () => {
    const result = validate(mappedSamples, 'someOtherActivityType');
    expect(result).toBe(true);
  });
});
