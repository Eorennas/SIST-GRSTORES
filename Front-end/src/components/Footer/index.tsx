import bgFooter from '../../Assets/Footer.png';

export default function Footer() {
    return (
        <div
            className="absolute w-full h-full bg-cover bg-center flex items-center border-0"
            style={{ backgroundImage: `url(${bgFooter})` }}
        >
        </div>
    )
}