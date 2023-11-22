import { ReactNode } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import classes from './Layout.module.css';

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutProvider;
