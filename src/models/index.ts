/**
 * TODO: add eslint rule to disable direct imports without namespace prefix
 */

import LapInput from './input/lap';
import SampleInput from './input/sample';
import SummaryInput from './input/summary';

import LapIntermediate from './intermediate/lap';
import SampleIntermediate from './intermediate/sample';
import SummaryIntermediate from './intermediate/summary';

import ActivityOverviewOutput from './output/activity-overview';
import HeartRateSampleOutput from './output/heart-rate-sample';
import LapOutput from './output/lap';

export namespace Input {
  export type Lap = LapInput;
  export type Sample = SampleInput;
  export type Summary = SummaryInput;
}

export namespace Intermediate {
  export type Lap = LapIntermediate;
  export type Sample = SampleIntermediate;
  export type Summary = SummaryIntermediate;
}

export namespace Output {
  export type ActivityOverview = ActivityOverviewOutput;
  export type HeartRateSample = HeartRateSampleOutput;
  export type Lap = LapOutput;
}
