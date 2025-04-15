import './scss/globals.scss'

export const metadata = {
  title: 'RESIST',
  description: 'Fight back.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
          {children}
      </body>
    </html>
  );
}
