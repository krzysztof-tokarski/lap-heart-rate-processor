/* eslint-disable @typescript-eslint/no-explicit-any */
import { CONSTANTS } from '@/constants';
import { InputMappers } from '@/mappers';
import { InputModels } from '@/models';
import { HeartRateSampleService } from 'src/services/heart-rate-sample';
import { describe, expect, it } from 'vitest';
import { SAMPLES_MOCK } from '../mocks/input/sample.mock';

describe('HeartRateSampleService', () => {
  const activityType = 'running';

  it('should return dictionary with expected number of entries', () => {
    const pairs: [number, InputModels.Sample[]][] = [
      [4, SAMPLES_MOCK],
      [3, structuredClone(SAMPLES_MOCK)],
      [0, structuredClone(SAMPLES_MOCK)],
      [SAMPLES_MOCK.length, structuredClone(SAMPLES_MOCK)],
    ];

    (pairs[1][1][1] as any)['sample-type'] = 1;
    pairs[2][1].every((s) => ((s as any)['sample-type'] = 1));
    pairs[3][1].every(
      (s) =>
        ((s as any)['sample-type'] =
          CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER)
    );

    pairs.forEach(([expectedLength, samples]) => {
      const result = HeartRateSampleService.getHeartRateSamplesByLapIndex(
        InputMappers.mapSamplesInputToIntermediate(
          samples as InputModels.Sample[]
        ),
        activityType
      );

      expect(Object.entries(result).length).toBe(expectedLength);
    });
  });

  it('should return valid heart rate samples', () => {
    const result = HeartRateSampleService.getHeartRateSamplesByLapIndex(
      InputMappers.mapSamplesInputToIntermediate(SAMPLES_MOCK),
      activityType
    );

    expect(
      Object.values(result).every((v) =>
        v.every((h) => h.heartRate > 0 && !isFloat(h.heartRate))
      )
    ).toBe(true);

    const keys = Object.keys(result);
    expect(
      keys.sort().every((k, i) => {
        const nextKey = keys[i + 1];
        const previousKey = keys[i - 1];

        const kAsNum = Number(k);

        const sameAsPrevious = (kAsNum - 1).toString() === previousKey;
        const samesAsNext = (kAsNum + 1).toString() === nextKey;

        if (previousKey && nextKey) {
          return sameAsPrevious && samesAsNext;
        }

        if (previousKey) {
          return sameAsPrevious;
        }

        if (nextKey) return samesAsNext;
      })
    );

    function isFloat(x: number): boolean {
      return !!(x % 1);
    }
  });
});
