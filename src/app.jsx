import LoadingComponent from "@/components/loading";
import ScrollTopComponent from "@/components/scroll-top";
import { useScrollToTop } from "@/hooks/scrollTop";
import { Routers } from "@/routes";
import AlertComponent from "@/components/alert";

function App() {
  useScrollToTop();

  return (
    <>
      <Routers />
      <ScrollTopComponent />
      <LoadingComponent />
      <AlertComponent />
    </>
    
  );
}

export default App;
