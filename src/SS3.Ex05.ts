let firstName:string="John"
let lastName:string="Doe"
let fullName:string

if(firstName[0]===firstName[0]?.toLocaleLowerCase()){
     firstName=firstName[0]?.toLocaleUpperCase+firstName.slice(1)
}
fullName=firstName+` `+lastName
console.log(fullName)