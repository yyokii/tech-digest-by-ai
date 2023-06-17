import Container from '../components/container'
import MoreStories from '../components/list-post'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import ListPost from '../components/list-post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <ListPost posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'site', 'link', 'date', 'slug', 'coverImage', 'comments'])

  return {
    props: { allPosts },
  }
}
