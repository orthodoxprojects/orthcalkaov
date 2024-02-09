import Drawer from "./components/Drawer"

function App() {

  return (
    <>
      <div className="sticky top-0 w-full bg-primary text-primary-content">
        <div className="navbar bg-primary">
          <div className="navbar-start">
            <Drawer />
          </div>

          <div className="navbar-center">
            Month and Year
          </div>

          <div className="navbar-end">
            Paschalion
          </div>
        </div>
      </div>
    </>
  )
}

export default App