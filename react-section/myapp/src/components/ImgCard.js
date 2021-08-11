import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  PhoneOutlined,
  MailOutlined,
  LanguageOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const ImgCard = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={props.name}
          height="200"
          image={props.url}
          title={props.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontWeight: 700, textAlign: 'center' }}
          >
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <PhoneOutlined fontSize="small" /> Phone: {props.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <MailOutlined fontSize="small" /> Email:{' '}
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>
              <LanguageOutlined fontSize="small" /> URL:{' '}
              <a href={props.url} target="_blank" rel="noreferrer">
                {props.url}
              </a>
            </strong>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ImgCard;
