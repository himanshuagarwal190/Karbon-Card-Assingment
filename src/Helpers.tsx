import { User } from "./Interface"

export function userFormValidator(name: string, age: string, dob: string, gender: string, food: string, hobbies: string){
    if(!name?.trim() || !parseInt(age) || parseInt(age) < 0 || parseInt(age) > 200 || !dob || !gender || !food || !hobbies){
        alert("Enter all the fields/ valid fields")
        throw new Error("Enter all the fields/ valid fields")
    }
}

export function setStore(value: Array<User>){
    localStorage.setItem("Store", JSON.stringify(value))
}

export function getStore(){
    return JSON.parse(localStorage.getItem("Store") || "[]")
}