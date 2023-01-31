import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Hi, This is Hafid Malik Travel Blog',
    description: 'I will take you across the beautiful Daksum.',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgo2kashmir.com%2Fkashmir%2Fdaksum-details.html&psig=AOvVaw0wSW9ACoTEJLtdOSbOcw9l&ust=1675277767281000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICQ6ZO-8vwCFQAAAAAdAAAAABAE'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
