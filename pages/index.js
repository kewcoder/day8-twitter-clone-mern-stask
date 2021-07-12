
import Head from 'next/head'
import Search from './comp/search'
import Story from './comp/story'
import TwetList from './comp/twet-list'

export default function Page() {
  return <>
     <Head>
       <title>Twigram</title>
       <meta name="Description" content="Twitgram"></meta>
     </Head>
     <main className="w-2/4">
       {/* Seach Component */}
       <Search />
       <Story />
       <TwetList />
     </main>
  </>
}