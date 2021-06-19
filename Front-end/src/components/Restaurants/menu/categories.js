import React  from 'react'; 
import "./categories.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faTrash } from '@fortawesome/free-solid-svg-icons'
class Categories extends React.Component{
    constructor(){
        super();
        this.categories=[]
        this.state = {
            display: 'none',
            category:"",
            categories: [],
        }
    }
    async componentWillMount() {
        this.setState({categories: this.props.categories , category:""} )    
    }
    inputHandler=()=>{
        this.setState({display: this.state.display=="none"?"flex":"none"})
        console.log(this.state.display)
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.props.categories.push(this.state.category)
        this.setState({categories: this.props.categories , category:""} )
        console.log(e.target)

    }
    deleteItem=(index)=>{
        console.log("deleted")
        this.props.categories.splice(index,1)
        this.setState({categories: this.props.categories} )


    }
   render(){
   
        return(
            <div>
            
                <div className="categories-items">
                        <h6>
                            Categories
                        </h6>
                        {this.state.categories.map((category , index )=>{
                            return (
                                <div className="categories-item">
                                    <div className="category-name">
                                        <p>
                                            {category}
                                           
                                        </p>
                                    </div>
                                    <div className="tash-icon">
                                        <FontAwesomeIcon icon={faTrash} color="red" onClick={()=>this.deleteItem(index)}  />
                                    </div>    
                                 </div>


                            )
                        })}
                       
                        <form style={{ display: this.state.display}} onSubmit={this.submitHandler}  > 
                            <input type="text" style={{width: "100%" ,display: "inline-block"}} value={this.state.category} onChange={(e)=>{this.setState({category: e.target.value})}} />
                            <input type="submit" value="add" className="btn btn-primary btn-sm" style={{display: "inline-block"}} />
                        </form>
                        <div id="plus-icon">
                          
                            <FontAwesomeIcon icon={faPlus} color="grey" onClick={this.inputHandler}/>
                        </div>
                          
             
                </div>
             

            </div>
            
        )
}


}
export default Categories