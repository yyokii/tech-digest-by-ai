import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import BuyMeACoffee from './buy-me-a-cofee'

const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <Container>
        <div className='py-16 flex flex-col lg:flex-row items-center'>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
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
