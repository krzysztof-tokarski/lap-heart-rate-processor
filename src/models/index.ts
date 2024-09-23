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

import type { ReadonlyDeep } from 'type-fest';

export namespace InputModels {
  export type Lap = ReadonlyDeep<LapInput>;
  export type Sample = ReadonlyDeep<SampleInput>;
  export type Summary = ReadonlyDeep<SummaryInput>;
}

export namespace IntermediateModels {
  export type Lap = ReadonlyDeep<LapIntermediate>;
  export type Sample = ReadonlyDeep<SampleIntermediate>;
  export type Summary = ReadonlyDeep<SummaryIntermediate>;
}

export namespace OutputModels {
  export type ActivityOverview = ReadonlyDeep<ActivityOverviewOutput>;
  export type HeartRateSample = ReadonlyDeep<HeartRateSampleOutput>;
  export type Lap = ReadonlyDeep<LapOutput>;
}
