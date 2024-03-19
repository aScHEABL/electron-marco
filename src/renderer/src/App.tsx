import helldiversLogo from './assets/images/helldivers-logo.webp'

function App(): JSX.Element {
  return (
    <>
      <img alt="logo" className="logo" src={helldiversLogo} />
      <div className="creator">Developed by Defalt</div>
      <p className="tip">
        Press any <code>key</code> to bind shortcuts
      </p>
    </>
  )
}

export default App
