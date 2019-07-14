import React from 'react';
import './Footer.css'

//Material UI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = {
  toolbarTitle: {
    flexGrow: 1,
  },
};

const Footer = () => (
  <Container component="main" maxWidth="lg">
  <Typography color="inherit" noWrap styles={styles.toolbarTitle}>
    <footer>
      {/* &copy; 2019 WorshipTunes */}
  </footer>
  </Typography>
  </Container>
);

export default Footer;
