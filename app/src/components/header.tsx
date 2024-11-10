import { FC } from "react";
import { Link } from "wouter";
import "../index.css";
import { Menu } from "./menu";

export const Header: FC = () => {
    return (
        <div className="bg-white text-black border-b border-slate-700 px-[2%] lg:px-[8%] py-4 flex justify-between">
                <Link href="/"><h1 className="text-4xl font-bold ">Mikuto's Portfolio</h1></Link>
                <div className="flex items-center"><Menu /></div>
        </div>
    );
}