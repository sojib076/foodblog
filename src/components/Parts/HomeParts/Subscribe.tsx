

const Subscribe = () => {
    return (
        <div className="lg:my-40 my-10">
            <div className=" w-[100%] h-[360px] shrink-0 bg-[#F1632D] grid lg:grid-cols-2 gap-20 ">
                <div className="p-10">
                    <h1 className="text-center text-white text-[32px]
            font-semibold leading-[43px]">Never Miss Our New Recipes</h1>
                    <p className="text-center
                     text-white text-sm font-normal  leading-normal my-4">Subscribe to our newsletter for exclusive recipes each week</p>
                    <div className="w-[100%] relative my-10">
                        <input
                            type="text"
                            className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 placeholder-neutral-400 text-base font-normal font-['Roboto'] leading-normal focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter email here"
                        />
                        <div className="w-8 h-8 absolute top-0 right-0 mt-2 mr-2">
                            <button className="w-8 h-8 bg-orange-500 rounded-lg" />
                            <div className="w-4 h-4 absolute top-2 left-2 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="bg-white w-fit p-5 mt-[-10%] rounded-xl">
                    <img className="w-[364px] h-[448px]  rounded-lg lg:block hidden " 
                    src=" https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg "
                    />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;