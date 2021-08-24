import { Grid } from '@material-ui/core';
import ImgCard from './ImgCard';
import ImgCardData from './ImgCardData';

const ImgCardDisplay = () => {
  const data = ImgCardData.map(card => (
    <ImgCard
      id={card.id}
      name={card.name}
      phone={card.phone}
      email={card.email}
      url={card.url}
    />
  ));

  return (
    <>
      <Grid container spacing={4} style={{ padding: 20 }}>
        {data}
      </Grid>
    </>
  );
};

export default ImgCardDisplay;
