import './styles.css'
import REACT_LOGO_PNG from './react-logo.png'
import REACT_LOGO_SVG from './react-logo.svg'
import { ClickCounter } from './ClickCounter'

const App = () => {
  const name = 'hekk '
  // const name2 = 'hekk '

  const styleh1 = process.env.NODE_ENV === 'development' ? { color: 'orange' } : { color: 'blue' }
  return (
    <>
      <h1 style={styleh1}>
        Hello React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}{' '}
        {name}
      </h1>
      <img className="img-png" src={REACT_LOGO_PNG} alt="react logo png" />
      <img className="img-svg" src={REACT_LOGO_SVG} alt="react logo png" />
      <ClickCounter />
    </>
  )
}

export { App as default }
