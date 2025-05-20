import './globals.css';
import ToasterProvider from '@/components/notification/ToasterProvider';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className="bg-white dark:bg-zinc-900 text-black dark:text-white">
          <ToasterProvider />
          {children}
        </body>
      </html>
    );
}
