import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const Image = styled(FastImage)`
  width: 100px;
  aspect-ratio: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: cornflowerblue;
`;

export const ID = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;
