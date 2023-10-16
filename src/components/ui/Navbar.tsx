import Image from "next/image";
import logo from '../../assets/logo.png'
import Link from "next/link";

const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <Link href={'/'}>
                <Image style={{height: "60px", width: "80px"}} src={logo} alt="Logo" width={100}></Image>
            </Link>
            <div >
                <Link style={{color: "black", marginRight: "10px", fontWeight: "bold"}} href={'/about'}>About</Link>
                <Link style={{color: "black", marginRight: "5px", fontWeight: "bold"}} href={'/about'}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;