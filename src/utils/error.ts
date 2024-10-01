export const error = (reason: string): never => {
  throw new Error(reason);
};
