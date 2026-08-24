import axios from "axios"

let email="gauthami.vn@testleaf.com"
let endPointUri="https://testleaf-team-ppdcho09.atlassian.net/rest/api/2/issue"
let apiToken="ATATT3xFfGF0m9BBNJ8LJVTctm4dvFGsiFqAuq9qp_iXyLg3NRfG5nGRnDG7qqvkzC33yZ2k1jID4QJsyml7DjMR9npSy-KWorgxMfAc6bUsdO3QRqMrOuk7d9imIASarF1ejGNodLoAZSGXWE5HLNKC1ZJCwqrricIPKVcmU1RxY2WuB7oSHKc=FA7FFFBD"
let apiKey="PW"



async function createIssue(summary:string, description:string){
  
    const response1=await axios.post(endPointUri,
{
    "fields": {
    "project": {
      "key":apiKey
    },
     "summary":summary,
    "description":description,
    "issuetype": {
      "name": "Bug"
    }
  
    }
  },
{
headers:{
"Content-Type":"application/json"

},

auth:{
"username":email,
"password":apiToken
}

})

// const resbody=await response1.data
console.log(response1.data)
console.log(response1.status)
console.log(response1.statusText);

}

createIssue("bug created through PW API", "JIRA REST API")