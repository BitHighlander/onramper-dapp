import {
  Grid,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid gap={4}>
      <iframe
        src="https://buy.onramper.com?apiKey=pk_prod_OQ4CJ7wEyjVocOy3ibd45TUceLIlZHQlpugRV86g6SY0"
        height="540px"
        width="360px"
        title="Onramper widget"
        allow="accelerometer; autoplay; camera; gyroscope; payment"
      />
    </Grid>
  );
};

export default Home;
