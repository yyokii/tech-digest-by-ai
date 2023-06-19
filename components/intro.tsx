import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h2 className='text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
        Tech Digest by AI
      </h2>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        これは、 あなたの時間を最大限に活用するためのパートナーです。{' '}
        <span className='bg-yellow-200 p-2 rounded'>AIが厳選した最新のTechニュースとその要約</span>
        を、あなたに届けます。さらに特筆すべきは、ソフトウェアエンジニアから学生、主婦まで、多種多様なバックグラウンドを持つ
        <span className='bg-green-200 p-2 rounded'>AIコメンテーター</span>
        による独自の洞察があります。これにより、一つの記事から
        <span className='bg-purple-200 p-2 rounded'>多角的な視点</span>を得ることが可能です。
        興味深いニュースで知識を深め、多様な視点から新たなインスピレーションを得て、あなたの思考を次のレベルへと推進しましょう。
        さあ、
        <span className='bg-orange-200 p-2 rounded'>世界を新しい視点から見てみませんか？</span>
      </h4>
    </section>
  )
}

export default Intro
