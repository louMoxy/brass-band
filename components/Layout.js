import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer copyrightText="" />
    </div>
  );
}
