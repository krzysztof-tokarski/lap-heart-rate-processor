import { Input, Intermediate, Output } from '@/models/index';

export class LapHeartRateProcessor {
  private _summary!: Intermediate.Summary;
  private _laps!: Intermediate.Lap[];
  private _samples!: Intermediate.Sample[];

  /**
   *
   * @todo: add validation
   */
  public loadSummary(data: Input.Summary): void {
    this._summary = data;
  }

  /**
   *
   * @todo: add validation
   */
  public loadLaps(data: Input.Lap[]): void {
    this._laps = data;
  }

  /**
   *
   * @todo: add validation
   */
  public loadSamples(data: Input.Sample[]): void {
    this._samples = data;
  }

  public process(): Output.ActivityOverview {
    throw new Error('Not implemented');
  }
}
