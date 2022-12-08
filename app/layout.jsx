import './globals.css'

import SimpleNav from '../components/SimpleNav/SimpleNav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

        <SimpleNav />

        {children}
        
      </body>
    </html>
  )
}
