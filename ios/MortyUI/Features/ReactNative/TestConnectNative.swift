import Foundation
import React

@objc(TestConnectNativeModule)
class TestConnectNativeModule: NSObject {
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc
    func sendMessageToNative(_ rnMessage: String) {
        print("This log is from swift: \(rnMessage)")
    }

    @objc
    func sendCallbackToNative(_ rnCallback: RCTResponseSenderBlock) {
        rnCallback(["A greeting from swift"])
    }

    @objc
    func goToSecondViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
        // TODO
        }
    }

    @objc
    func dismissViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = RNViewManager.sharedInstance.bridge?.uiManager.view(forReactTag: reactTag) {
                let reactNativeVC: UIViewController! = view.reactViewController()
                reactNativeVC.dismiss(animated: true, completion: nil)
            }
        }
    }
}
