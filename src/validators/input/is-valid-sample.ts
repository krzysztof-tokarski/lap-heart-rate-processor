import { InputModels } from '@/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isValidSample(obj: any): obj is InputModels.Sample {
  return (
    !!obj &&
    typeof obj['recording-rate'] === 'number' &&
    typeof obj['sample-type'] === 'string' &&
    typeof obj.data === 'string'
  );
}
