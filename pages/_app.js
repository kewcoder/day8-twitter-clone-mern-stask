import { useState, useEffect  } from 'react'
import { Provider, getSession  } from 'next-auth/client'
import '../styles/globals.css'
import SiderbarLeft from './comp/sidebar-left'
import SiderbarRight from './comp/sidebar-right'


export default function App ({ Component, pageProps }) {

  const [ login, setLogin ] = useState('')
  const [ theme, setTheme ] = useState({
    primary: 'primary-teal',
    bg: 'bg-dark',
    font: 'font-sans'
  })
 

  async function getLogin() {
    const session = await getSession()
    setLogin(session)
    localStorage.setItem('login',JSON.stringify(session))
  }

  useEffect(() => {
    getLogin()

  }, [])
  

  return (
    <>

    <div className={'flex '+theme.primary + ' ' + theme.bg + ' ' + theme.font}
    style={{
      height:'100vh',
      width: '100vw',
      overflow:'scroll'
    }}>

      <SiderbarLeft  />

      {/* Next Auth Component */}
      <Provider
            session={pageProps.session}>
              <Component getLogin={getLogin} login={login} {...pageProps} />
       </Provider>
      {/* Next Auth Component */}

      <SiderbarRight  login={login} theme={theme} setTheme={setTheme} />


    </div>
    </>
  )
}