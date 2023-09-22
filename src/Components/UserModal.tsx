import { User } from "../Interface";
import Modal, { ModalBody, ModalHead } from "./Modal";

function UserModal({ showModal, setShowModal, onSubmit, user, title, isEditable }: { showModal: Boolean, onSubmit?: Function, setShowModal: Function, user?:User | null, title: string, isEditable: Boolean }){
    return (
        <Modal showModal={showModal}>
                <ModalHead>
                    <div className="flex-end">
                        <h2>{title}</h2>
                    </div>
                </ModalHead>
                <ModalBody>
                    <form onSubmit={(e:any) => onSubmit ? onSubmit(e) : null} className="formBody">
                        <div className="formItem">
                            <label htmlFor="name">Name</label>
                            <input readOnly={Boolean(isEditable)} type="text" name="name" defaultValue={user?.name || ""} />
                        </div>
                        <div className="formItem">
                            <label htmlFor="age">Age</label>
                            <input readOnly={Boolean(isEditable)} type="number" name="age"  defaultValue={user?.age || 0} />
                        </div>
                        <div className="formItem">
                            <label htmlFor="dob">DOB</label>
                            <input readOnly={Boolean(isEditable)} type="date" name="dob"  defaultValue={user?.dob || ""} max={new Date().toISOString().split("T")[0]} />
                        </div>
                        <div className="formItem">
                            <label htmlFor="gender">Gender: </label>
                            <div>
                                <input disabled={Boolean(isEditable)} type="radio" id="Male" name="gender" defaultValue="Male" defaultChecked={user?.gender === "Male" || true} />
                                <label htmlFor="Male">Male</label>
                                <input disabled={Boolean(isEditable)} type="radio" id="Female" name="gender" defaultValue="Female" defaultChecked={user?.gender === "Female"} />
                                <label htmlFor="Female">Female</label>
                            </div>
                            
                        </div>
                        <div className="formItem">
                            <label htmlFor="food">Favourite Food</label>
                            <select disabled={Boolean(isEditable)} name="food" id="food" defaultValue={user?.food || ""}>
                                <option value="">--Please choose an option--</option>
                                <option value="pizza">Pizza</option>
                                <option value="burger">Burger</option>
                                <option value="pasta">Pasta</option>
                            </select>
                        </div>
                        <div className="formItem">
                            <label htmlFor="hobbies">Hobbies</label>
                            <textarea readOnly={Boolean(isEditable)} rows={10} cols={27} name="hobbies" defaultValue={user?.hobbies || ""}/>
                        </div>
                        <div className="formItem"></div>
                        <div className="formItem">
                            <div className="formSubmit">
                                <button className="redButton" onClick={() => setShowModal(false)}>Close</button>
                                {onSubmit && <button className="blueButton" type="submit">Submit</button>}
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
    )
}

export default UserModal