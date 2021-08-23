import { AppBar, Collapse, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {useHistory} from 'react-router-dom';
import clsx from "clsx";
import { Link } from 'react-router-dom';
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 250,
      backgroundColor: theme.palette.background.paper,
      marginTop:theme.spacing(-5)
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
       
      },
      drawerOpen: {
        width: drawerWidth,
        backgroundColor:'#253AA3 !important',
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow:'none',
        backgroundColor: "white",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
  }));
function ListItemLink(props) {
return <ListItem button component="a" {...props} />;
}

function SideMenu(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [open, setOpen] = useState(true);
    const [opentag, setOpenTag] = useState(true);
    const [openmaterial, setOpenMaterial] = useState(true)
    const [opencolor, setOpenColor] = useState(true)

    const handleTagClick = () =>{setOpenTag(!opentag)}
    const handleMaterialsClick = () => {setOpenMaterial(!openmaterial)}
    const handleColorClick = () => {setOpenColor(!opencolor)}
    const handleListItemClick = (event, index) => {
        let path = "/alltags"
        console.log(path)
        setSelectedIndex(index)
        props.history.push(path)

      };
      const drawer = (
            <div className={classes.root}>
                <List component="nav" aria-label="secondary mailbox folders" >
                    <ListItemLink href="#simple-list" onClick={handleTagClick}>
                        <ListItemText><span className={classes.listitemhead}>Tags</span></ListItemText>
                        {opentag ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
                    </ListItemLink>
                    <Collapse in={opentag} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>Genric</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItemLink href="#simple-list" onClick={handleMaterialsClick}>
                        <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
                        {openmaterial ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
                    </ListItemLink>
                    <Collapse in={openmaterial} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>Cotton</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>leather</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>lycra</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>plastic</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>polyester</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItemLink href="#simple-list" onClick={handleColorClick}>
                        <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
                        {opencolor ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
                    </ListItemLink>
                    <Collapse in={opencolor} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>All</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>black</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>red</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>yellow</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>green</span></ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText><span className={classes.listitem}>blue</span></ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
       <div >
            <CssBaseline/>
            <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            {/* <IconButton
              color="gray"
              aria-label="open drawer"
              onClick={open==false?handleDrawerOpen : handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButton, {
                // [classes.hide]: open
            
              })}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
            <Drawer
                variant="permanent"
                container={container}
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                //[classes.drawerClose]: !open
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    //[classes.drawerClose]: !open
                })
                }}
                >
                <div className={classes.toolbar}>
                {/* <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                    <ChevronRightIcon style={{color:'white'}} />
                    ) : (
                    <ChevronLeftIcon style={{color:'white'}} />
                    )}
                </IconButton> */}
                </div> 

                {drawer}
            </Drawer>
        </div>
    )
}

export default SideMenu

 
        // const drawer = (
        //     <div className={classes.root}>
        //         <List component="nav" aria-label="secondary mailbox folders" >
        //             <ListItemLink href="#simple-list" onClick={handleTagClick}>
        //                 <ListItemText><span className={classes.listitemhead}>Tags</span></ListItemText>
        //                 {opentag ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
        //             </ListItemLink>
        //             <Collapse in={opentag} timeout="auto" unmountOnExit>
        //                 <List component="div" disablePadding>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>All</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>Genric</span></ListItemText>
        //                     </ListItem>
        //                 </List>
        //             </Collapse>
        //             <ListItemLink href="#simple-list" onClick={handleMaterialsClick}>
        //                 <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
        //                 {openmaterial ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
        //             </ListItemLink>
        //             <Collapse in={openmaterial} timeout="auto" unmountOnExit>
        //                 <List component="div" disablePadding>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>All</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>Cotton</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>leather</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>lycra</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>plastic</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>polyester</span></ListItemText>
        //                     </ListItem>
        //                 </List>
        //             </Collapse>
        //             <ListItemLink href="#simple-list" onClick={handleColorClick}>
        //                 <ListItemText><span className={classes.listitemhead}>Materials</span></ListItemText>
        //                 {opencolor ? <ExpandLess style={{color:'gray'}} /> : <ExpandMore style={{color:'gray'}}/>}
        //             </ListItemLink>
        //             <Collapse in={opencolor} timeout="auto" unmountOnExit>
        //                 <List component="div" disablePadding>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>All</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>black</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>red</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>yellow</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>green</span></ListItemText>
        //                     </ListItem>
        //                     <ListItem button className={classes.nested}>
        //                         <ListItemText><span className={classes.listitem}>blue</span></ListItemText>
        //                     </ListItem>
        //                 </List>
        //             </Collapse>
        //         </List>
        //     </div>
        // )