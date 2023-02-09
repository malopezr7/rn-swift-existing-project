
# Testing RN in SwiftUI Existing project

I've added my project to RN ios folder, created pod file to connect with RN, created RNViewManager to access js bundle and RNViewController to see the ui.
## Features

- Created RN Clean Project
- Created JS Bridge in [src/common/service/TestConnectNative.ts](https://github.com/malopezr7/rn-swift-existing-project/blob/c5b182e887bfcb245cb3e0a354b70b6c604e0547/src/common/service/TestConnectNative.ts#L7)
- Created pod file
- Created NativeBridge and ViewManager [here](https://github.com/malopezr7/rn-swift-existing-project/tree/main/ios/MortyUI/Features/ReactNative)
- Created ViewController, ViewRepresentable and SwiftUIView to show the UI.
- Passing data and added callback from RN to Native and vice versa.


## Deployment

To deploy this project run

Install node dependencies with
```bash
  yarn
```
Install pods
```bash
  cd ios/ && pod install && cd ..
```
Run Metro
```bash
  yarn start
```
Launch with
```zsh
 yarn ios
```


## Related

Here u have the original Swift project

[MortyUI README](https://github.com/Dimillian/MortyUI)

