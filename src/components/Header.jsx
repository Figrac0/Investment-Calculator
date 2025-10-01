import logo from "../assets/investment-calculator-logo.png";

const mainImg = logo;

export default function Header() {
    return (
        <header id="header">
            <img src={mainImg} alt="Investment Calculator Logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
}
