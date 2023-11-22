export const idlFactory = ({ IDL }) => {
  const TimeDataInput = IDL.Record({
    'month' : IDL.Nat32,
    'date' : IDL.Nat32,
    'year' : IDL.Nat32,
  });
  const TimeData = IDL.Record({
    'day' : IDL.Nat32,
    'month' : IDL.Nat32,
    'year' : IDL.Nat32,
  });
  return IDL.Service({
    'ageCalculate' : IDL.Func([TimeDataInput, TimeDataInput], [TimeData], []),
  });
};
export const init = ({ IDL }) => { return []; };
