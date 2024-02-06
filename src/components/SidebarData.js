import { BiLike } from "react-icons/bi";
import { CiTrophy, CiFlag1 } from "react-icons/ci";
import { GiSmallFire, GiClapperboard, GiHanger } from "react-icons/gi";
import { GoHome, GoHistory } from "react-icons/go";
import { IoSettingsOutline, IoHelp } from "react-icons/io5";
import {
  MdSubscriptions,
  MdOutlineWatchLater,
  MdPodcasts,
  MdOutlineFeedback,
} from "react-icons/md";
import { PiMusicNote, PiNewspaperClipping } from "react-icons/pi";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";

export const generalData = [
  {
    icon: <GoHome />,
    text: "Home",
    selected: false,
  },
  {
    icon: <SiYoutubeshorts />,
    text: "Shorts",
    selected: false,
  },
  {
    icon: <MdSubscriptions />,
    text: "Subscriptions",
    selected: true,
  },
];
export const YouData = [
  {
    icon: <GoHistory />,
    text: "History",
    selected: false,
  },
  {
    icon: <MdOutlineWatchLater />,
    text: "Watch later",
    selected: false,
  },
  {
    icon: <BiLike />,
    text: "Liked videos",
    selected: false,
  },
];
export const ExploreData = [
  {
    icon: <GiSmallFire />,
    text: "Trending",
    selected: false,
  },
  {
    icon: <PiMusicNote />,
    text: "Music",
    selected: false,
  },
  {
    icon: <GiClapperboard />,
    text: "Movies",
    selected: false,
  },
  {
    icon: <SiYoutubegaming />,
    text: "Gaming",
    selected: false,
  },
  {
    icon: <PiNewspaperClipping />,
    text: "News",
    selected: false,
  },
  {
    icon: <CiTrophy />,
    text: "Sports",
    selected: false,
  },
  {
    icon: <GiHanger />,
    text: "Fashion & Beauty",
    selected: false,
  },
  {
    icon: <MdPodcasts />,
    text: "Podcasts",
    selected: false,
  },
];
export const moreData = [
  {
    icon: (
      <img
        className="sidebarColorIcons"
        src="/icons/YouTube_full-color_icon_(2017).svg"
        alt="premium"
      />
    ),
    text: "YouTube Premium",
  },
  {
    icon: (
      <img
        className="sidebarColorIcons"
        src="/icons/Youtube_Music_icon.svg"
        alt="music"
      />
    ),
    text: "YouTube Music",
  },
  {
    icon: (
      <img
        className="sidebarColorIcons"
        src="/icons/YouTube_Kids_LogoVector.svg"
        alt="kids"
      />
    ),
    text: "YouTube Kids",
  },
];
export const otherData = [
  {
    icon: <IoSettingsOutline />,
    text: "Settings",
  },
  {
    icon: <CiFlag1 />,
    text: "Report History",
  },
  {
    icon: <IoHelp />,
    text: "Help",
  },
  {
    icon: <MdOutlineFeedback />,
    text: "Send feedback",
  },
];
export const links1 = [
  "About",
  "Press",
  "Copyright",
  "Contact Us",
  "Creators",
  "Advetise",
  "Developers",
];
export const links2 = [
  "Terms",
  "Privacy",
  "Policy & Safety",
  "How YouTube works",
  "Test new features",
];
