import React, { useState } from 'react';
import { makeStyles, withStyles,Tab,Tabs, Typography, Box, IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MainRoutes from '../../routes/MainRoutes';
import SideBarC from './SiderBarC';
import { Link } from 'react-router-dom';
const AntTabs = withStyles({
    root: {
      backgroundColor: "#ECECEC",
      paddingBottom:-50,
    },
    indicator: {
      backgroundColor: "#ECECEC"
    }
  })(Tabs);
  
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
          color: "black",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        color: "black",
        opacity: 1
      },
      "&$selected": {
        color: "black",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: "black"
      }
    },
    selected: {}
  }))((props) => <Tab disableRipple {...props} />);
  const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1
    },
    padding: {
      padding: theme.spacing(3)
    },
    demo1: {
      backgroundColor: theme.palette.background.paper
    },
    demo2: {
      backgroundColor: "#2e1534"
    },
    carticon:{
      marginLeft:theme.spacing(120)
    }
  }));
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }
  
function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div style={{marginTop:10}}>
            <h3 style={{textTransform:'uppercase', color:'black', marginTop:10}}><strong>{props.name}</strong></h3>
            <div className={classes.demo1}>
              <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="All Products"  {...a11yProps(0)} />
                <AntTab label="Featured Products" {...a11yProps(1)}  />
                <IconButton>
                  <ShoppingCartIcon className={classes.carticon}/>
                </IconButton>
              </AntTabs>
       
              {/* <TabPanel value={value} index={1}>
                <Link  exact to={{pathname:"/featuredProducts"}}></Link>
              </TabPanel> */}
            </div>
        </div>
    )
}

export default Header
