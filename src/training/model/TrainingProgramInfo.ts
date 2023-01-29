import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingProgramInfo } from "./ITrainingProgramInfo";
import { ITrainingSection } from "./ITrainingSection";

interface ITrainingSectionProbabilityRange {
  from: number;
  to: number;
  trainingSection: ITrainingSection;
}

export class TrainingProgramInfo implements ITrainingProgramInfo {
  private trainingSectionProbabilityRanges: ITrainingSectionProbabilityRange[] =
    [];

  constructor(private trainingProgram: ITrainingProgram) {
    this.calculateTrainingSectionProbabilityRange();
  }

  public get probabilityWeightSum(): number {
    let probabilityWeight: number = 0;
    this.trainingProgram.trainingSections.forEach((trainingSection) => {
      probabilityWeight = probabilityWeight + trainingSection.probabilityWeight;
    });
    return probabilityWeight;
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
    const probabilityWeightSum = this.probabilityWeightSum;
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
