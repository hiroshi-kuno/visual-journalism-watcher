import MainContainer from "./components/MainContainer";
import AppContext from "./context/AppContext";
import SideColumnDesktop from "./components/SideColumnDesktop";
import SideColumnMobile from "./components/SideColumnMobile";

function App() {
  return (
    <AppContext>
      {/* <SideColumnDesktop />
      <SideColumnMobile /> */}
      <div className="container">
        <MainContainer />
      </div>
    </AppContext>
  );
}

export default App;
