import { RoutesComponent } from "./routes";
import { ThemeContenxtProvider } from "./theme";

/**
 * Main function component
 *
 * @return {*} jsx component
 */
function App() {
  return (
    <ThemeContenxtProvider>
      <RoutesComponent />
    </ThemeContenxtProvider>
  );
}

export default App;
