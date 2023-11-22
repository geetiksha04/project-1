import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface TimeData { 'day' : number, 'month' : number, 'year' : number }
export interface TimeDataInput {
  'month' : number,
  'date' : number,
  'year' : number,
}
export interface _SERVICE {
  'ageCalculate' : ActorMethod<[TimeDataInput, TimeDataInput], TimeData>,
}
