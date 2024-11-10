import "../index.css";

const Index = () => {
  return (
    <>
      <div className="mx-[20%]">
        <div className="py-16">
          <div className="aspect-video bg-liteblue bg-no-repeat bg-cover rounded-3xl \ 
                          flex items-center">
            <h1 className="pl-[8%] pr-[12%] py-3 text-[3.25vw] title-gradation">
              Mikuto's Portfolio
            </h1>
            <img
              src="./assets/img/mikuto.png"
              alt="Mikuto"
              className="h-full"
            ></img>
          </div>
        </div>

        <div className=""></div>
        <h1 className="text-3xl font-bold underline text-cyan-500">
          Index Page
        </h1>
        <p>ここにホームコンテンツを表示</p>
      </div>
    </>
  );
};

export default Index;
