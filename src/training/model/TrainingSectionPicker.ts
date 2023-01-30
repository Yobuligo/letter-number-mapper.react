import { ITrainingProgram } from "./ITrainingProgram";
import { ITrainingSection } from "./ITrainingSection";
import { ITrainingSectionPicker } from "./ITrainingSectionPicker";

interface ITrainingSectionProbabilityRange {
  from: number;
  to: number;
  trainingSection: ITrainingSection;
}

export class TrainingSectionPicker implements ITrainingSectionPicker {
  constructor(private trainingProgram: ITrainingProgram) {}

  next(): ITrainingSection {
    const trainingSectionProbabilityRanges =
      this.getTrainingSectionProbabilityRanges();
    const probability = Math.random() * this.getProbabilityWeightSum();
    for (let i = 0; i < trainingSectionProbabilityRanges.length; i++) {
      const trainingSectionProbabilityRange =
        trainingSectionProbabilityRanges[i];
      if (
        probability >= trainingSectionProbabilityRange.from &&
        probability <= trainingSectionProbabilityRange.to
      ) {
        return trainingSectionProbabilityRange.trainingSection;
      }
    }
    throw new Error(`Error when calculating training section probability`);
  }

  private getTrainingSectionProbabilityRanges(): ITrainingSectionProbabilityRange[] {
    const trainingSectionProbabilityRanges: ITrainingSectionProbabilityRange[] =
      [];
    const probabilityWeightSum = this.getProbabilityWeightSum();
    let probabilityWeight: number = 0;
    this.getFilledTrainingSections().forEach((trainingSection) => {
      const from = (probabilityWeight / probabilityWeightSum) * 100;
      const to =
        ((probabilityWeight + trainingSection.probabilityWeight) /
          probabilityWeightSum) *
        100;
      trainingSectionProbabilityRanges.push({
        from: from,
        to: to,
        trainingSection: trainingSection,
      });
      probabilityWeight = probabilityWeight + trainingSection.probabilityWeight;
    });
    return trainingSectionProbabilityRanges;
  }

  /**
   * Returns the sum of the probability weights of all filled training sections
   */
  private getProbabilityWeightSum(): number {
    let probabilityWeightSum: number = 0;
    this.getFilledTrainingSections().forEach((trainingSection) => {
      probabilityWeightSum += trainingSection.probabilityWeight;
    });
    return probabilityWeightSum;
  }

  private getFilledTrainingSections(): ITrainingSection[] {
    return this.trainingProgram.trainingSections.filter((trainingSection) => {
      return trainingSection.hasNotTrainingSymbols();
    });
  }
}
