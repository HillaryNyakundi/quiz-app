import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScore from "./pages/FinalScore";
import { Box, Container, Typography } from "@mui/material";
function App() {
  return (
    <Router>
      <Container maxWidth ="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontweight="bold">Quiz App</Typography>
              <Settings/>
            </Route>
        
            <Route path="/questions">
              <Questions/>
            </Route>
        
            <Route path="/score">
              <FinalScore/>
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
