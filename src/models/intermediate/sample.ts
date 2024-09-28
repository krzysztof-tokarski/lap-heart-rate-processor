import { IntRange, Tagged } from 'type-fest';

/**
 * @example {
    "recordingRate": 5,
    "sampleType": "2",
    "data": "143,151,164,null,173,181,180"
  },
 */
export default interface Sample {
  recordingRate: number;
  sampleType: SampleType;
  data: string;
}

type SampleType = Tagged<IntRange<0, 3>, 'SampleType'>;
