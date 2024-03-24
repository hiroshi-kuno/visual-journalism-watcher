import MainContainer from "./components/templates/MainContainer";
import AppContext from "./context/AppContext";
import SideColumnDesktop from "./components/molecules/SideColumnDesktop";
import SideColumnMobile from "./components/molecules/SideColumnMobile";

function App() {
  return (
    <AppContext>
      <SideColumnDesktop />
      <SideColumnMobile />
      <div className="container">
        <MainContainer />
      </div>
    </AppContext>
  );
}

export default App;
