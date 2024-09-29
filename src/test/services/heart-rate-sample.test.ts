import { InputMappers } from '@/mappers';
import { HeartRateSampleService } from '@/services/heart-rate-sample';
import { describe, expect, it } from 'vitest';
import { SAMPLES_MOCK } from '../mocks/input/sample.mock';

describe('HeartRateSampleService', () => {
  it('should return correct heart rate samples', () => {
    const activityType = 'running';
    const result = HeartRateSampleService.getHeartRateSamplesByLapIndex(
      InputMappers.mapSamplesInputToIntermediate(SAMPLES_MOCK),
      activityType
    );

    expect(Object.entries(result).length).toBe(4);
  });
});
