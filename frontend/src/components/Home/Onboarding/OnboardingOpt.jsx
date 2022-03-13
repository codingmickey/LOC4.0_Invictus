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
    minWidth: 255,
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
    fontSize: '2rem',
    color: '#fff',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'Poppins',
    color: '#fff',
    opacity: 0.8,
    marginTop: '1rem',
    fontWeight: 500,
    fontSize: '1rem',
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
  const styles2 = useStyles({ color: '#0ACDFF' });
  const styles3 = useStyles({ color: '#00CA3C' });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={'Publishing'}
            subtitle={'Plan, create, and schedule content'}
            image={'https://buffer-ui.s3.amazonaws.com/products/publish-card_%402x.jpeg'}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'Make content'}
            subtitle={'Create 3 in 1 content in one click'}
            image={'https://buffer-ui.s3.amazonaws.com/products/start-page-card_%402x.jpeg'}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={'Analyze'}
            subtitle={'Analyze your profile and grow!'}
            image={'https://buffer-ui.s3.amazonaws.com/products/analyze-card_%402x.jpeg'}
          />
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
