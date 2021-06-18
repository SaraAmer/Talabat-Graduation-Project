import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import restaurantList from '../restaurantList'

import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Restaurants from './restaurants-client/Restaurants';
import Restaurants from './restaurants-client/Restaurants'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import PaginationMenu from './restaurants-client/pagination';
import Search from './restaurants-client/Search';
import Title from './restaurants-client/Title';


function AllRestaurants(){

const useStyles = makeStyles((theme) => ({
  root: {
      '& > *': {
          marginTop: theme.spacing(1),
         
      },
  },
}));


const classes = useStyles();
  const [rests, setRests]= useState(restaurantList);
    //setRests(...restaurantList);
    const [currentPage, setCurrentPage] =useState(1);
    const [restsPerPage, setRestPerPage] =useState(10);

    const indexOfLastRest = currentPage * restsPerPage;
    const indexOfFirstRest = indexOfLastRest - restsPerPage;
    const currentRests = rests.slice(indexOfFirstRest, indexOfLastRest);
   

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    
    <div className="all-restaurants">
    <div className="content">
    <Title/>
    <Search/>
    <Restaurants rests={currentRests} />
    <div className="pagination justify-content-md-center">
    <div className={classes.root}>
<PaginationMenu
        restsPerPage={restsPerPage}
        totalRests={restaurantList.length}
        paginate={paginate}
        variant="outlined"
         shape="rounded" 
         navigationVariant="icon" 
    
/>
</div>


	 
    </div>
    </div>
	 
    </div>
  );
  }


export default AllRestaurants;
