import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Router } from './Router';
import LayoutProvider from './providers/LayoutProvider';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <LayoutProvider>
        <Router />
      </LayoutProvider>
    </MantineProvider>
  );
}

export default App;
