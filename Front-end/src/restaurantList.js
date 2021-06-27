// const restaurantList = [];
// // const response = await fetch('http://127.0.0.1:8000/restaurants')
// //     .then(result => {
// //         console.log("Result");
// //         console.log(result);
// //         return result.json();
// //     });
// // async function
// async function getRequest() {
//     let data = await (fetch('http://127.0.0.1:8000/restaurants')
//         .then(response => response.json())
//         .then(d => {
//             console.log(d.restaurants);
//             restaurantList.push(d.restaurants);
//         })

//     )
//     return data
// }

// // return response.json();


// const res = getRequest();
// console.log("restaurantList");
// console.log();
// //restaurantList.push(res)
// // const restaurantList = [{
// //         id: 1,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 2,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 3,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 4,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 5,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 6,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 7,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 8,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 9,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 10,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 11,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 12,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 13,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 14,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 15,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 16,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 17,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 18,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 19,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 20,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 21,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },

// //     {
// //         id: 22,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 23,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 24,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 25,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 26,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 27,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 28,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 29,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 30,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 31,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 32,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 33,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 34,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }, {
// //         id: 35,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 36,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     },
// //     {
// //         id: 37,
// //         name: "Delice",
// //         logo: "https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104",
// //         desc: "Grills,Crepes,Sandwiches"
// //     }

// // ];
// const ss = [];


// for (const item of restaurantList) {
//     console.log("SS");
//     console.log(item.restaurants.name);

// }
// console.log(ss);
// console.log("end ss");
// export default restaurantList;