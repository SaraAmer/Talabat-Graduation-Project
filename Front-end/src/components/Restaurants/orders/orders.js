import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderDetails from "./orderDetails"

class Orders extends React.Component{
    
    
    render(){
        createTheme('solarized', {
            text: {
              primary: '#268bd2',
              secondary: '#2aa198',
            },
            background: {
              default: 'white',
            },
            context: {
              background: '#cb4b16',
              text: '#FFFFFF',
            },
            divider: {
              default: '#073642',
            },
            action: {
              button: 'rgba(0,0,0,.54)',
              hover: 'rgba(0,0,0,.08)',
              disabled: 'rgba(0,0,0,.12)',
            },
          });
        const data = [{ id: 1, name: 'Conan the Barbarian',
         address:"5st washonton street" ,price: "50$",quantity:"2",date: '2020/12/15' } ,
         { id: 1, name: 'Conan the Barbarian',
         address:"5st washonton street" ,price: "50$",quantity:"2",date: '2021/12/15' }];
        const columns = [
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
              
            },
            {
                name: 'Address',
                selector: 'address',
                sortable: true,
              
                
            },
            {
                name: 'Price',
                selector: 'price',
                sortable: true,
               
                
            },

            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
                
               
            },
            {
                name: 'Date',
                selector: 'date',
                sortable: true,
               
               
                
            },
            {
               
                cell: () => <div><a className="btn btn-info btn-sm" href="/order/1"  style={{color: "white"}}>Details</a> <button className="btn btn-danger btn-sm" >Details</button> <button className="btn btn-danger btn-sm" >Details</button></div>,
                name: 'Action',
                ignoreRowClick: true,
            },
            ];
        return(<div>
    <DataTable
        title="Orders"
        columns={columns}
        data={data}
        
        
      />
    

        </div>)
    }
}

export default Orders