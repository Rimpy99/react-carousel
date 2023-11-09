import Carousel from "./components/Carousel";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Carousel/>
    </Box>
  );
}

export default App;
