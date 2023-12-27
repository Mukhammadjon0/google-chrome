import "./main.css"
import { IoApps } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Labels from "../labels/labels";

function Main() {
    return (
        <div>
            <div className="header">
                <div></div>
                <div className="header__right">
                    <a href="#">Gmail</a>
                    <a href="#">Images</a>
                    <IoApps />
                    <VscAccount />
                </div>
            </div>

            <div className="mainBody">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="Google Logo"
                />
                <div className="search">
                    <div className="search__input">
                        <IoIosSearch />
                        <input type="text" placeholder="Search..." />
                        <FaMicrophoneAlt />
                    </div>

                    <Labels />
                </div>
            </div>
        </div>
    )
}

export default Main