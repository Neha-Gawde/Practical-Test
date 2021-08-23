import { Grid, makeStyles, Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../../index.css'
import { onGetColors } from '../../../redux/Colors/colorAction';
import { onGetMaterials } from '../../../redux/Materials/materialAction';
import { onGetTags } from '../../../redux/Tags/tagsAction';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 150,
        width: "100%"
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%"
    },
    paper3: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%",
        height:200
    },
    paper4: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        
        width: 140,
      },
      textField1: {
        marginLeft: theme.spacing(1),
        
        width: 140,
      },
      control: {
        padding: theme.spacing(2),
      },
}));
function Tags(props) {
    const classes = useStyles();
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(onGetTags())
        dispatch(onGetMaterials())
        dispatch(onGetColors())
    },[])
    const allList = useSelector((state) => {
        return state.tags;
      })
      const materialList = useSelector((state) => {
        return state.materials;
      })
      const colorsList = useSelector((state) => {
        return state.colors;
      })
    const {loading, tags} = allList
    const {loading2, materials} = materialList
    const {loading3, colors} = colorsList
    console.log(tags?.products)
    // console.log(materials)
    // console.log(colors)
    // const materialsbyidfilter = materials?.material?.filter((e)=>props.location.pathname.includes(e.name)).map(el=>(el.id))
    // const materialnamefilter = materials?.material?.filter((e)=>props.location.pathname.includes(e.name)).map(el=>(el.name))
    return (
        <div className="papergrid">
            <Grid container className={classes.root} spacing={3} >
                {tags?.products?.length > 0 ?
                    tags.products.map((el)=>{
                        return (
                        <>
                            <Grid className={classes.control} item xs={12} sm={6} md={4} lg={4}>
                                <div className="image">
                                    <img className="image__img" src={el.image}></img>
                                    <div className="image__overlay">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={5}>
                                        <span className="name">{el.name}</span>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} lg={2}>
                                                {/* <span className="materialname">{materialnamefilter}</span> */}
                                            </Grid>
                                            <Grid item xs={12} lg={2}>
                                            {/* <span className="materialname">{materialcolorfilter}</span> */}
                                            </Grid>
                                            <Grid item xs={12} lg={5}>
                                            
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} lg={12}>
                                            <span className={classes.price}>INR {el.price}.00</span>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} lg={2}>
                                    
                                    </Grid>
                                </Grid>
                            </Grid>
                             
                        </>
                        )
                    })
                    :<p>No products found </p>
                }
            </Grid>
        </div>
    )
}

export default Tags
