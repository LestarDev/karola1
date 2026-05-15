import './App.css'
import Text from './Text'
import FlowerField from './FlowerField'

function App() {
 

  return (
    <>
      <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title">
            <span>
              Dla Karolki
            </span>
          </div>
          <div className="letter-context">
            16.05.2026
            <Text />
          </div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
    </div>
    
    <FlowerField />

    </>
  )
}

export default App
