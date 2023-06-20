import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import BuyMeACoffee from './buy-me-a-cofee'

const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <Container>
        <div className='py-12 flex-col items-center'>
          <div className='flex flex-col  justify-center items-center'>
            <img src='/assets/logo.png' alt='Logo' className='inline-block' width='100' />
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className='mx-3 mb-6 font-bold hover:underline'
            >
              View on GitHub
            </a>

            <BuyMeACoffee />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
