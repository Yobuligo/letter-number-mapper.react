import React, { Reducer } from "react";
import { Direction } from "../gameConfig/Direction";
import { Mode } from "../gameConfig/Mode";

export enum GameAction {
  SET_DIRECTION,
  SET_MODE,
  SET_SHOW_RESULT,
}

export type IGameAction =
  | { type: GameAction.SET_DIRECTION; direction: Direction }
  | { type: GameAction.SET_MODE; mode: Mode }
  | { type: GameAction.SET_SHOW_RESULT; showResult: boolean };

export interface IGameState {
  direction: Direction;
  mode: Mode;
  showResult: boolean;
}

export const gameStateReducer: Reducer<IGameState, IGameAction> = (
  state: IGameState,
  action: IGameAction
) => {
  const newState = { ...state };
  switch (action.type) {
    case GameAction.SET_DIRECTION: {
      return newState;
    }
    case GameAction.SET_MODE: {
      return newState;
    }
    case GameAction.SET_SHOW_RESULT: {
      return newState;
    }
    default: {
      return newState;
    }
  }
};

const GameConfigContext = React.createContext({
  showResult: false,
  direction: Direction.NUMBER_TO_LETTER,
  mode: Mode.RANDOM,
});

export default GameConfigContext;
