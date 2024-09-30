/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputValidators } from '@/validators';
import { InputValidatorService } from 'src/services/input-validator';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/validators', () => ({
  InputValidators: {
    isValidLap: vi.fn(),
    isValidSample: vi.fn(),
    isValidSummary: vi.fn(),
    isValidLaps: vi.fn(),
    isValidSamples: vi.fn(),
  },
}));

describe('InputValidatorService', () => {
  describe('validateLaps', () => {
    it('should pass validation if all laps are valid', () => {
      (InputValidators.isValidLap as any).mockReturnValue(true);
      (InputValidators.isValidLaps as any).mockReturnValue(true);

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).not.toThrow();
    });

    it('should throw error if a lap is invalid', () => {
      (InputValidators.isValidLap as any).mockImplementation(
        (lap: { lap: number }) => lap.lap !== 1
      );

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).toThrowError(
        'Model validation failed for lap at index 0: {"lap":1}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if laps array validation fails', () => {
      (InputValidators.isValidLap as any).mockReturnValue(true);
      (InputValidators.isValidLaps as any).mockReturnValue(false);

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).toThrowError(
        'Model validation failed for laps array: [{"lap":1},{"lap":2}]. Ensure all required properties are present and valid.'
      );
    });

    it('should handle an empty laps array', () => {
      (InputValidators.isValidLaps as any).mockReturnValue(true);

      const laps: any[] = [];
      expect(() => InputValidatorService.validateLaps(laps)).not.toThrow();
    });

    it('should throw error for an invalid lap in an empty object', () => {
      (InputValidators.isValidLap as any).mockReturnValue(false);

      const laps = [{}];
      expect(() => InputValidatorService.validateLaps(laps)).toThrowError(
        'Model validation failed for lap at index 0: {}. Ensure all required properties are present and valid.'
      );
    });
  });

  describe('validateSamples', () => {
    it('should pass validation if all samples are valid', () => {
      (InputValidators.isValidSample as any).mockReturnValue(true);
      (InputValidators.isValidLaps as any).mockReturnValue(true);

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() =>
        InputValidatorService.validateSamples(samples)
      ).not.toThrow();
    });

    it('should throw error if a sample is invalid', () => {
      (InputValidators.isValidSample as any).mockImplementation(
        (sample: { sample: number }) => sample.sample !== 1
      );

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() => InputValidatorService.validateSamples(samples)).toThrowError(
        'Model validation failed for sample at index 0: {"sample":1}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if samples array validation fails', () => {
      (InputValidators.isValidSample as any).mockReturnValue(true);
      (InputValidators.isValidLaps as any).mockReturnValue(false);

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() => InputValidatorService.validateSamples(samples)).toThrowError(
        'Model validation failed for samples array: [{"sample":1},{"sample":2}]. Ensure all required properties are present and valid.'
      );
    });

    it('should handle an empty samples array', () => {
      (InputValidators.isValidLaps as any).mockReturnValue(true);

      const samples: any[] = [];
      expect(() =>
        InputValidatorService.validateSamples(samples)
      ).not.toThrow();
    });

    it('should throw error for an invalid sample in an empty object', () => {
      (InputValidators.isValidSample as any).mockReturnValue(false);

      const samples = [{}];
      expect(() => InputValidatorService.validateSamples(samples)).toThrowError(
        'Model validation failed for sample at index 0: {}. Ensure all required properties are present and valid.'
      );
    });
  });

  describe('validateSummary', () => {
    it('should pass validation if summary is valid', () => {
      (InputValidators.isValidSummary as any).mockReturnValue(true);

      const summary = { summary: 'valid' };
      expect(() =>
        InputValidatorService.validateSummary(summary)
      ).not.toThrow();
    });

    it('should throw error if summary model validation fails', () => {
      (InputValidators.isValidSummary as any).mockReturnValue(false);

      const summary = { summary: 'invalid' };
      expect(() => InputValidatorService.validateSummary(summary)).toThrowError(
        'Model validation failed for summary: {"summary":"invalid"}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if summary is null', () => {
      (InputValidators.isValidSummary as any).mockReturnValue(false);

      const summary = null;
      expect(() => InputValidatorService.validateSummary(summary)).toThrowError(
        'Model validation failed for summary: null. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if summary is an empty object', () => {
      (InputValidators.isValidSummary as any).mockReturnValue(false);

      const summary = {};
      expect(() => InputValidatorService.validateSummary(summary)).toThrowError(
        'Model validation failed for summary: {}. Ensure all required properties are present and valid.'
      );
    });
  });
});
