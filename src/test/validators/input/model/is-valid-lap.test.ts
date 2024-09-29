import { InputModels } from '@/models';
import { InputValidators } from '@/validators';
import { describe, expect, it } from 'vitest';

describe('isValidLap', () => {
  const validate = InputValidators.Model.isValidLap;

  it('should return true for a valid Lap object', () => {
    const validLap: InputModels.Lap = {
      startTimeInSeconds: 123,
      airTemperatureCelsius: 25.4,
      heartRate: 150,
      totalDistanceInMeters: 1000,
      timerDurationInSeconds: 600,
    };

    expect(validate(validLap)).toBe(true);
  });

  it('should return false for an object with wrong property types', () => {
    const defaultLap = {
      startTimeInSeconds: 123,
      airTemperatureCelsius: 25.4,
      heartRate: 150,
      totalDistanceInMeters: 1000,
      timerDurationInSeconds: 600,
    };

    const invalidLap1 = { ...defaultLap, startTimeInSeconds: 'abc' };
    const invalidLap2 = { ...defaultLap, airTemperatureCelsius: 'abc' };
    const invalidLap3 = { ...defaultLap, heartRate: 'abc' };
    const invalidLap4 = { ...defaultLap, totalDistanceInMeters: 'abc' };
    const invalidLap5 = { ...defaultLap, timerDurationInSeconds: 'abc' };

    expect(validate(invalidLap1)).toBe(false);
    expect(validate(invalidLap2)).toBe(false);
    expect(validate(invalidLap3)).toBe(false);
    expect(validate(invalidLap4)).toBe(false);
    expect(validate(invalidLap5)).toBe(false);
  });

  it('should return false for an object missing required properties', () => {
    const defaultLap = {
      startTimeInSeconds: 123,
      airTemperatureCelsius: 25.4,
      heartRate: 150,
      totalDistanceInMeters: 1000,
      timerDurationInSeconds: 600,
    };

    const invalidLap1 = { ...defaultLap, heartRate: undefined };
    const invalidLap2 = { ...defaultLap, startTimeInSeconds: undefined };
    const invalidLap3 = { ...defaultLap, airTemperatureCelsius: undefined };
    const invalidLap4 = { ...defaultLap, totalDistanceInMeters: undefined };
    const invalidLap5 = { ...defaultLap, timerDurationInSeconds: undefined };

    expect(validate(invalidLap1)).toBe(false);
    expect(validate(invalidLap2)).toBe(false);
    expect(validate(invalidLap3)).toBe(false);
    expect(validate(invalidLap4)).toBe(false);
    expect(validate(invalidLap5)).toBe(false);
  });
});
