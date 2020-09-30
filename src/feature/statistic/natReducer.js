const initialState = {
  AU: 0,
  BR: 0,
  CA: 0,
  CH: 0,
  DE: 0,
  DK: 0,
  ES: 0,
  FI: 0,
  FR: 0,
  GB: 0,
  IE: 0,
  IR: 0,
  NO: 0,
  NL: 0,
  NZ: 0,
  TR: 0,
  US: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "AU":
      return { ...state, AU: state.AU + 1 };
    case "BR": {
      return { ...state, BR: state.BR + 1 };
    }
    case "CA": {
      return { ...state, CA: state.CA + 1 };
    }
    case "CH": {
      return { ...state, CH: state.CH + 1 };
    }
    case "DE": {
      return { ...state, DE: state.DE + 1 };
    }
    case "DK": {
      return { ...state, DK: state.DK + 1 };
    }
    case "ES": {
      return { ...state, ES: state.ES + 1 };
    }
    case "FI": {
      return { ...state, FI: state.FI + 1 };
    }
    case "FR": {
      return { ...state, FR: state.FR + 1 };
    }
    case "GB": {
      return { ...state, GB: state.GB + 1 };
    }
    case "IE": {
      return { ...state, IE: state.IE + 1 };
    }
    case "IR": {
      return { ...state, IR: state.IR + 1 };
    }
    case "NO": {
      return { ...state, NO: state.NO + 1 };
    }
    case "NL": {
      return { ...state, NL: state.NL + 1 };
    }
    case "NZ": {
      return { ...state, NZ: state.NZ + 1 };
    }
    case "TR": {
      return { ...state, TR: state.TR + 1 };
    }
    case "US": {
      return { ...state, US: state.US + 1 };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
}
