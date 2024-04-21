import { Link } from "react-router-dom";


const Recipes = () => {

    const recipeId = 1;
    return (
        <div>
            <div className=" lg:p-10 p-5">
                <h1 className=" text-zinc-800 lg:text-5xl text-3xl font-semibold mb-10 ">Our Latest Recipes</h1>
                <div className="grid lg:grid-cols-3  grid-cols-1">
                    <div className="lg:col-span-2">
                        <div >
                            <img className="w-[90%]  bg-neutral-200 rounded-lg"
                                src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="pancakes" />

                            <h2 className="lg:w-[50%] text-stone-500 text-base font-normal leading-loose">January 18, 2021</h2>

                            <h1 className="lg:w-[90%] text-zinc-800 lg:text-[32px] text-2xl font-semibold lg:leading-[43px]">Italiano Strawberry Smoothies Pannacota</h1>

                            <p className="w-[90%]  text-neutral-500 text-sm font-normal leading-normal">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Bring to the table win-win survival strategies to ensure proactive domination. Bring to the table win-win survival strategies <br />to ensure proactive domination.</p>

                            <h6 className="w-[126px] h-[37px] text-orange-500 text-sm font-normal leading-normal">Read more</h6>

                        </div>


                        <div className="grid lg:grid-cols-2 grid-cols-1  gap-  pt-9 ">

                            <div className="w-[90%] h-[544px] relative rounded-lg">
                                <h2 className="left-[16px] top-[480px] absolute text-orange-500 text-sm font-normal leading-normal">Read More</h2>

                                <p className="left-[16px] top-[368px] absolute text-stone-500 text-sm font-normal  leading-normal">Leverage agile frameworks to provide a robust <br />synopsis for high level overviews. Iterative <br />approaches to corporate strategy foster <br />collaborative thinking</p>

                                <h1 className="left-[16px] top-[320px] absolute text-zinc-800 text-2xl font-bold  leading-loose">Burger Blenger Klenger</h1>

                                <h6 className="w-[145px] left-[16px] top-[280px] absolute text-stone-500 text-sm font-normal font-['Poppins'] leading-normal">23 September 2020</h6>

                                <img className="w-[368px] h-60 left-[16px] top-[16px] absolute bg-neutral-600 rounded-lg" src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg' />

                                <div className="w-24 h-8 left-[272px] top-[33px] absolute">
                                    <div className="w-24 h-8 left-0 top-0 absolute bg-orange-500 rounded" />
                                    <h6 className="left-[25px] top-[4px] absolute text-white text-sm font-normal font-['Poppins'] leading-normal">DISHES</h6>
                                </div>

                           

                            </div>
                            <div className="w-[90%] h-[544px] relative rounded-lg">
                            <Link to={`/detailspage/${recipeId}`}>
    <h2 className="left-[16px] top-[480px] absolute text-orange-500 text-sm font-normal leading-normal">Read More</h2>
</Link>

                                <p className="left-[16px] top-[368px] absolute text-stone-500 text-sm font-normal  leading-normal">Leverage agile frameworks to provide a robust <br />synopsis for high level overviews. Iterative <br />approaches to corporate strategy foster <br />collaborative thinking</p>

                                <h1 className="left-[16px] top-[320px] absolute text-zinc-800 text-2xl font-bold  leading-loose">Burger Blenger Klenger</h1>

                                <h6 className="w-[145px] left-[16px] top-[280px] absolute text-stone-500 text-sm font-normal font-['Poppins'] leading-normal">23 September 2020</h6>

                                <img className="w-[368px] h-60 left-[16px] top-[16px] absolute bg-neutral-600 rounded-lg" src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg' />

                                <div className="w-24 h-8 left-[272px] top-[33px] absolute">
                                    <div className="w-24 h-8 left-0 top-0 absolute bg-orange-500 rounded" />
                                    <h6 className="left-[25px] top-[4px] absolute text-white text-sm font-normal font-['Poppins'] leading-normal">DISHES</h6>
                                </div>

                           

                            </div>
                        </div>



                    </div>

                    <div className="col-span-1">
                        <h2 className="text-black text-2xl font-bold mb-5 font-['Raleway'] ">Popular Recipes</h2>
                        <div className="grid grid-cols-1 gap-5">

                            <div className="w-[100%] h-[120px] relative">
                                <img className="w-[80%] h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                            <div className="w-[100%] h-[120px] relative">
                                <img className="w-[80%] h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                            <div className="w-[100%] h-[120px] relative">
                                <img className="w-[80%] h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                        </div>

                        <div className="w-[90%] h-[480px] relative mt-10 bg-[#87B740] p-5">


                            <img className="w-[100%] h-64 rounded-xl  " src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="pancakes" />

                            <div className="text-white text-center text-2xl font-bold font-['Raleway'] leading-loose">Gerry Latuconsina</div>
                            <h2 className=" w-[90%] mx-auto text-center text-white text-sm font-normal font-['Roboto'] leading-[21px]">Leverage agile frameworks to provide a robust synopsis for high level overviews.</h2>

                        </div>
                        <div className="w-[90] h-[197px] bg-[#F1632D] rounded-lg mt-10 p-5" >
                            <h2 className="text-white lg:text-2xl text-xl font-bold font-['Raleway'] lg:leading-loose">
                                Never Miss Our New Recipes</h2>

                            <p className="text-white text-xs font-normal font-['Poppins'] leading-normal">Leverage agile frameworks to provide a robust <br />synopsis for high level overviews.</p>
                            <div className="w-[100%] relative my-5">
                                <input
                                    type="text"
                                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-300 placeholder-neutral-400 text-base font-normal font-['Roboto'] leading-normal focus:outline-none focus:ring focus:border-blue-500"
                                    placeholder="Enter email here"
                                />
                                <div className="w-8 h-8 absolute top-0 right-0 mt-2 mr-2">
                                    <button className="w-8 h-8 bg-[#F1632D] rounded-lg" />
                                    <div className="w-4 h-4 absolute top-2 left-2 bg-white rounded-full" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;