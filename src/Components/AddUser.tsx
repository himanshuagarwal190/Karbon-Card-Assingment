import { useState } from "react"
import Modal, { ModalHead, ModalBody } from "./Modal"
import { User } from "../Interface"
import UserModal from "./UserModal"
import { setStore, userFormValidator } from "../Helpers"

export default function AddUser( { users, setUsers }: { users: Array<User>, setUsers: Function }){
    const [showModal, setShowModal] = useState(false)

    function addUser(e: any){
        try {
            const [name, age, dob, gender, food, hobbies] = [e.target.name.value, e.target.age.value, e.target.dob.value, e.target.gender.value, e.target.food.value, e.target.hobbies.value]
            userFormValidator(name, age, dob, gender, food, hobbies)
            const saveObject = {
                name, age, dob, gender, food, hobbies
            }
            const Store: Array<User> = [...users]
            Store.push({id: new Date().valueOf(),...saveObject})
            setStore(Store)
            setShowModal(false)
            setUsers(Store)
        } catch (error) {
            console.error(error)
        } finally {
            e.preventDefault()
        }
        
    }

    return (
        <div className="addUser">
            <h3>List Of Users</h3>
            <button onClick={() => setShowModal(true)} className="blueButton">Add Users</button>
            <UserModal title="Add User" setShowModal={setShowModal} showModal={showModal} onSubmit={addUser} isEditable={true}/>
        </div>
    )
}