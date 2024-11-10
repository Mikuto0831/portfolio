import "../index.css";

const Index = () => {
  return (
    <>
      <div className="mx-[20%]">
        <div className="py-16">
          <div
            className="aspect-video bg-liteblue bg-no-repeat bg-cover rounded-3xl \ 
                          flex items-center shadow-2xl"
          >
            <h1 className="pl-[8%] pr-[12%] py-3 text-[3.25vw] title-gradation">
              Mikuto's Portfolio
            </h1>
            <img
              src="./assets/img/mikuto.png"
              alt="Mikuto by naya @xtrapolis100"
              className="h-full"
            />
          </div>
        </div>

        <div className="mx-[14%]">
          <h1 className="text-[2.5vw] font-bold underline text-cyan-500">
            About
          </h1>
          <div className="mx-4 p-5 bg-cyan-50 rounded-3xl shadow-2xl">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
