import isValidLaps from './input/business-logic/is-valid-laps';
import isValidSamples from './input/business-logic/is-valid-samples';
import isValidSummaryBL from './input/business-logic/is-valid-summary';
import isValidLap from './input/model/is-valid-lap';
import isValidSample from './input/model/is-valid-sample';
import isValidSummary from './input/model/is-valid-summary';

export const InputValidators = {
  Model: {
    isValidLap,
    isValidSample,
    isValidSummary,
  },
  BusinessLogic: {
    isValidLaps,
    isValidSamples,
    isValidSummary: isValidSummaryBL,
  },
};
