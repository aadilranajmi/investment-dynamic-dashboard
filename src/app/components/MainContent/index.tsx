import Expenses from "../dashboard/Expenses";
import style from "./style.module.scss";
const MainContent = () => {
  return (
    <div className={`${style.mainWrapper}`}>
      <div className={style.masonry}>
        <Expenses />
      </div>
    </div>
  );
};

export default MainContent;
