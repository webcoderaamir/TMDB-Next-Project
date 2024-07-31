
import Wrapper from '@/components/wrapper/wrapper'
import './globals.css'

export const metadata = {
  title: 'TMDB Next.JS',
  description: 'TMDB clone by aamir',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
