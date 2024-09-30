import { InputModels } from '@/models';
import { InputValidators } from '@/validators';
import { describe, expect, it } from 'vitest';

describe('isValidSummary', () => {
  const validate = InputValidators.isValidSummary;

  it('should return true for a valid Summary object', () => {
    const validSummary: InputModels.Summary = {
      userId: 'user123',
      activityId: 1,
      activityName: 'Running',
      durationInSeconds: 3600,
      startTimeInSeconds: 1664505600,
      startTimeOffsetInSeconds: 0,
      activityType: 'running',
      averageHeartRateInBeatsPerMinute: 145,
      activeKilocalories: 500,
      deviceName: 'My Fitness Watch',
      maxHeartRateInBeatsPerMinute: 160,
    };

    expect(validate(validSummary)).toBe(true);
  });

  it('should return false for an object missing required properties', () => {
    const defaultSummary = {
      userId: 'user123',
      activityId: 1,
      activityName: 'Running',
      durationInSeconds: 3600,
      startTimeInSeconds: 1664505600,
      startTimeOffsetInSeconds: 0,
      activityType: 'running',
      averageHeartRateInBeatsPerMinute: 145,
      activeKilocalories: 500,
      deviceName: 'My Fitness Watch',
      maxHeartRateInBeatsPerMinute: 160,
    };

    const invalidSummary1 = { ...defaultSummary, userId: undefined };
    const invalidSummary2 = { ...defaultSummary, activityId: undefined };
    const invalidSummary3 = { ...defaultSummary, activityName: undefined };
    const invalidSummary4 = { ...defaultSummary, durationInSeconds: undefined };
    const invalidSummary5 = {
      ...defaultSummary,
      startTimeInSeconds: undefined,
    };
    const invalidSummary6 = {
      ...defaultSummary,
      startTimeOffsetInSeconds: undefined,
    };
    const invalidSummary7 = { ...defaultSummary, activityType: undefined };
    const invalidSummary8 = {
      ...defaultSummary,
      averageHeartRateInBeatsPerMinute: undefined,
    };
    const invalidSummary9 = {
      ...defaultSummary,
      activeKilocalories: undefined,
    };
    const invalidSummary10 = { ...defaultSummary, deviceName: undefined };
    const invalidSummary11 = {
      ...defaultSummary,
      maxHeartRateInBeatsPerMinute: undefined,
    };

    expect(validate(invalidSummary1)).toBe(false);
    expect(validate(invalidSummary2)).toBe(false);
    expect(validate(invalidSummary3)).toBe(false);
    expect(validate(invalidSummary4)).toBe(false);
    expect(validate(invalidSummary5)).toBe(false);
    expect(validate(invalidSummary6)).toBe(false);
    expect(validate(invalidSummary7)).toBe(false);
    expect(validate(invalidSummary8)).toBe(false);
    expect(validate(invalidSummary9)).toBe(false);
    expect(validate(invalidSummary10)).toBe(false);
    expect(validate(invalidSummary11)).toBe(false);
  });

  it('should return false for an object with wrong property types', () => {
    const defaultSummary = {
      userId: 'user123',
      activityId: 1,
      activityName: 'Running',
      durationInSeconds: 3600,
      startTimeInSeconds: 1664505600,
      startTimeOffsetInSeconds: 0,
      activityType: 'running',
      averageHeartRateInBeatsPerMinute: 145,
      activeKilocalories: 500,
      deviceName: 'My Fitness Watch',
      maxHeartRateInBeatsPerMinute: 160,
    };

    const invalidSummary1 = { ...defaultSummary, userId: 123 };
    const invalidSummary2 = { ...defaultSummary, activityId: 'abc' };
    const invalidSummary3 = { ...defaultSummary, activityName: 123 };
    const invalidSummary4 = { ...defaultSummary, durationInSeconds: 'abc' };
    const invalidSummary5 = { ...defaultSummary, startTimeInSeconds: 'abc' };
    const invalidSummary6 = {
      ...defaultSummary,
      startTimeOffsetInSeconds: 'abc',
    };
    const invalidSummary7 = { ...defaultSummary, activityType: 123 };
    const invalidSummary8 = {
      ...defaultSummary,
      averageHeartRateInBeatsPerMinute: 'abc',
    };
    const invalidSummary9 = { ...defaultSummary, activeKilocalories: 'abc' };
    const invalidSummary10 = { ...defaultSummary, deviceName: 123 };
    const invalidSummary11 = {
      ...defaultSummary,
      maxHeartRateInBeatsPerMinute: 'abc',
    };

    expect(validate(invalidSummary1)).toBe(false);
    expect(validate(invalidSummary2)).toBe(false);
    expect(validate(invalidSummary3)).toBe(false);
    expect(validate(invalidSummary4)).toBe(false);
    expect(validate(invalidSummary5)).toBe(false);
    expect(validate(invalidSummary6)).toBe(false);
    expect(validate(invalidSummary7)).toBe(false);
    expect(validate(invalidSummary8)).toBe(false);
    expect(validate(invalidSummary9)).toBe(false);
    expect(validate(invalidSummary10)).toBe(false);
    expect(validate(invalidSummary11)).toBe(false);
  });
});
