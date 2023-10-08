

import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import ServiceCards from "../ServiceCards/ServiceCards";
import Subscribe from "../Subscribe/Subscribe";



const Home = () => {
   

    return (
        <div>
            <Banner></Banner>
            <div  className="mt-12">
                <p className="text-center text-cyan-800 font-semibold  md:text-3xl text-2xl mt-5 mb-6 md:mb-12">--- Our Services ---</p>
            <ServiceCards></ServiceCards>
            </div>
            <div className="mt-12 mb-12">
            <p className="text-center text-cyan-800 font-semibold  md:text-3xl text-2xl mt-5 mb-6 md:mb-12">--- Customers Review ---</p>
            <Reviews></Reviews>
            </div>
          
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;