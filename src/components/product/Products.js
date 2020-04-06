import React from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';

import { categories } from '../../products_data';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
};

class Products extends React.Component {
    addToCart = (product) => {
      this.props.addToCartAction(product);
    }

    addToProducts = (product) => {
      this.props.addToProductsAction(product);
    }

    render() {
        const { products } = this.props;

        return (
          <Container maxWidth="md">
            <br />
            <Grid container>
              <Grid item xs={12}>
                <MaterialTable
                  title="Products Manager"
                  icons={tableIcons}
                  columns={[
                    { title: 'Name', field: 'name', filtering: false },
                    { title: 'Price', field: 'price', type: 'numeric', filtering: false },
                    {
                      title: 'Category',
                      field: 'category',
                      lookup: categories,
                    },
                  ]}
                  data={products}        
                  options={{
                    filtering: true,
                    search: false,
                    paging: false,
                    actionsColumnIndex: -1,
                  }}
                  actions={[
                    {
                      icon: ShoppingCart,
                      tooltip: 'Add to Cart',
                      onClick: (event, row) => {
                        let product = {'id': row.id, 'name': row.name, 'price': row.price, 'category': row.category, 'units': 1};
                        this.addToCart(product);
                      }
                    }
                  ]}
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        let maxId = 0;
                        debugger;

                        products.forEach(p => {
                          let id = parseInt(p.id);
                          
                          if (id > maxId) {
                            maxId = id;
                          }
                        });

                        maxId = maxId + 1;

                        setTimeout(() => {
                          {
                            let product = {'id': maxId, 'name': newData.name, 'price': newData.price, 'category': newData.category };
                            this.addToProducts(product);
                          }
                          resolve()
                        }, 1000)
                      }),
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        )
    }

}

export default Products;