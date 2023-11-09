export enum Channels {
  InstallProgress = 'InstallProgress',
  IsGameInstalled = 'IsGameInstalled',
  LaunchGame = 'launch-game',
  InstallGame = 'install-game',
  GetJson = 'GetJson',
  GetJsonResponse = 'GetJsonResponse',
}
export type Channel = keyof typeof Channels;

export type SteppedProgressType = (
  step: number,
  totalStep: number,
  received: number,
  total: number
) => void;

export type ProgressType = (received: number, total: number) => void;
