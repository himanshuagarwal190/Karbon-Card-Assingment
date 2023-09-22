import { useEffect, useRef, useState } from "react"
import { User } from "../Interface"
import UserModal from "./UserModal"
import { setStore, userFormValidator } from "../Helpers"

const cardsPerPage = 6

export default function ViewUser( { users, setUsers }: { users: Array<User>, setUsers: Function}){
    const [showEditUser, setShowEditUser] = useState<Boolean>(false)
    const [showViewUser, setShowViewUser] = useState<Boolean>(false)
    const [currentPaginationPage, setCurrentPaginationPage] = useState(0)
    const [userData, editIndex] = [useRef<User | null>(null), useRef<null | number>(null)]

    function removeUser(id: number){
        const index = users.map(data => data.id).indexOf(id)
        const newUsers = [...users.slice(0,index), ...users.slice(index+1, users.length)]
        setStore(newUsers)
        setUsers(newUsers)
    }

    function editUser(e: any){
        try {
            const [name, age, dob, gender, food, hobbies] = [e.target.name.value, e.target.age.value, e.target.dob.value, e.target.gender.value, e.target.food.value, e.target.hobbies.value]
            userFormValidator(name, age, dob, gender, food, hobbies)
            const saveObject = {
                id: new Date().valueOf(),
                name, age, dob, gender, food, hobbies
            }
            const allUsers = [...users]
            if(editIndex.current !== null){
                allUsers[editIndex.current] = saveObject
            }
            setStore(allUsers)
            setUsers(allUsers)
            setShowEditUser(false)
            e.preventDefault()
        } catch (error) {
            console.error(error)
        } finally {
            e.preventDefault()
        }
        

    }

    function getColor(age: number){
        if (age >= 0 && age < 25) return "green"
        else if (age >= 25 && age < 50) return "purple"
        else if (age >= 50) return "orange"
        else return "black"
    }

    return (
        <div>
            <div className="viewUser">
                {users.slice(currentPaginationPage * cardsPerPage, cardsPerPage * (currentPaginationPage+1)).map((data: User, idx: number) => {
                    return <div key={data.id} className="viewUserItem">
                        <div className="viewHeader">
                            <h4>{data.name}</h4>
                            <p style={{backgroundColor: getColor(data.age)}} className="circle"></p>
                        </div>
                        <div className="viewBody">
                            <p>Age: <b>{data.age}</b></p>
                            <p>DOB: <b>{data.dob}</b></p>
                            <p>Gender: <b>{data.gender}</b></p>
                            <p>Food: <b>{data.food}</b></p>
                            <p>Hobbies: <b>{data.hobbies.slice(0,20)} {data.hobbies.length > 30 ? "..." : ""}</b></p>
                        </div>
                        <div className="viewFooter">
                            <button onClick={() => removeUser(data.id)} className="redButton">Delete</button>
                            <button onClick={() => { userData.current = data; setShowViewUser(true) }} className="blueButton">View</button>
                            <button onClick={() =>{ userData.current = data; setShowEditUser(true); editIndex.current = idx }} className="blueButton">Edit</button>
                        </div>
                    </div>
                })}
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(users.length/cardsPerPage))].map((pageNumber, idx) =>{
                    return <button className="blueButton" onClick={() => setCurrentPaginationPage(idx)} key={idx}>{idx+1}</button>
                })}
            </div>
            

            <UserModal title="View User" showModal={showViewUser} setShowModal={setShowViewUser} user={userData.current} isEditable={false} />
            <UserModal title="Edit User" showModal={showEditUser} setShowModal={setShowEditUser} user={userData.current} onSubmit={editUser} isEditable={true} />
        </div>
        
    )
}