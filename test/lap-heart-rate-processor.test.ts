import { describe, expect, it } from 'vitest';
import { LapHeartRateProcessor } from '../src/lap-heart-rate-processor';
import { LAPS_MOCK } from './mocks/input/lap.mock';
import { SAMPLES_MOCK } from './mocks/input/sample.mock';
import { SUMMARY_MOCK } from './mocks/input/summary.mock';

describe('LapHeartRateProcessor', () => {
  it('throws error if required inputs are not loaded', () => {
    const processor = new LapHeartRateProcessor();

    expect(() => processor.process()).toThrowError(
      'Not all required inputs provided'
    );
  });

  it('processes data and returns ActivityOverview', () => {
    const processor = new LapHeartRateProcessor();

    processor.loadSummary(SUMMARY_MOCK);
    processor.loadLaps(LAPS_MOCK);
    processor.loadSamples(SAMPLES_MOCK);

    const result = processor.process();

    expect(result).toHaveProperty('userId');
    expect(result).toHaveProperty('activityType');
    expect(result).toHaveProperty('device');
    expect(result).toHaveProperty('maxHeartRateInBeatsPerMinute');
    expect(result).toHaveProperty('durationInSeconds');
    expect(result).toHaveProperty('laps');
    expect(result.laps).toBeInstanceOf(Array);
  });
});
