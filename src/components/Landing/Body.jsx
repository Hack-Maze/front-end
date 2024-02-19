import { Rows } from "../../static/data.jsx";

const Body = () => {
  return (
    <div className="flex flex-col my-10 px-7 text-white scroll-smooth">
      {Rows.map((row, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 items-start justify-start mt-12 w-auto md:w-full"
        >
          <>
            <div className="flex flex-row items-center border border-[#5EE848] bg-[#5de84810] rounded-2xl px-2 py-1">
              <span className="mr-2 text-[#5EE848]">{row.icon}</span>
              <span className="">{row.iconText}</span>
            </div>
            <h2 className="text-5xl">
              <span className="text-[#5EE848] font-medium">
                {row.titleHighlight}
              </span>
              {row.title}
            </h2>
            <h3 className="text-2xl font-medium">{row.desc}</h3>
            <div className="flex flex-row gap-10 items-center justify-start">
              {row.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="border border-[#585b742f] p-3 w-[30%] h-[35vh] bg-[#013c3314] rounded-md"
                >
                  <h2 className="text-5xl font-semibold">{card.id}.</h2>
                  <h3 className="text-2xl font-medium my-4">{card.title}</h3>
                  <p className="text-sm leading-6 mr-5">{card.desc}</p>
                </div>
              ))}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default Body;
