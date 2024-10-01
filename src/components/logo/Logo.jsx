import myLogo from '../../assets/images/logo.png'
function Logo(){
    return(
        <>
            <div className='flex justify-center mt-10'>
                <img src={myLogo} alt="NameIt Logo" className='w-2/6'/>
            </div>
            <div>
                <h1 className='text-center text-7xl font-mono font-bold text-white'>Name It!!</h1>
            </div>
        </>
    )
}
export default Logo