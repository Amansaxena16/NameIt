import myLogo from '../../assets/images/logo.png'
function Logo({width}){
    return(
        <>
            <div className='flex justify-center mt-10'>
                <img src={myLogo} alt="NameIt Logo" style={{ width: width }} className="transition-all duration-300"/>
            </div>
            <div>
                <h1 className='text-center text-7xl font-mono font-bold text-white'>Name It!!</h1>
            </div>
        </>
    )
}
export default Logo