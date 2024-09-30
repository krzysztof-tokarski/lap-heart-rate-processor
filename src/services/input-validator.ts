/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputValidators } from '@/validators';

export class InputValidatorService {
  public static validateLaps(laps: any[]): void {
    laps.forEach((lap, index) => {
      if (!InputValidators.isValidLap(lap)) {
        throw new Error(this.createModelErrorMessage('lap', index, lap));
      }
    });

    if (!InputValidators.isValidLaps(laps)) {
      throw new Error(this.createModelErrorMessage('laps array', null, laps));
    }
  }

  public static validateSamples(samples: any[]): void {
    samples.forEach((sample, index) => {
      if (!InputValidators.isValidSample(sample)) {
        throw new Error(this.createModelErrorMessage('sample', index, sample));
      }
    });
    if (!InputValidators.isValidLaps(samples)) {
      throw new Error(
        this.createModelErrorMessage('samples array', null, samples)
      );
    }
  }

  public static validateSummary(summary: any): void {
    if (!InputValidators.isValidSummary(summary)) {
      throw new Error(this.createModelErrorMessage('summary', null, summary));
    }
  }

  private static createModelErrorMessage(
    type: string,
    index: number | null,
    data: any
  ): string {
    return index !== null
      ? `Model validation failed for ${type} at index ${index}: ${JSON.stringify(
          data
        )}. Ensure all required properties are present and valid.`
      : `Model validation failed for ${type}: ${JSON.stringify(
          data
        )}. Ensure all required properties are present and valid.`;
  }
}
