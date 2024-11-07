import { useState, useEffect } from "react";
import "../index.css";

export const NotFound = () => {
  const [removeMargin, setRemoveMargin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight >= 300) {
        setRemoveMargin(true);
      } else {
        setRemoveMargin(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初期ウィンドウサイズで状態を更新する

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-screen ${removeMargin ? "-mt-20" : ""}`}>
      <div className="text-center">
        <h1 className="text-5xl font-bold underline text-cyan-500">
          404 Not Found
        </h1>
        <p className="text-2xl mt-3">お探しのページが見つかりませんでした</p>
      </div>
    </div>
  );
};

export default NotFound;