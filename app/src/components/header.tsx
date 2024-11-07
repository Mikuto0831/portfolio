import { FC, useState } from "react";
import { Link } from "wouter";
import { Menu }  from "./menu";
import "../index.css";

export const Header: FC = () => {
    return (
        <header>
            <div className="bg-gray-800 text-white p-4 flex justify-between">
                <Link href="/"><h1 className="text-4xl font-bold">Mikuto's Portfolio</h1></Link>
                <div className="flex items-center"><Menu /></div>
            </div>
        </header>
    );
}