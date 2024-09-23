import { InputModels } from '@/models';

export default function isValidLaps(laps: InputModels.Lap[]): boolean {
  return !!laps.length;
}
