const APLVN_SDK_ID = "YOUR_SDK_KEY_HERE";

document.addEventListener("deviceready", () => {
  const AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
  // AppLovinMAX.setVerboseLogging(true)
  AppLovinMAX.initialize(APLVN_SDK_ID);
  AppLovinMAX.showMediationDebugger()
});