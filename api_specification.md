
route
GET /gist/


Response sample
status: 200 ok

object sample
{
	"id": 1,
	"url": "https"

}




//POST

Route:  POST /patient/:id   

Response:  200 ok

Sample output:

{
    "id" : "XXX",
    "name": "Basha",
    "ownerName": "Vance", 
    "species": "labrador",
    "age": 7,
    "sex": f,
    "weight": 50,
    "lastVisit": 09/23/13,
    "issurance": Delta,
}


//GET 

Route: GET /patient

Response: 200

Sample output:

  
[  
{
    "id" : "XXX",
    "name": "Basha",
    "ownerName": "Vance", 
    "species": "labrador",
    "age": 7,
    "sex": f,
    "weight": 50,
    "lastVisit": 09/23/13,
    "issurance": Delta,
},
{
    "id" : "XXX",
    "name": "Basha",
    "ownerName": "Vance", 
    "species": "labrador",
    "age": 7,
    "sex": f,
    "weight": 50,
    "lastVisit": 09/23/13,
    "issurance": Delta,
},
...

]

//PUT 

Route:  PUT /patient/:id 

Response: 200

Sample output:

{
    "id" : "XXX",
    "name": "Basha",
    "ownerName": "Vance", 
    "species": "labrador",
    "age": 7,
    "sex": f,
    "weight": 50,
    "lastVisit": 09/23/13,
    "issurance": Delta,
}


DELETE

Route: DELETE /patient/:id

Response: 200

Sample output:

{
    "id" : "XXX",
    "name": "Basha",
    "ownerName": "Vance", 
    "species": "labrador",
    "age": 7,
    "sex": f,
    "weight": 50,
    "lastVisit": 09/23/13,
    "issurance": Delta,
}
