import './styles.css';
import REACT_LOGO_PNG from './react-logo.png';
import REACT_LOGO_SVG from './react-logo.svg';

export const App = () => {
    return <>
        <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
        <img className="img-png" src={REACT_LOGO_PNG} alt="react logo png" />
        <img className="img-svg" src={REACT_LOGO_SVG} alt="react logo png" />
    </>
}