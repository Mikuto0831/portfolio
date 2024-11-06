import { FC, useState } from "react";

import "../index.css";

export const Header: FC = () => {
    return (
        <header>
            <div className="bg-gray-800 text-white p-4">
                <h1 className="text-4xl font-bold">Mikuto`s Portfolio</h1>
            </div>
        </header>
    );
}