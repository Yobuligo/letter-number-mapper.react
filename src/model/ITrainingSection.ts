import { ITrainingSymbol } from "./ITrainingSymbol";

export interface ITrainingSection {
  /**
   * The probabilityWeight is a value that defines the probability of a section to be selected while considering the weight of all sections in sum.
   * Examples:
   * 1. There are three sections with weight 5, 3, 2. In sum the weight is 10. As result the sections get the following probability in percent, 50%, 30%, 20%.
   * 2. The following sections 5, 5, 5, 5 have a complete weight of 20. In percent all sections would have a probability of 25%.
   * 3. The following sections 5, 5, 5, 3, 2 have a complete weight of 20. In percent the sections would have the probabilities 25%, 25%, 25%, 15%, 10%.
   */
  readonly probabilityWeight: number;
  readonly answersTillProgression: number;
  addTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  removeTrainingSymbol(trainingSymbol: ITrainingSymbol): void;
  findAll(): ITrainingSymbol[];
}
