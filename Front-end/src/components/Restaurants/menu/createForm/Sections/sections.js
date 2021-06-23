import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
class Sections extends React.Component{
    constructor(){
        super()
        this.state = {
            sectionCount: 0 , 
            optionCount: 0 , 
            options: [],


        }

    }
    addSection =()=>{
       this.setState({sectionCount: this.state.sectionCount++})
       this.state.options.push(<li> hello</li>)
       console.log(this.state.sectionCount)
    }
    render(){
       let content =  this.state.options.map((section)=>{
            return (
            <div style={{marginTop: "10px"}}>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="option"/>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="price"/>
                
            </div>)
        })
    
        return(
          
        <div>
          <div>
              <form>
             
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Section Name"/>
                        <FontAwesomeIcon icon={faPlus} color="grey" onClick={this.addSection}/>
                    </div>
                  
                </form>
            </div>
            

            <div>
                {content}
            </div>

        </div>)
    }
}
export default Sections