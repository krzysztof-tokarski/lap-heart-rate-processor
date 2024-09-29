/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputValidatorService } from '@/services/input-validator';
import { InputValidators } from '@/validators';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/validators', () => ({
  InputValidators: {
    Model: {
      isValidLap: vi.fn(),
      isValidSample: vi.fn(),
      isValidSummary: vi.fn(),
    },
    BusinessLogic: {
      isValidLaps: vi.fn(),
      isValidSamples: vi.fn(),
      isValidSummary: vi.fn(),
    },
  },
}));

describe('InputValidatorService', () => {
  describe('validateLaps', () => {
    it('should pass validation if all laps are valid', () => {
      (InputValidators.Model.isValidLap as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidLaps as any).mockReturnValue(true);

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).not.toThrow();
    });

    it('should throw error if a lap is invalid', () => {
      (InputValidators.Model.isValidLap as any).mockImplementation(
        (lap: { lap: number }) => lap.lap !== 1
      );

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).toThrowError(
        'Model validation failed for lap at index 0: {"lap":1}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if business logic validation fails', () => {
      (InputValidators.Model.isValidLap as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidLaps as any).mockReturnValue(false);

      const laps = [{ lap: 1 }, { lap: 2 }];
      expect(() => InputValidatorService.validateLaps(laps)).toThrowError(
        'Business logic validation failed for laps. Check the overall data for integrity and business rules.'
      );
    });
  });

  describe('validateSamples', () => {
    it('should pass validation if all samples are valid', () => {
      (InputValidators.Model.isValidSample as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidSamples as any).mockReturnValue(
        true
      );

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() =>
        InputValidatorService.validateSamples(samples)
      ).not.toThrow();
    });

    it('should throw error if a sample is invalid', () => {
      (InputValidators.Model.isValidSample as any).mockImplementation(
        (sample: { sample: number }) => sample.sample !== 1
      );

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() => InputValidatorService.validateSamples(samples)).toThrowError(
        'Model validation failed for sample at index 0: {"sample":1}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if business logic validation fails', () => {
      (InputValidators.Model.isValidSample as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidSamples as any).mockReturnValue(
        false
      );

      const samples = [{ sample: 1 }, { sample: 2 }];
      expect(() => InputValidatorService.validateSamples(samples)).toThrowError(
        'Business logic validation failed for samples. Check the overall data for integrity and business rules.'
      );
    });
  });

  describe('validateSummary', () => {
    it('should pass validation if summary is valid', () => {
      (InputValidators.Model.isValidSummary as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidSummary as any).mockReturnValue(
        true
      );

      const summary = { summary: 'valid' };
      expect(() =>
        InputValidatorService.validateSummary(summary)
      ).not.toThrow();
    });

    it('should throw error if summary model validation fails', () => {
      (InputValidators.Model.isValidSummary as any).mockReturnValue(false);

      const summary = { summary: 'invalid' };
      expect(() => InputValidatorService.validateSummary(summary)).toThrowError(
        'Model validation failed for summary: {"summary":"invalid"}. Ensure all required properties are present and valid.'
      );
    });

    it('should throw error if summary business logic validation fails', () => {
      (InputValidators.Model.isValidSummary as any).mockReturnValue(true);
      (InputValidators.BusinessLogic.isValidSummary as any).mockReturnValue(
        false
      );

      const summary = { summary: 'valid' };
      expect(() => InputValidatorService.validateSummary(summary)).toThrowError(
        'Business logic validation failed for summary. Check the overall data for integrity and business rules.'
      );
    });
  });
});
