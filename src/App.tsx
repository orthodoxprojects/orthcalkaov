function App() {

  return (
    <>
      <div className="sticky top-0 w-full bg-primary text-primary-content">
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-ghost p-0">
                            Menu
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <p className="p-4 font-bold">Language</p>
                            <select className="select select-bordered w-full max-w-xs" id="selectLanguage" defaultValue={'en'}>
                                <option value="en">English</option>
                                <option value="ro">Română</option>
                                <option value="el">Ελληνικά</option>
                            </select>
                            <p className="p-4 font-bold">Calendar</p>
                            <select className="select select-bordered w-full max-w-xs" id="selectCalendar" defaultValue={'new'}>
                                <option value="old">Old Style</option>
                                <option value="new">New Style</option>
                            </select>
                            <p className="p-4 font-bold">Fasting</p>
                            <select className="select select-bordered w-full max-w-xs" id="selectFasting" defaultValue={'layman'}>
                                <option value="layman">Laymen</option>
                                <option value="monk">Monks</option>
                            </select>
                        </div>
                    </div>
                </div>
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