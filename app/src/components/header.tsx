import { FC, useState } from "react";
import { Menu } from "./menu";
import "../index.css";

export const Header: FC = () => {
    return (
        <header>
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-4xl font-bold">Mikuto's Portfolio</h1>
                <Menu />
            </div>
        </header>
    );
}