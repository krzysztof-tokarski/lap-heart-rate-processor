import { describe, expect, it } from 'vitest';
import { InputModels } from '../../../../models/index';
import { InputValidators } from '../../../../validators';

describe('isValidSample', () => {
  const validate = InputValidators.Model.isValidSample;

  it('should return true for a valid Sample object', () => {
    const validSample: InputModels.Sample = {
      'recording-rate': 10,
      'sample-type': 'heart_rate',
      data: '120,130,140',
    };

    expect(validate(validSample)).toBe(true);
  });

  it('should return false for an object missing required properties', () => {
    const defaultSample = {
      'recording-rate': 10,
      'sample-type': 'heart_rate',
      data: '120,130,140',
    };

    const invalidSample1 = { ...defaultSample, 'sample-type': undefined };
    const invalidSample2 = { ...defaultSample, 'recording-rate': undefined };
    const invalidSample3 = { ...defaultSample, data: undefined };

    expect(validate(invalidSample1)).toBe(false);
    expect(validate(invalidSample2)).toBe(false);
    expect(validate(invalidSample3)).toBe(false);
  });

  it('should return false for an object with wrong property types', () => {
    const defaultSample = {
      'recording-rate': 10,
      'sample-type': 'heart_rate',
      data: '120,130,140',
    };

    const invalidSample1 = { ...defaultSample, 'recording-rate': 'abc' };
    const invalidSample2 = { ...defaultSample, 'sample-type': 123 };
    const invalidSample3 = { ...defaultSample, data: 123 };

    expect(validate(invalidSample1)).toBe(false);
    expect(validate(invalidSample2)).toBe(false);
    expect(validate(invalidSample3)).toBe(false);
  });
});
