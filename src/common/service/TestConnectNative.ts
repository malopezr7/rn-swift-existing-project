import {NativeModules, Platform} from 'react-native';

const testConnectNative = NativeModules.TestConnectNative;

console.log('testConnectNative', testConnectNative);

const TestConnectNative = {
  sendMessage: (msg: any) => {
    testConnectNative.sendMessageToNative(msg);
  },

  sendCallback: (callback: any) => {
    testConnectNative.sendCallbackToNative(callback);
  },

  exitRN: (tag: any) => {
    if (Platform.OS === 'ios') {
      testConnectNative.dismissViewController(tag);
    } else {
      testConnectNative.finishActivity();
    }
  },
};

export default TestConnectNative;
