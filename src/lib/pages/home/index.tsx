import {
  Grid,
} from "@chakra-ui/react";

import Pubkeys from "./components/Pubkeys";

const Home = () => {
  return (
    <Grid gap={4}>
      <Pubkeys />
    </Grid>
  );
};

export default Home;
