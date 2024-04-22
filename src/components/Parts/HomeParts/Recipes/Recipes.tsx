
import RecipeDemo from "./RecipeD";


const Recipes = () => {


    const recipes = [
        {
          recipeId: 1,
          title: 'Burger Blenger Klenger',
          date: '23 September 2020',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.',
          imageUrl: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg'
        },
        {
          recipeId: 2,
          title: 'Another Recipe',
          date: '25 September 2020',
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum magni eveniet debitis voluptatum odio laboriosam nobis minima fuga corrupti labore, pariatur, architecto ab consectetur sint voluptatibus accusantium, repellendus tempore?',
          imageUrl: 'https://example.com/another-image.jpg'
        },
       
      ];


    return (
        <div>
            <div className=" lg:p-10 p-5">
                <h1 className=" text-zinc-800 lg:text-5xl text-3xl font-semibold mb-10 font-['poppins'] ">Our Latest Recipes</h1>
                <div className="grid lg:grid-cols-3  grid-cols-1">
                    <div className="lg:col-span-2">
                        <div className="bg-white p-5 w-[95%] " >
                            <img className="w-[100%]  rounded-lg"
                                src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="pancakes" />

                            <h2 className="lg:w-[50%] text-stone-500 text-base font-normal leading-loose">January 18, 2021</h2>

                            <h1 className="lg:w-[90%] text-zinc-800 lg:text-[32px] text-2xl font-semibold lg:leading-[43px]">Italiano Strawberry Smoothies Pannacota</h1>

                            <p className="w-[90%]  text-neutral-500 text-sm font-normal leading-normal">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Bring to the table win-win survival strategies to ensure proactive domination. Bring to the table win-win survival strategies <br />to ensure proactive domination.</p>

                            <h6 className="w-[126px] h-[37px] text-orange-500 text-sm font-normal leading-normal">Read more</h6>

                        </div>


                        <div  className='' >
                        <RecipeDemo recipes={recipes} />
                        </div>

                    </div>




                    <div className="col-span-1">
                        <h2 className="text-black text-2xl font-bold mb-5 font-['Raleway'] ">Popular Recipes</h2>
                        <div className="grid grid-cols-1 gap-5">

                            <div className="w-[100%] h-[120px] relative">
                                <img className="lg:w-[80%] w-[100%]   h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                            <div className="w-[100%] h-[120px] relative">
                                <img className="lg:w-[80%] w-[100%]  h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                            <div className="w-[100%] h-[120px] relative">
                                <img className="lg:w-[80%] w-[100%]  h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-lg"
                                    src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" />
                                <div className="w-[216px] h-8 left-0 top-[71px] absolute bg-[#87B740]" />
                                <div className="left-[20px] top-[76px] absolute text-white text-base font-bold font-['Raleway'] leading-snug">Special Beef Steak Enak</div>
                            </div>
                        </div>

                        <div className="lg:w-[90%] h-[480px] relative mt-10 bg-[#87B740] p-5">


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