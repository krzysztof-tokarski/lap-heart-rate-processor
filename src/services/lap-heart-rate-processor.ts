
import { CONSTANTS } from '@/constants';
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
    if (!this._summary || !this._laps || !this._samples)
      throw new Error('Not all required inputs provided');

    const {
      userId,
      activityType,
      deviceName: device,
      maxHeartRateInBeatsPerMinute,
      durationInSeconds,
    } = this._summary;


    const heartRateSamplesByLapIndex: Record<number, OutputModels.HeartRateSample[]> = {};
    let currentLapIndex = 0;
    let processingSamples = true;

    while(processingSamples) {
      for (let i = 0; i < this._samples.length; i++) {
        if (this._samples[i].sampleType !== CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER)
          continue;

        let validDataCount = 0;

        const indexesOfInputSamplesToTranslateIntoHeartRateSamplesForCurrentLap =
        activityType === CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER ? [i, i++] : [i]

        heartRateSamplesByLapIndex[currentLapIndex] = [];

        indexesOfInputSamplesToTranslateIntoHeartRateSamplesForCurrentLap.forEach(
          sampleIndex => {
            heartRateSamplesByLapIndex[currentLapIndex].push({
              sampleIndex,
              heartRate: Math.floor(this._samples[sampleIndex].data.split(',').reduce((accumulator, currentData) => {
                const parsedData = Number(currentData);
                if (!isNaN(parsedData)) {
                  accumulator += parsedData;
                  validDataCount++;
                } else {
                  console.warn(`Unable to convert sample data to number; data: ${currentData}, sample index: ${sampleIndex}, sample: ${JSON.stringify(this._samples[sampleIndex])}`,)
                  console.trace();
                }

                return accumulator;
              }, 0) / validDataCount)
            })
          }
        )

        currentLapIndex++
      }

      processingSamples = false;
    }

    return {
      userId,
      activityType,
      device,
      maxHeartRateInBeatsPerMinute,
      durationInSeconds,
      laps: this._laps.map(
        ({
          startTimeInSeconds,
          totalDistanceInMeters,
          timerDurationInSeconds,
        }, i) => ({
          startTimeInSeconds,
          totalDistanceInMeters,
          timerDurationInSeconds,
          heartRateSamples: heartRateSamplesByLapIndex[i],
        }),
      ),
    };
  }
}
