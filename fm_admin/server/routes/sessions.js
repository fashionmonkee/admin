var shops ={
    shops:[
    {
        "id":1,
        "name":"Shop Name",
        "address1":"Velachery,Vijaynagar",
        "address2":"",
        "city":"chennai",
        "area":"Velachery",
        "pin":"600042",
        "mobile":"1234567892",
        "phone":"",
        "rating":"4.0",
        "banner":"images/background1.jpg",
        "images":["images/category1.png","images/category2.png","images/category1.png","images/category2.png"],
        "reviews":[
        {
                "id":1,
                "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, # consectetur adipiscing ",
                "commentAt":"30 min ago",
                "userId":1,
                "userName":"Rexona Kumi",
                "userImage":"images/image1.jpg"
        },{
                "id":2,
                "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, # consectetur adipiscing ",
                "commentAt":"30 min ago",
                "userId":1,
                "userName":"John Doe",
                "userImage":"images/image2.jpg"

        }],
        "branches":[
        {
        "id":1,
        "name":"Saravana Stores",
        "address1":"Velachery,Vijaynagar",
        "address2":"",
        "city":"chennai",
        "area":"Velachery",
        "pin":"600042",
        "mobile":"1234567892",
        "phone":"",
        "rating":"4.0"
        }],
        "maincategory":[{"id":1,"name":"mens"},{"id":2,"name":"womens"},{"id":3,"name":"kids"}],
        "subcategory":[{"id":1,"name":"shirts","type":"mens"},{"id":2,"name":"shirts","type":"womens"},{"id":3,"name":"shirts","type":"kids"},{"id":4,"name":"pants","type":"mens"},{"id":5,"name":"patiyala","type":"womens"},{"id":6,"name":"Jeans","type":"kids"}],
        "latitude":"13.082680199999999",
        "longitude":"80.2707184"
    },
    {
        "id":2,
        "name":"Shop Name",
        "address1":"Velachery,Vijaynagar",
        "address2":"",
        "city":"chennai",
        "area":"Velachery",
        "pin":"600042",
        "mobile":"1234567892",
        "phone":"",
        "rating":"4.0",
        "banner":"images/background2.jpg",
        "images":["images/category1.png","images/category2.png","images/category1.png","images/category2.png"],
         "reviews":[
        {
                "id":1,
                "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, # consectetur adipiscing ",
                "commentAt":"30 min ago",
                "userId":1,
                "userName":"Rexona Kumi",
                "userImage":"images/image1.jpg"
        },{
                "id":2,
                "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, # consectetur adipiscing ",
                "commentAt":"30 min ago",
                "userId":1,
                "userName":"John Doe",
                "userImage":"images/image2.jpg"

        }],
         "branches":[
        {
        "id":1,
        "name":"Saravana Stores",
        "address1":"Velachery,Vijaynagar",
        "address2":"",
        "city":"chennai",
        "area":"Velachery",
        "pin":"600042",
        "mobile":"1234567892",
        "phone":"",
        "rating":"4.0"
        }],
        "maincategory":[{"id":1,"name":"mens"},{"id":2,"name":"womens"},{"id":3,"name":"kids"}],
        "subcategory":[{"id":1,"name":"shirts","type":"mens"},{"id":2,"name":"shirts","type":"womens"},{"id":3,"name":"shirts","type":"kids"},{"id":4,"name":"pants","type":"mens"},{"id":5,"name":"patiyala","type":"womens"},{"id":6,"name":"Jeans","type":"kids"}],
        "latitude":"13.082680199999999",
        "longitude":"80.2707184"    
    }
    ]};

var users={users:[{id:1,name:"Naveen",city:"Chennai",urself:"",profile:"images/image1.jpg"},
                {id:1,name:"Naveen",city:"Chennai",urself:"",profile:"images/image1.jpg"}]};


var areas={areas:[{id:1,name:"Velachery"},
{id:2,name:"Adyar"},{id:3,name:"Guindy"},
{id:4,name:"Tharamani"},{id:5,name:"Tiruvanmayur"},{id:6,name:"Thambaram"}
,{id:7,name:"Nungambakam"},{id:8,name:"Vadapazani"},{id:9,name:"ECR"}]};

exports.findAll = function (req, res, next) {
    res.send(shops);
};

exports.login = function (req, res, next) {
    res.send({userId:1,token:'abcdefghijklmnopqrstuvwxyz'});
};

exports.signup = function (req, res, next) {
    res.send({userId:1,token:'abcdefghijklmnopqrstuvwxyz'});
};

exports.reviews = function (req, res, next) {
    res.send('Comments posted successfully');
};

exports.ratings = function (req, res, next) {
    res.send('Ratings posted successfully');
};

exports.users = function (req, res, next) {
    var id = req.params.id;
    res.send(users.users[id]);
};
exports.areas = function (req, res, next) {
    res.send(areas);
};


exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(shops.shops[id]);
};