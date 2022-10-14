import "./App.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      {/* <h1>Hello Word!</h1>
      <Button>Submit</Button> */}
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Box bgcolor="yellow" textAlign="center"  >1</Box>
        </Grid>
        <Grid item md={4}>
          <Box bgcolor="blue" textAlign="center" > 2</Box>
        </Grid>
        <Grid item md={4}>
          <Box bgcolor="blue" textAlign="center" > 2</Box>
        </Grid>
        <Grid item md={4}>
          <Box bgcolor="yellow" textAlign="center"  >1</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
