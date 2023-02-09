import SwiftUI
struct ReactNativeViewRepresentable: UIViewControllerRepresentable {
    typealias UIViewControllerType = ReactNativeViewController
    var initialProperties: [String: Any]

    func makeUIViewController(context: Context) -> ReactNativeViewController {
        let viewController = ReactNativeViewController()
        viewController.initialProperties = initialProperties;
        //additional setup
        return viewController
    }
    func updateUIViewController(_ uiViewController: ReactNativeViewController, context: Context) {
    }
}
