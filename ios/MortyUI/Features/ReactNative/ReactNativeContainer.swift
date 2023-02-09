import UIKit
import React

class ReactNativeViewController: UIViewController {
    var initialProperties: [String: Any] = [:]

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func loadView() {
        loadReactNativeView()
    }

    func loadReactNativeView() {
        let rootView = RNViewManager.sharedInstance.viewForModule(
            "MortyUI",
            initialProperties: initialProperties)
        
        self.view = rootView
    }
}
