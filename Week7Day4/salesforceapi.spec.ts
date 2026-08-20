import { test,expect} from "@playwright/test"

//global variables
let Access_Token:any
let Instance_URL:any
let token_Type:any
let LeadID:any

//describe serial to inject dependency
test.describe.serial('execute the test in serial mode',()=>{

test('generate the access token', async ({ request }) => {

    //serialization => converting object to json format
    let tokenResponse= await request.post('https://login.salesforce.com/services/oauth2/token',
        {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded"

            },
            form: {

            "grant_type":"password",
            "client_id":"3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
            "client_secret":"09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE",
            "username":"gauthami.vn@testleaf.com",
            "password":"Qeagle@123"
    }
})

//Deserialization => converting json to object format
let responseBody=await tokenResponse.json()
console.log(responseBody)

console.log(tokenResponse.status())
console.log(tokenResponse.statusText())


expect(tokenResponse.status()).toBe(200)
expect(tokenResponse.statusText()).toBe("OK")

//print the variable and set the as Global
Access_Token=responseBody.access_token
console.log(Access_Token)

Instance_URL=responseBody.instance_url
console.log(Instance_URL)

token_Type=responseBody.token_type
console.log(token_Type)

})


test('create lead using PW API',async({request}) => {


let leadResponse= await request.post('https://orgfarm-6d28dcc693-dev-ed.develop.my.salesforce.com/services/data/v67.0/sobjects/lead',

 {
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${Access_Token}`
},
data:{

"Company":"Testleaf",
"Salutation": "Mr.",
"LastName": "Prasad"

}

})

let response1=await leadResponse.json()
console.log(response1)

console.log(leadResponse.status())
console.log(leadResponse.statusText())

expect(leadResponse.status()).toBe(201)
expect(leadResponse.statusText()).toBe("Created")

LeadID=response1.id
console.log(LeadID)

   
})


test('fetch lead using PW API',async({request}) => {


let getResponse= await request.get(`${Instance_URL}/services/data/v67.0/sobjects/lead/${LeadID}`,

 {
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${Access_Token}`
}

})

let response2=await getResponse.json()
console.log(response2)

console.log(getResponse.status())
console.log(getResponse.statusText())

expect(getResponse.status()).toBe(200)
expect(getResponse.statusText()).toBe("OK")
   
})


test('update lead using PW API',async({request}) => {


let updateResponse= await request.patch(`${Instance_URL}/services/data/v67.0/sobjects/lead/${LeadID}`,

 {
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${Access_Token}`
},
data:{
 
    "FirstName":"Hari"
},

})

console.log(updateResponse.status())
console.log(updateResponse.statusText())

expect(updateResponse.status()).toBe(204)
expect(updateResponse.statusText()).toBe("No Content")
   
})


test('delete lead using PW API',async({request}) => {


let deleteResponse= await request.delete(`${Instance_URL}/services/data/v67.0/sobjects/lead/${LeadID}`,

 {
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${Access_Token}`
},

})


console.log(deleteResponse.status())
console.log(deleteResponse.statusText())

expect(deleteResponse.status()).toBe(204)
expect(deleteResponse.statusText()).toBe("No Content")
   
})

})