import { InputValidators } from './../validators/index';
/* eslint-disable @typescript-eslint/no-explicit-any */

export class InputValidatorService {
  public static validateLaps(laps: any[]): void {
    laps.forEach((lap, index) => {
      if (!InputValidators.Model.isValidLap(lap)) {
        throw new Error(this.createModelErrorMessage('lap', index, lap));
      }
    });

    if (!InputValidators.BusinessLogic.isValidLaps(laps)) {
      throw new Error(this.createBusinessLogicErrorMessage('laps'));
    }
  }

  public static validateSamples(samples: any[]): void {
    samples.forEach((sample, index) => {
      if (!InputValidators.Model.isValidSample(sample)) {
        throw new Error(this.createModelErrorMessage('sample', index, sample));
      }
    });

    if (!InputValidators.BusinessLogic.isValidSamples(samples)) {
      throw new Error(this.createBusinessLogicErrorMessage('samples'));
    }
  }

  public static validateSummary(summary: any): void {
    if (!InputValidators.Model.isValidSummary(summary)) {
      throw new Error(this.createModelErrorMessage('summary', null, summary));
    }

    if (!InputValidators.BusinessLogic.isValidSummary(summary)) {
      throw new Error(this.createBusinessLogicErrorMessage('summary'));
    }
  }

  private static createModelErrorMessage(
    type: string,
    index: number | null,
    data: any,
  ): string {
    return index !== null
      ? `Model validation failed for ${type} at index ${index}: ${JSON.stringify(
          data,
        )}. Ensure all required properties are present and valid.`
      : `Model validation failed for ${type}: ${JSON.stringify(
          data,
        )}. Ensure all required properties are present and valid.`;
  }

  private static createBusinessLogicErrorMessage(type: string): string {
    return `Business logic validation failed for ${type}. Check the overall data for integrity and business rules.`;
  }
}
