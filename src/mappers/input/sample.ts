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
    sampleType: getSampleType(sample),
    data: sample.data,
  };
}

type SampleType = IntermediateModels.Sample['sampleType'];

function getSampleType(sample: InputModels.Sample): SampleType {
  return Number(sample['sample-type']) as SampleType;
}
