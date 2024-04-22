import CarouselGallery from "./CarouselGallery";



const Gallery = () => {
    const Image = [
        'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg',
    ]


    return (
        <div>
            <div className="w-[100%] lg:h-[100vh] p-5 opacity-90 bg-[#87B740]">
                <div className="lg:flex justify-between lg:pt-20 pt-5">
                    <h1 className=" text-4xl  font-bold font-['poppins'] ">Gallery</h1>
                    <p className="lg:w-[400px] p-5 text-white text-sm font-normal font-['Poppins'] leading-normal">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                </div>
                {/* image moving carousel  */}
             
          
                <CarouselGallery images={Image}>
                       
             

                </CarouselGallery>
                
               
                
                

             

            </div>


        </div>
    );
};

export default Gallery;