import {
  ActivityOverview,
  LapInput,
  SampleInput,
  SummaryInput,
} from '@/models/index';

/**
 * @todo: consider name change as well as project name change
 */
export class LapHeartRateAnalyser {
  private _summary!: SummaryInput;
  private _laps!: LapInput[];
  private _samples!: SampleInput[];

  /**
   *
   * @todo: add validation
   */
  public loadSummary(data: SummaryInput): void {
    this._summary = data;
  }

  /**
   *
   * @todo: add validation
   */
  public loadLaps(data: LapInput[]): void {
    this._laps = data;
  }

  /**
   *
   * @todo: add validation
   */
  public loadSamples(data: SampleInput[]): void {
    this._samples = data;
  }

  public process(): ActivityOverview {
    throw new Error('Not implemented');
  }
}
