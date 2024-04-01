"use client"

import Link from "next/link";
import {useState} from "react";

export default function Header() {
    const [selected, setSelected] = useState(1);

    return (<header>
        <div className={"flex flex-row items-center justify-between bg-shark-700 text-white px-[5%] py-3"}>
            <div className={"font-bold text-xl"}>
                Todo App
            </div>

            <nav className={"flex flex-row justify-center items-center space-x-10 font-semibold text-lg"}>
                <Link className="px-3 hover:text-shark-950" href="/"
                      style={{borderBottom: selected === 1 ? "2px solid #24252a" : ""}}
                      onClick={() => setSelected(1)}>
                    TODOs
                </Link>


                <Link className={"px-3 hover:text-shark-950"} href={"/todos"}
                      style={{borderBottom: selected === 2 ? "2px solid #24252a" : ""}}
                      onClick={() => setSelected(2)}>
                    Create TODO
                </Link>
            </nav>

            <Link className={"rounded-md bg-shark-500 px-3 py-2 hover:bg-shark-950"}
                  href={"https://web.whatsapp.com/send?phone=+593994061267"}>
                Contact me
            </Link>
        </div>
    </header>);
}
