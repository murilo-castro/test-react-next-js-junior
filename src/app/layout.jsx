import './globals.css';
import { Inter } from 'next/font/google';
import { TodosContextProvider } from '@/contexts/TodosContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My ToDo List',
  description: 'Management tasks dailys',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosContextProvider>{children}</TodosContextProvider>
      </body>
    </html>
  );
}
