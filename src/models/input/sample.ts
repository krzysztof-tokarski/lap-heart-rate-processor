/**
 * @example {
    "recording-rate": 5,
    "sample-type": "2",
    "data": "143,151,164,null,173,181,180"
  },
 */
export default interface SampleInput {
  'recording-rate': number;
  'sample-type': string;
  data: string;
}
