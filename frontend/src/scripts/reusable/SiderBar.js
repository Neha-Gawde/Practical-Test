import { AppBar, Collapse, CssBaseline,MenuItem,Menu, Divider,InputBase, Drawer, IconButton, List, ListItemIcon, 
    ListItemText, makeStyles, Toolbar, Typography, useTheme, withStyles, Grid, Paper } from '@material-ui/core';
  import React, { useEffect, useState } from 'react'
  import MuiListItem  from '@material-ui/core/ListItem';
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import clsx from "clsx";
  import MenuIcon from '@material-ui/icons/Menu';
  import { ExpandLess, ExpandMore, Home } from '@material-ui/icons';
  import { Link, useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
  
  const drawerWidth = 210;
  
  const useStyles = makeStyles((theme) => ({
      root: {
        display: "flex"
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#FFFFFF",
        height:120,
 
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        boxShadow:'none'
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginRight: 36
      },
      hide: {
        display: "none"
      },
      logininfo:{
        [theme.breakpoints.up('lg')]: {
          marginLeft: theme.spacing(100),
          width: 'auto',
        },
        position: 'relative',
   
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerClose: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",

        width:drawerWidth
        //width: theme.spacing(7) + 1,
        // [theme.breakpoints.up("sm")]: {
        //   width: theme.spacing(8) + 1
        // }
      },
      paper4: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      listitem:{
        fontSize:12,
        marginLeft:theme.spacing(8),
        marginTop:theme.spacing(-2)
    },
    listitemhead:{
        fontSize:15,
        marginLeft:theme.spacing(5),
    },
      logo:{
        marginRight:80,
        marginTop:-10
      },
      logo2:{
        marginRight:-15,
        marginTop:-10
      },
      icons:{
        marginLeft:-3,
        height:22,
        width:22
      },
      inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "47ch",
        "&:focus": {
          width: "47ch"
        }
      },
      marginLeft:theme.spacing(-1)
    }
    }));
  const ListItem = withStyles((theme)=>({
      root: {
        "&$selected": {
        //   backgroundColor:"#2BA6FA !important",
          color: "black !important",
          borderRadius:3,
        //   marginLeft:-80,
        //   width:`calc(100% - ${theme.spacing(1.6) + 1}px)`,
          marginRight:10,
          height:40,
        //   "& .MuiSvgIcon-root":{
        //     color:"black",
        //     backgroundColor:'black'
        //   },
    
        },
        // marginLeft:-80,
        // "&:hover" :{
        //   backgroundColor:"#5D6DBB !important",
        //   color: "white !important",
        // },
       
        fontSize:'12px !important',//Insert your required size
        "& .MuiSvgIcon-root":{
          color:"#D4E6F1"
        },  
       color:"black !important"
      },
      selected: {}
    }))(MuiListItem);
    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
        }
        
  function SideBar(){
      const [toggle, setToggle] = useState(false);
      const handleClick = () => setToggle(!toggle);
      const classes = useStyles();
      const dispatch = useDispatch()
      const theme = useTheme();
        const [open, setOpen] = useState(false);
        const [opentag, setOpenTag] = useState(true);
        const [openmaterial, setOpenMaterial] = useState(true)
        const [opencolor, setOpenColor] = useState(true)

    const handleTagClick = () =>{setOpenTag(!opentag)}
    const handleMaterialsClick = () => {setOpenMaterial(!openmaterial)}
    const handleColorClick = () => {setOpenColor(!opencolor)}
      const [selectedIndex, setSelectedIndex] = React.useState(1);
      const [openMaster, setOpenMaster] = React.useState(true);

      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
  
      const onMaster = (event) => {
          handleListItemClick(event, 2);
          setOpenMaster(!openMaster);
      };
  
      const handleListItemClick = (event, index) => {
          setSelectedIndex(index);
      };
      const [anchorEl, setAnchorEl] = React.useState(null);
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleIconClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const profileData = useSelector((state) => {
        return state.profile;
      })
      const history=useHistory();


      const drawer = (
        <div className={classes.root}>
            <List  style={{marginTop:120}} >
                <ListItemLink selected={selectedIndex === 1}  onClick={handleTagClick}>
                    <ListItemText><span className={classes.listitemhead}>Tags</span></ListItemText>
                    {opentag ? <ExpandLess style={{color:'gray', marginLeft:80}} /> : <ExpandMore style={{color:'gray', marginLeft:80}}/>}
                </ListItemLink>
                <Collapse in={opentag} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} component={Link} exact to="/alltags" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} component={Link} exact to="/generics" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>Genric</span></ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItemLink selected={selectedIndex === 4} onClick={handleMaterialsClick}>
                    <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
                    {openmaterial ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
                </ListItemLink>
                <Collapse in={openmaterial} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem selected={selectedIndex === 5}  onClick={(event) => handleListItemClick(event, 5)} component={Link} exact to="/allMaterials" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 6}  onClick={(event) => handleListItemClick(event, 6)} component={Link} exact to="/cotton"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>Cotton</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 7}  onClick={(event) => handleListItemClick(event, 7)} component={Link} exact to="/lycra"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>leather</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 8}  onClick={(event) => handleListItemClick(event, 8)} component={Link} exact to="/lycra"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>lycra</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 9}  onClick={(event) => handleListItemClick(event, 9)} component={Link} exact to="/plastic"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>plastic</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 10}  onClick={(event) => handleListItemClick(event, 10)} component={Link} exact to="/polyester"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>polyester</span></ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItemLink selected={selectedIndex === 10} onClick={handleColorClick}>
                    <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
                    {opencolor ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
                </ListItemLink>
                <Collapse in={opencolor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem selected={selectedIndex === 11} onClick={(event) => handleListItemClick(event, 11)} component={Link} exact to="/allColors" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 12} onClick={(event) => handleListItemClick(event, 12)} component={Link} exact to="/black" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>black</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 13} onClick={(event) => handleListItemClick(event, 13)} component={Link} exact to="/red" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>red</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 14} onClick={(event) => handleListItemClick(event, 14)} component={Link} exact to="/yellow"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>yellow</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 15} onClick={(event) => handleListItemClick(event, 15)} component={Link} exact to="/green"className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>green</span></ListItemText>
                        </ListItem>
                        <ListItem selected={selectedIndex === 16} onClick={(event) => handleListItemClick(event, 16)} component={Link} exact to="/blue" className={classes.nested}>
                            <ListItemText><span className={classes.listitem}>blue</span></ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
      const container = window !== undefined ? () => window().document.body : undefined;
      return (
          <div>
          <CssBaseline/>
          <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
              [classes.appBarShift]: open
              })}
          >
   
            {/* <Header name="mycoolshop.com"/>       */}
          </AppBar>

            <Drawer
              variant="permanent"
              container={container}
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })
              }}
              >
  
              {drawer}
            </Drawer>
  
          </div>
      )
  }
  
  export default SideBar
  