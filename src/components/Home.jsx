import Headline from "./reputation/Headline";
import Reputation from "./reputation/Reputation";
import Testimonials from "./reputation/Testimonials";
import GetQuoteButton from "./GetQuoteButton";

export default function Home() {
  return (
    <div>
      <Headline/>
      <GetQuoteButton text="Get An Instant Quote" color="primary"/>
      <Reputation/>
      <Testimonials/>
    </div>
  );
}