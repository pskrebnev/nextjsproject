import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/global.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Find perfect property for your needs',
  keywords: 'property, pulse, real estate, rental, sale, buy, rent, sell',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
