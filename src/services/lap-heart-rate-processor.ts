import { InputMappers } from '@/mappers';
import { InputModels, IntermediateModels, OutputModels } from '@/models';
import { InputValidatorService } from './input-validator';

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
    throw new Error('Not implemented');
  }
}
