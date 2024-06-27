export type Props<T> = {
  [K in keyof T]: T[K];
};

export interface Comp {
  template(): HTMLElement;
}
export interface CarName {
  color: string;
  id: number;
  name: string;
}
export interface catUpdate {
  model: string;
  color: string;
  target: HTMLElement;
}

interface time {
  (timeFraction: number): number;
}

interface drawing {
  (progress: number): void;
}

export interface animationFrame {
  timing: time;
  draw: drawing;
  duration: number;
  id: number;
}
