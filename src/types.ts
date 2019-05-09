export type Matrix = { [cls: string]: SuiteResult };
export type Result = { [suite: string]: Matrix };

export interface SuiteResult {
  tp: number;
  fp: number;
  fn: number;
  precision: number;
  recall: number;
  f1: number;
  confusions?: { [intent: string]: number };
  samples?: number;
}
