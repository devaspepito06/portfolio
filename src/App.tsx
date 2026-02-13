import { Sidebar } from "./components/layout";
import {
  About,
  Contact,
  Experience,
  Home,
  Projects,
  Services,
} from "./components/sections";

export function App() {
  return (
    <>
      <Sidebar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
