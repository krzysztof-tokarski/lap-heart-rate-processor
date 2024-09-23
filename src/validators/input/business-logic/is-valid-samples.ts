import { InputModels } from '@/models';

export default function isValidSamples(samples: InputModels.Sample[]): boolean {
  return !!samples.length;
}
