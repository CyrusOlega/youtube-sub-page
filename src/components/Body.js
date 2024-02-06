import { TfiClose } from "react-icons/tfi";
import { BsPersonCircle } from "react-icons/bs";
import { BodyData } from "./BodyData";

export default function Body() {
  return <div className="body">{BodyData.map(CategoryBuilder)}</div>;
}

function CategoryBuilder(prop) {
  //generate random number of channel objects (has channelName and subCount)
  var channelNames = Array(Math.floor(Math.random() * (12 - 6 + 1) + 6))
    .fill()
    .map((x) => ({
      channelName: (Math.random() + 1).toString(36).substring(2),
      subCount: Math.floor(Math.random() * (5000000 - 100000 + 1) + 100000),
    }));

  return (
    <div className="contentContainer" key={prop}>
      <div className="header">
        <div className="category">{prop}</div>
        <button className="closeButton">
          <TfiClose className="closeIcon" />
        </button>
      </div>
      <div className="channelsContainer">
        <div className="channels">{channelNames.map(ChannelBuilder)}</div>
        <button className="showMoreButton">Show More</button>
      </div>
    </div>
  );
}

function ChannelBuilder(prop) {
  var subCount;

  //convert subcount to an abbreviation
  if (prop.subCount.toString().length === 7) {
    subCount =
      prop.subCount.toString().slice(0, 1) +
      "." +
      prop.subCount.toString().slice(1, 3) +
      "M";
  } else if (prop.subCount.toString().length === 6) {
    subCount = prop.subCount.toString().slice(0, 3) + "k";
  }

  return (
    <div className="singularChannel" key={prop.channelName}>
      <BsPersonCircle className="channelIcon" />
      <span className="channelName">{prop.channelName}</span>
      <span className="subCount">{subCount} subscribers</span>
      <button className="subscribeButton">Subscribe</button>
    </div>
  );
}
