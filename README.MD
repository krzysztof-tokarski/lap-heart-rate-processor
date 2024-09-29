# Lap Heart Rate Processor

A library for processing sports computer data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Installation

To install the `lap-heart-rate-processor` package, follow these steps:

1. **Build the Package:**

   Run the following command to generate a `.tgz` file:

   ```bash
   npm run package
   ```

2. **Copy the Package:**

   Copy the generated .tgz file to the root of your project.

3. **Install the Package:**

   Run the following command to add the package to your project:

   ```bash
   npm install ./lap-heart-rate-processor-{versionName}.tgz
   ```

   Replace `{versionName}` with the actual version number of the package.

## Usage

```ts
import { LapHeartRateProcessor } from "lap-heart-rate-processor";

const processor = new LapHeartRateProcessor();
processor.loadSummary(data); // Load summary data
processor.loadLaps(data); // Load laps data
processor.loadSamples(data); // Load samples data
const overview = processor.process(); // Process the data
```

## API

### LapHeartRateProcessor

#### Methods

- `loadSummary(data: InputModels.Summary): void`
  Loads summary data into the processor.

- `loadLaps(data: InputModels.Lap[]): void`
  Loads lap data into the processor.

- `loadSamples(data: InputModels.Sample[]): void`
  Loads sample data into the processor.

- `process(): OutputModels.ActivityOverview`
  Processes the loaded data and returns an overview of the activity.
