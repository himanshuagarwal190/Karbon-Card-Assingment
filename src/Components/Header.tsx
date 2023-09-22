import profileImage from '../Assets/user.png'

export default function Header(){
    return (
        <div className="container header">
            <p className='headerTitle'>Users Inventory</p>
            <img className="profileImage" src={profileImage} alt="profileImage" />
        </div>
    )
}