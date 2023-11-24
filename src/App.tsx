import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Router } from './Router';
import LayoutProvider from './providers/LayoutProvider';
import { theme } from './theme';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <LayoutProvider>
        <Router />
      </LayoutProvider>
    </MantineProvider>
  );
}

export default App;
