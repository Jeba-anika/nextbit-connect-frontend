import Image from 'next/image';
import infoPicture from '../../assets/about_section.png'

const InfoSection = () => {
    return (
        <div className='flex justify-around mt-10'>
            <div style={{
                margin: "auto 200px",
                color: "black",
            }}>
                <p style={{
                    color: "#B9314F",
                    fontSize: "30px"
                }}>Welcome to Nextbit Connect</p>
                <h2 style={{
                    fontSize: "40px",
                    marginBottom: "20px"
                }}>We are always Faster & Reliable</h2>
                <p style={{
                    textAlign: "justify"
                }}>
                Nextbit Connect has come a long way since its establishment in 2021. From small beginnings as a provider of dial-up & radio link Internet access to local businesses, we have grown consistently and organically as a communications provider serving a diverse portfolio of business class voice and data services.
                </p>
            </div>
            <div style={
                {
                    marginRight: "200px"
                }
            }>
                <Image src={infoPicture} alt="Info Picture" width={400}></Image>
            </div>
        </div>
    );
};

export default InfoSection;