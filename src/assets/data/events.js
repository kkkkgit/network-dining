import img1 from "../images/restaurants/Jahu.jpeg"
import img2 from "../images/restaurants/Tommi_Grill.jpeg"

const events = [
    {
        id: "01",
        imgUrl: img1,
        title: "Easter Dining",
        restaurantName: "Jahu Restaurant",
        cuisine: "Estonian",
        description: "Come and look for Easter eggs in delicious burgers",
        date: "April 9, 2023",
        time: "7 pm",
        address: "Parnu Mantee 15",
        websiteMenu: "www.jahugurmee.ee",
        distance: 100,
        maximumAttendence: 20,
        reviews: [
            {
                name: "Miko Arti",
                reviewDescription: "Lovely delicious food",
                rating: 4,
            },
            {
                name: "Ali Mohamed",
                reviewDescription: "Finger liking burgers",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        featured: true,    
    },
    {
        imgUrl: img2,
        title: "May Day Grilln @ Tommi",
        restaurantName: "Tommi Grill Restaurant",
        cuisine: "Steak",
        description: "The best grill in town on Celebration Day",
        date: "May 1, 2023",
        time: "7 pm",
        address: "Viru Väljak 2",
        websiteMenu: "www.tommigrill.com/en/menuu",
        distance: 100,
        maximumAttendence: 20,
        reviews: [
            {
                name: "Dre Dr",
                reviewDescription: "Steak at its best",
                rating: 5,
            },
            {
                name: "Jordan Klepper",
                reviewDescription: "Grilling done right",
                rating: 4,
            },
        ],
        avgRating: 4.5,
        featured: false,  

    },
]

export default events;
