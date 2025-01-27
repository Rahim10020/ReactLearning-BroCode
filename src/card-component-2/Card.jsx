import profilePic from '../assets/profile.jpg'
function Card() {
    return (
        <div className="card">
            <div className='container'>
                <img src={profilePic} alt="profile picture" />
            </div>
            <h2>Rahim ALI</h2>
            <p>I'm learning web developpement and software developpement</p>
        </div>
    )
}
export default Card