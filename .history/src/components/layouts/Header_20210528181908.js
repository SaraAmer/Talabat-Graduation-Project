import React from 'react'
import Flag from 'react-world-flags'
class Header extends React.Component {

    render() {
        return ( < div >
            <
            nav className = "navbar navbar-expand-lg navbar-light " >
            <
            div className = "container-fluid " >
            <
            button className = "navbar-toggler"
            type = "button"
            data - bs - toggle = "collapse"
            data - bs - target = "#navbarNav"
            aria - controls = "navbarNav"
            aria - expanded = "false"
            aria - label = "Toggle navigation" >
            <
            span className = "navbar-toggler-icon" > < /span> <
            /button> <
            a className = "navbar-brand text-white"
            href = "/" > < h1 > talabat < /h1></a >
            <
            div className = "float-right " >
            <
            div className = "collapse navbar-collapse "
            id = "navbarNav" >
            <
            ul className = "navbar-nav  " >
            <
            li className = "nav-item" >
            <
            a className = "nav-link text-white"
            aria - current = "page"
            href = "#" > offers < /a> <
            /li> <
            li className = "nav-item" >
            <
            a className = "nav-link text-white"
            href = "#" > Become a partner < /a> <
            /li> <
            li className = "nav-item" >
            <
            a className = "nav-link text-white"
            href = "#" > All Restaurants < /a> <
            /li> <
            li className = "nav-item" >
            <
            a className = "nav-link text-white"
            tabindex = "-1"
            aria - disabled = "true" > العربيه < /a> <
            /li> <
            li className = "nav-item  " >
            <
            div class = "dropdown" >
            <
            a className = "btn  dropdown-toggle"
            href = "#"
            role = "button"
            id = "dropdownMenuLink"
            data - bs - toggle = "dropdown"
            aria - expanded = "false" >
            <
            Flag code = "egy"
            height = "16"
            width = "20" / >
            <
            /a>



            <
            ul class = "dropdown-menu"
            aria - labelledby = "dropdownMenuLink" >
            <
            li > < a class = "dropdown-item"
            href = "/egypt" > < Flag code = "egy"
            height = "16"
            width = "20" / > Egypt < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/kuwait" > < Flag code = "kwt"
            height = "16"
            width = "20" / > kuwait < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/uae" > < Flag code = "ARE"
            height = "16"
            width = "20" / > UAE < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/Bahraine" > < Flag code = "BHR"
            height = "16"
            width = "20" / > Bahraine < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/KSA" > < Flag code = "SAU"
            height = "16"
            width = "20" / > KSA < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/Qatar" > < Flag code = "QAT"
            height = "16"
            width = "20" / > Qatar < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/Oman" > < Flag code = "OMN"
            height = "16"
            width = "20" / > Oman < /a></li >
            <
            li > < a class = "dropdown-item"
            href = "/jordan" > < Flag code = "JOR"
            height = "16"
            width = "20" / > Jordan < /a></li >
            <
            /ul></div >


            <
            /li> <
            li className = "nav-item" >


            <
            button type = "button"
            class = "btn text-white "
            data - toggle = "modal"
            data - target = "#exampleModal" >
            Login <
            /button> <
            /li>

            <
            /ul> <
            /div> <
            /div> <
            /div> <
            /nav>

            <
            div className = "modal fade"
            id = "exampleModal"
            tabindex = "-1"
            aria - labelledby = "exampleModalLabel"
            aria - hidden = "true" >
            <
            div className = "modal-dialog" >
            <
            div className = "modal-content" >
            <
            div className = "modal-header" >
            <
            h5 className = "modal-title"
            id = "exampleModalLabel" > Modal title < /h5> <
            button type = "button"
            class = "close"
            data - dismiss = "modal"
            aria - label = "Close" >
            <
            span aria - hidden = "true" > & times; < /span> <
            /button> <
            /div> <
            div className = "modal-body" >
            ... <
            /div> <
            div className = "modal-footer" >
            <
            button type = "button"
            class = "btn btn-secondary"
            data - dismiss = "modal" > Close < /button> <
            button type = "button"
            class = "btn btn-primary" > Save changes < /button> <
            /div> <
            /div> <
            /div> <
            /div>



            <
            /div>
        );
    }
}
export default Header;