import Carousel from "../../Carousel";


const Banner = () => {
    return (
        <div className="lg:p-10 banner-bg">
        <div className="grid lg:grid-cols-2 grid-cols-1 banner-content">
            <div className="text-area">
                <div className="p-5">
                    <span className="text-white text-7xl font-bold leading-[96px]  ">Les Recipes<br/>Lunch </span>
                    <span className="text-white text-7xl font-bold leading-[80px]     p-2 bg-[#F7473E]  ">Grande.</span>
                </div>
                <p className="lg:text-xl lg:w-[307px] text-center text-xl font-semibold font-['poppins] text-white ">Love to Cook, Love to Eat, and Love to Live</p>
            </div>
            <div className="carosel-area lg:mt-[50%] my-[20%]">
                <Carousel></Carousel>
            </div>
        </div>
    </div>
    
    );
};

export default Banner;