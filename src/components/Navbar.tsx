
export default function Navbar(){
    return(
        <nav className=" flex justify-around p-4 items-center text-gray-700 font-bold">
            <div>
                <img src="/email.png" alt="Uma imagem representativa de email." width={40} height={28}/>
            </div>
            <h1 className="text-xl">My Email Analyzer</h1>
            <div>
                <ul className="flex gap-4">
                    <li className="cursor-pointer">About us</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    )
}