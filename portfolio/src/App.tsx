import { useRef } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Carrossel from "./components/Carrossel";
import Forms from "./components/Forms";

type HomeProps = {
  ref: React.RefObject<HTMLElement>;
};

function App() {
  const home: HomeProps["ref"] = useRef(null!);
  const about: HomeProps["ref"] = useRef(null!);
  const carrosel: HomeProps["ref"] = useRef(null!);

  return (
    <>
      <Home ref={home} destination={about}></Home>
      <About ref={about} destination={carrosel}></About>
      <Carrossel ref={carrosel} />
      <Forms />
    </>
  );
}

export default App;
