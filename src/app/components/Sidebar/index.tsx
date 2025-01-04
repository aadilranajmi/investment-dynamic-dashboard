import Link from "next/link";
import style from "./style.module.scss";
import { IoHomeOutline } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={`${style.sidebar}`}>
      <Link href="/" className={style.active}>
        <IoHomeOutline />
        <span>Home</span>
      </Link>
      <Link href="/">
        <FaTachometerAlt />
        <span>Jobs</span>
      </Link>
    </div>
  );
};

export default Sidebar;
