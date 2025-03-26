import React from 'react';
import './App.css';
import PageWrapper from '../src/shared/components/page-wrapper';
import Pages from './pages';
import { ThemeProvider } from '../src/assets/theme/index';

function App() {
    return (
        <ThemeProvider>
            <PageWrapper>
                <Pages />
            </PageWrapper>
        </ThemeProvider>
  );
}

export default App;
