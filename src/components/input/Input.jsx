import '../global.css'

function Input({onInputChange}){

    function onTyping(inputText){
        onInputChange(inputText)
    }
    return (
        <>
            <div className="text-center my-10">
                <input type="text" placeholder="Type Keywords here..." className="input" onChange={(e)=> {onTyping(e.target.value)}}/>
            </div>
        </>
    )
}
export default Input