import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSectionPicker } from "./ITrainingSectionPicker";

interface ITrainingSectionProbabilityRange {
  from: number;
  to: number;
  trainingSection: ITrainingSection;
}

export class TrainingSectionPicker implements ITrainingSectionPicker {
  private trainingSectionProbabilityRanges: ITrainingSectionProbabilityRange[] =
    [];

  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSection {
    throw new Error("Method not implemented.");
  }

  findTrainingSectionByProbability(probability: number): ITrainingSection {
    for (let i = 0; i < this.trainingSectionProbabilityRanges.length; i++) {
      const trainingSectionProbabilityRange =
        this.trainingSectionProbabilityRanges[i];
      if (
        probability >= trainingSectionProbabilityRange.from &&
        probability <= trainingSectionProbabilityRange.to
      ) {
        return trainingSectionProbabilityRange.trainingSection;
      }
    }
    throw new Error(`Error when calculating training section probability`);
  }  

  private calculateTrainingSectionProbabilityRange() {
    const probabilityWeightSum =
      this.trainingProgram.trainingProgramInfo.probabilityWeightSum;
    let probabilityWeight: number = 0;
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      const from = (probabilityWeight / probabilityWeightSum) * 100;
      const to =
        ((probabilityWeight + trainingSection.probabilityWeight) /
          probabilityWeightSum) *
        100;
      const trainingSectionProbabilityRange: ITrainingSectionProbabilityRange =
        {
          from: from,
          to: to,
          trainingSection: trainingSection,
        };
      this.trainingSectionProbabilityRanges.push(
        trainingSectionProbabilityRange
      );
      probabilityWeight = probabilityWeight + trainingSection.probabilityWeight;
    });
  }
}
