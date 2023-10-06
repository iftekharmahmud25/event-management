
import Banner from "../Banner/Banner";
import ServiceCards from "../ServiceCards/ServiceCards";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-12">
                <p className="text-center text-cyan-800 font-semibold  md:text-3xl text-2xl mt-5 mb-6 md:mb-12">--- Our Services ---</p>
            <ServiceCards></ServiceCards>
            </div>
            <h1>this is home</h1>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;