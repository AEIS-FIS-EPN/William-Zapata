import Link from "next/link";

export default function Header() {
    return (<header>
        <div className={"flex flex-row items-center justify-between bg-shark-700 text-white px-[5%] py-3"}>
            <div className={"font-bold text-xl"}>
                Todo App
            </div>

            <nav className={"flex flex-row justify-center items-center space-x-10 font-semibold text-lg"}>
                <Link className={"px-3 hover:text-shark-950"} href={"#"}>Home</Link>
                <Link className={"px-3 hover:text-shark-950"} href={"#"}>TODOs</Link>
            </nav>

            <Link className={"rounded-md bg-shark-500 px-3 py-2 hover:bg-shark-950"} href={"#"}>Contact me</Link>
        </div>
    </header>);
}
