


const Gallery = () => {

    return (
        <div>
            <div className="w-[100%] h-[100vh] opacity-90 bg-[#87B740]">
                <div className="flex justify-between pt-20">
                    <h1 className="text-center text-4xl ">Gallery</h1>
                    <p className="w-[400px] text-white text-sm font-normal font-['Poppins'] leading-normal">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                </div>
                {/* image moving carousel  */}
                <div className="lg:grid grid-cols-3 gap-10 mt-5 "> 
                <img className=" lg:h-[300px]   bg-neutral-200 rounded-lg" 
                src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
                />
                <img className="lg:h-[300px]  bg-neutral-200 rounded-lg" 
                src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
                />
                <img className=" lg:h-[300px]  bg-neutral-200 rounded-lg" 
                src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
                />
          
               
               
                
                </div>

             

            </div>


        </div>
    );
};

export default Gallery;