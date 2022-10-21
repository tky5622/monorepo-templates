/* eslint-disable @typescript-eslint/ban-types */
declare namespace ShareModal {
  export interface ShareModalType {
    onClose: () => false
    onUnifiedAccessControlConditionsSelected: () => void
    injectInitialState: boolean
    initialUnifiedAccessControlConditions: null
    initialFlow: null
    initialCondition: null
    initialState: null
    defaultTokens: []
    defaultChain: 'ethereum'
    allowChainSelector: true
    allowMultipleConditions: true
    permanentDefault: false
    chainsAllowed: []
    conditionsAllowed: {}
    isModal: boolean
    injectCSS: boolean
    darkMode: boolean
    allowDevMode: boolean
    cssSubstitution: {}
  }
}
