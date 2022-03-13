import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { Link } from 'react-router-dom';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center'
    }
  }
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  card: ({ color }) => ({
    minWidth: 220,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`
    }
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem'
    };
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontSize: '2.2rem',
    color: '#fff',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'Poppins',
    color: '#fff',
    opacity: 0.8,
    marginTop: '1rem',
    fontWeight: 500,
    fontSize: '1.25rem',
    textAlign: 'center'
  }
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#f5655b' });
  const styles2 = useStyles({ color: '#28aae1' });
  const styles3 = useStyles({ color: '#0274b3' });
  const styles4 = useStyles({ color: '#4267b2' });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        <Grid item>
          <Link to="/insta-log">
            <CustomCard
              classes={styles}
              title={'Instagram'}
              subtitle={'Business account'}
              image={
                'https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?size=338&ext=jpg'
              }
            />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/twit-log">
            <CustomCard
              classes={styles2}
              title={'Twitter'}
              subtitle={'Profile'}
              image={
                'https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png'
              }
            />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/insta-log">
            <CustomCard
              classes={styles3}
              title={'LinkedIn'}
              subtitle={'Page'}
              image={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'
              }
            />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/insta-log">
            <CustomCard
              classes={styles4}
              title={'Facebook'}
              subtitle={'Page or group'}
              image={'https://www.facebook.com/images/fb_icon_325x325.png'}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
