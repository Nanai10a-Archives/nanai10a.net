import { FC } from "react";
import styles from "../styles/components/Header.module.scss";
import TriangleArrow from "./TriangleArrow";
import MyIcon from "./MyIcon";

const Header: FC<Props> = (props) => {
  return (
    <>
      {props.showArrow ? (
        <div className={styles.guide_arrow_container}>
          <TriangleArrow do_hover_anim={true} />
        </div>
      ) : (
        <></>
      )}

      <div className={styles.header_container}>
        <div className={styles.header_bar_container}>
          <div className={styles.header_bar_text}>Nanai10a</div>
        </div>

        {props.showIcon ? (
          <div className={styles.header_icon_container}>
            <div className={styles.header_icon_wrapper}>
              <MyIcon />
            </div>
            <div className={styles.header_icons_rail} />
          </div>
        ) : (
          <></>
        )}

        <div className={styles.header_icon_after} />
      </div>
    </>
  );
};

export default Header;

export type Props = {
  showArrow?: boolean;
  showIcon?: boolean;
};
