import Carousel from "../../Carousel";


const Banner = () => {
    return (
        <div className="lg:p-10 p-5 banner-bg">
            <div className="grid lg:grid-cols-2 banner-content ">
                <div className="text-area">
                <div>
                    <span className="text-white lg:text-7xl text-3xl font-bold  lg:leading-[96px] leading-10">Les Recipes<br/>Lunch </span><span className="text-white lg:text-7xl  text-3xl  font-bold  lg:leading-[80px] leading-10 p-2 bg-[#F7473E] ">Grande.</span></div>
                    <p className="lg:text-xl lg:w-[307px] mt-5">Love to Cook, Love to Eat,
                        and Love to Live</p>
                </div>

                <div className="carosel-area lg:mt-[50%] my-[5%]">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;