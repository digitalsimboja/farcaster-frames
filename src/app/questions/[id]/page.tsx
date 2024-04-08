import { config } from '@/config/config'
import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Sign Up!',
    },
  ],
  image: {
    src: `${config.hostUrl}/ninja-2.jpeg`,
  },
  input: {
    text: 'Your Email',
  },
  postUrl: `${config.hostUrl}/questions/2`,
})

export const metadata: Metadata = {
  title: 'Advanced Frame',
  description: 'Another, more advanced frame example',
  openGraph: {
    title: 'Advanced Frame',
    description: 'Another, more advanced frame example',
    images: [`${config.hostUrl}/images/ninja-2.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>Advanced Frame</h1>
    </>
  )
}
