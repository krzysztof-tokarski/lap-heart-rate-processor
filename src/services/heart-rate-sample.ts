import { CONSTANTS } from '@/constants';
import { IntermediateModels, OutputModels } from '@/models';

export class HeartRateSampleService {
  /**
   * @param activityType activityType field from {@link IntermediateModels.Summary}
   */
  public static getHeartRateSamplesByLapIndex(
    samples: IntermediateModels.Sample[],
    activityType: string
  ): Record<number, OutputModels.HeartRateSample[]> {
    const heartRateSamplesByLapIndex: Record<
      number,
      OutputModels.HeartRateSample[]
    > = {};

    let currentLapIndex = 0;
    let iteratingThroughSamples = true;

    while (iteratingThroughSamples) {
      for (let i = 0; i < samples.length; i++) {
        if (
          samples[i].sampleType !==
          CONSTANTS.SAMPLE.HEART_RATE_SAMPLE_IDENTIFIER
        )
          continue;

        let validDataCount = 0;

        const indexesOfInputSamplesToTranslateIntoHeartRateSamplesForCurrentLap =
          activityType === CONSTANTS.LAP.INDOOR_CYCLING_ACTIVITY_TYPE_IDENTIFIER
            ? [i, i++]
            : [i];

        heartRateSamplesByLapIndex[currentLapIndex] = [];

        indexesOfInputSamplesToTranslateIntoHeartRateSamplesForCurrentLap.forEach(
          (sampleIndex) => {
            heartRateSamplesByLapIndex[currentLapIndex].push({
              sampleIndex,
              heartRate: Math.floor(
                samples[sampleIndex].data
                  .split(',')
                  .reduce((accumulator, currentData) => {
                    const parsedData = Number(currentData);

                    if (!isNaN(parsedData)) {
                      accumulator += parsedData;
                      validDataCount++;
                    } else {
                      console.warn(
                        `Unable to convert sample data to number; data: ${currentData}, sample index: ${sampleIndex}, sample: ${JSON.stringify(
                          samples[sampleIndex]
                        )}`
                      );
                      console.trace();
                    }

                    return accumulator;
                  }, 0) / validDataCount
              ),
            });
          }
        );

        currentLapIndex++;
      }

      iteratingThroughSamples = false;
    }

    return heartRateSamplesByLapIndex;
  }
}
