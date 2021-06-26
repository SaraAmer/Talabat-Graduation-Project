// class FetchRestaurant {

//     getData = async((id) => {
//         let data =(await (
//             await fetch(`http://localhost:8000/restaurants/${id}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             })
//             .then(res => res.json())
//             .then(result => {
//                 this.setState({ food: result.food })
//                 console.log(result)

//             });
//         )) 
//         return data;
//     });


// }

async function getRequest(id) {
    let data = await (fetch(`http://localhost:8000/restaurants/${id}`)
        .then(response => response.json())
        .then(d => {
            console.log(d.restaurants);
            return d.restaurant;
        })

    )
    return data
}
export default getRequest;