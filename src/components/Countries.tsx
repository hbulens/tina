import TextLoop from "react-text-loop";

const CountriesLoop = () => (
    <TextLoop springConfig={{ stiffness: 250, damping: 8 }} interval={5000}>
        <span className="bg-orange">Spanish</span>
        <span className="bg-orange">French</span>
        <span className="bg-orange">Belgian</span>
    </TextLoop>);

export default CountriesLoop;