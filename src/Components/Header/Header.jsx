 import profile from '../../assets/image/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto mt-5 rounded-md space-y-3'>
             <h1 className='text-5xl font-bold '>React-Knowledg-Cafe</h1> 
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;