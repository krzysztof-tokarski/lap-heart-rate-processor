import { InputMappers } from '@/mappers';
import { InputModels, IntermediateModels, OutputModels } from '@/models';
import { HeartRateSampleService } from './services/heart-rate-sample';
import { InputValidatorService } from './services/input-validator';

export class LapHeartRateProcessor {
  private _summary!: IntermediateModels.Summary;
  private _laps!: IntermediateModels.Lap[];
  private _samples!: IntermediateModels.Sample[];

  public loadSummary(data: InputModels.Summary): void {
    InputValidatorService.validateSummary(data);
    this._summary = data;
  }

  public loadLaps(data: InputModels.Lap[]): void {
    InputValidatorService.validateLaps(data);
    this._laps = data;
  }

  public loadSamples(data: InputModels.Sample[]): void {
    InputValidatorService.validateSamples(data);
    this._samples = InputMappers.mapSamplesInputToIntermediate(data);
  }

  public process(): OutputModels.ActivityOverview {
    if (!this._summary || !this._laps || !this._samples)
      throw new Error('Not all required inputs provided');

    const {
      userId,
      activityType,
      deviceName: device,
      maxHeartRateInBeatsPerMinute,
      durationInSeconds,
    } = this._summary;

    const heartRateSamplesByLapIndex =
      HeartRateSampleService.getHeartRateSamplesByLapIndex(
        this._samples,
        activityType
      );

    return {
      userId,
      activityType,
      device,
      maxHeartRateInBeatsPerMinute,
      durationInSeconds,
      laps: this._laps.map(
        (
          { startTimeInSeconds, totalDistanceInMeters, timerDurationInSeconds },
          i
        ) => ({
          startTimeInSeconds,
          totalDistanceInMeters,
          timerDurationInSeconds,
          heartRateSamples: heartRateSamplesByLapIndex[i],
        })
      ),
    };
  }
}
