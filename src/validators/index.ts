import isValidLap from './input/is-valid-lap';
import isValidLaps from './input/is-valid-laps';
import isValidSample from './input/is-valid-sample';
import isValidSamples from './input/is-valid-samples';
import isValidSummary from './input/is-valid-summary';
import isValidNumberOfLaps from './intermediate/is-valid-number-of-laps';
import isValidSamplesForIndoorCycling from './intermediate/is-valid-samples-for-indoor-cycling';

export const InputValidators = {
  isValidLap,
  isValidSample,
  isValidSummary,
  isValidLaps,
  isValidSamples,
};

export const IntermediateValidators = {
  isValidSamplesForIndoorCycling,
  isValidNumberOfLaps,
};
