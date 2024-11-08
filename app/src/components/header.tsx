import { FC } from "react";
import { Link } from "wouter";
import "../index.css";
import { Menu } from "./menu";

export const Header: FC = () => {
    return (
        <header className="bg-gray-800 text-white px-[4%] py-4 flex justify-between">
                <Link href="/"><h1 className="text-4xl font-bold ">Mikuto's Portfolio</h1></Link>
                <div className="flex items-center"><Menu /></div>
        </header>
    );
}