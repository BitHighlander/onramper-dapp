import {
  Grid,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid gap={4}>
      <iframe
        src="https://buy.onramper.com"
        height="540px"
        width="360px"
        title="Onramper widget"
        allow="accelerometer; autoplay; camera; gyroscope; payment"
      />
    </Grid>
  );
};

export default Home;
