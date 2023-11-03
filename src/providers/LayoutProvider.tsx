import { ReactNode } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutProvider;
