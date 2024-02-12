import months from "./assets/lang/others/months.json";
import Drawer from "./components/Drawer";
import Button from "./components/Button";
import Paschalion from "./components/Paschalion";

function App() {
  const getMonthName = (monthIndex: number): string => {
    return months[monthIndex];
  };
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
            <Button onClick={() => console.log("Clicked")}>
              {getMonthName(0)}
            </Button>
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
