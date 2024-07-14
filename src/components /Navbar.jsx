
function Navbar (){
    return(
        <div className="flex justify-between items-center p-3 bg-gray-200">
        <h1 className="text-xl ml-8 font-bold text-logoColor "> LOGBOOKD</h1>
        <nav>
            <ul className="flex gap-4 items-center">
                <li >Sign in</li>
            </ul>
        </nav>
        
    </div>)
}

export default Navbar;