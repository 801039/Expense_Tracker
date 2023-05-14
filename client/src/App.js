import React, { useState , useMemo, useContext , createContext} from "react";
import styled from "styled-components";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import  Incomes from "./components/Incomes/Incomes";
import  Expences from "./components/Expences/Expences";
import {useGlobalContext} from "./context/globalContext";




function App() {

  const [active, setActive] = React.useState(1);

  const global = useGlobalContext();
  console.log(global);
  
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard /> 
      case 2:
        return <Dashboard /> 
      case 3:
        return <Incomes />
        case 4:
        return <Expences />
      default:
        return <Dashboard />
    }
  }
  
  const orbMemo  = useMemo(() => {
    return <Orb/>
  }, []);

  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main{
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border-radius: 32px;
    border:  3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    overflow: auto; 
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default App;