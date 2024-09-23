import { InputModels } from '@/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isValidSample(obj: any): obj is InputModels.Sample {
  return (
    !!obj &&
    typeof obj.recordingRate === 'number' &&
    typeof obj.sampleType === 'string' &&
    typeof obj.data === 'string'
  );
}
