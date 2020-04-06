import React from 'react';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { categories } from '../../products_data';
const style = { 'display': 'inline-flex', 'verticalAlign': 'middle' };
const CartItem = ({id, name, price, category, units, addToCartAction, removeFromCartAction}) => {
    return(
        <Card variant="outlined">
            <CardContent>
                <Grid
                container
                direction="row"
                justify="space-between" 
                alignItems="center"
                >
                    <Grid align="start" item xs={6} sm={6}>
                        <Typography color="textPrimary" display="block" variant="subtitle1">{name}</Typography>
                        <Typography color="textSecondary" display="block" variant="subtitle2" >{'Price: ' + price + ' INR'}</Typography>
                        <Typography color="textPrimary" display="block" variant="subtitle2" >{'Type: ' + categories[category]}</Typography>
                    </Grid>
                    <Grid item align="end" xs={6} sm={6}>
                        <p>Quantity: <AddCircle style={style} onClick={() => addToCartAction({id, name, price, category, 'units': 1})} /> <b> { units } </b> <RemoveCircle style={style} onClick={() => removeFromCartAction({id, name, price, category, 'units': 1})}  /></p>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );    
}

export default CartItem;