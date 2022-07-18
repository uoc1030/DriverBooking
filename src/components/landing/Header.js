import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Image from '@material-tailwind/react/Image';
import Image1 from 'assets/img/car3.jpg';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full">
                <Image src={Image1}/>
            </div>
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Driver Booking.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                Our company provide professional driver for your trip vacation<br/>
                                Please phone us for your booking 0332550398.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
