import { InputModels, IntermediateModels } from '@/models';

export function mapSamplesInputToIntermediate(
  samples: InputModels.Sample[],
): IntermediateModels.Sample[] {
  return samples.map(mapInputToIntermediate);
}

function mapInputToIntermediate(
  sample: InputModels.Sample,
): IntermediateModels.Sample {
  return {
    recordingRate: sample['recording-rate'],
    sampleType: sample['sample-type'],
    data: sample.data,
  };
}
