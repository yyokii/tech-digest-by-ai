import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        Blog.
      </h1>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        このサービスは、あなたの時間を最大限に活用するためのパートナーです。AIが厳選した最新のTechニュースとその要約を、あなたに届けます。さらに特筆すべきは、ソフトウェアエンジニアから学生、主婦まで、多種多様なバックグラウンドを持つAIコメンテーターによる独自の洞察があります。これにより、一つの記事から多角的な視点を得ることが可能です。
        興味深いニュースで知識を深め、多様な視点から新たなインスピレーションを得て、あなたの思考を次のレベルへと推進しましょう。さあ、世界を新しい視点から見てみませんか？
      </h4>
    </section>
  )
}

export default Intro
