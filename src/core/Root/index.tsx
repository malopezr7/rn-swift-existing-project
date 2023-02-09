import {ThemeProvider} from 'styled-components/native';
import {Platform, UIManager} from 'react-native';
import type {FC} from 'react';
import theme from 'core/theme';
import {Container, Name, Image, ID} from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Root: FC = ({data}: any) => {
  const {name, image, id} = JSON.parse(data);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ID>{id}</ID>
        <Name>{name}</Name>
        <Image source={{uri: image}} />
      </Container>
    </ThemeProvider>
  );
};

const App: FC = props => <Root {...props} />;

export default App;
