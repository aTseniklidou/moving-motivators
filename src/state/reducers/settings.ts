import { availableSpaceBreakpoint } from '../../utils/const';
import { windowLoaded } from '../../utils/helpers';
import { SETTINGS_STATE } from '../actions/types';

export interface SettingsState {
  isNavigationOpen: boolean;
  isMotivatorsInfoOpen: boolean;
  isWheelInfoOpen: boolean;
  isResilienceInfoOpen: boolean;
  newsletterPromptTriggered: boolean;
}

const hasAvailableSpace =
  windowLoaded() && window.innerWidth >= availableSpaceBreakpoint;
export const initialState = {
  isNavigationOpen: hasAvailableSpace,
  isMotivatorsInfoOpen: hasAvailableSpace,
  isWheelInfoOpen: hasAvailableSpace,
  isResilienceInfoOpen: hasAvailableSpace,
  newsletterPromptTriggered: false,
};

interface Action {
  type?: string;
  payload?: any;
}

const reducer = (
  state: SettingsState = initialState,
  action: Action = {}
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case SETTINGS_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
