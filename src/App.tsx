import Drawer from "./components/Drawer";
import Button from "./components/Button";
import Paschalion from "./components/Paschalion";

function App() {
  return (
    <>
      <div className="sticky top-0 w-full bg-primary text-primary-content">
        <div className="navbar bg-primary">
          <div className="navbar-start">
            <Drawer />
          </div>

          <div className="navbar-center">
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>Month</Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_left.svg" alt="chevron_left" />
            </Button>
            <Button onClick={() => console.log("Clicked")}>Year</Button>
            <Button onClick={() => console.log("Clicked")}>
              <img src="./img/chevron_right.svg" alt="chevron_right" />
            </Button>
          </div>

          <div className="navbar-end">
            <Paschalion />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
