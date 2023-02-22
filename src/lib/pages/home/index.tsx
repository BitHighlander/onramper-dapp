import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import SomeText from "./components/SomeText";
import Pubkeys from "./components/Pubkeys";

const Home = () => {
  return (
    <Grid gap={4}>
      <iframe
          style="border-radius: 4px; border: 1px solid #58585f; margin: auto;max-width: 360px"
          src="https://buy.onramper.com"
          height="540px"
          width="360px"
          title="Onramper widget"
          allow="accelerometer; autoplay; camera; gyroscope; payment">
      </iframe>
    </Grid>
  );
};

export default Home;
