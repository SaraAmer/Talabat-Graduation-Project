import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import PaginationMenu from './pagination';
import restaurantList from '../../restaurantList';
import Restaurants from './Restaurants';
import React, {useState} from 'react';

function Offers() {



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


    return(
        <div>

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
    );

}
export default Offers;