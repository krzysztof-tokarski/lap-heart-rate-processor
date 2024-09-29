import { InputModels } from '@/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isValidLap(obj: any): obj is InputModels.Lap {
  return (
    !!obj &&
    typeof obj.startTimeInSeconds === 'number' &&
    typeof obj.airTemperatureCelsius === 'number' &&
    typeof obj.heartRate === 'number' &&
    typeof obj.totalDistanceInMeters === 'number' &&
    typeof obj.timerDurationInSeconds === 'number'
  );
}
