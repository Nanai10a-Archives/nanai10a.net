import { FC } from "react";
import styles from "../styles/components/TriangleArrow.module.scss";

const TriangleArrow: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <svg className={props.do_hover_anim ? styles.hover : styles.no_hover} height={56} width={66}>
        <polygon className={styles.out_polygon} points={"0,0 66,0 33,56"} />
        <polygon className={styles.inner_polygon} points={"16,10 49,10 32.5,38"} />
      </svg>
    </div>
  );
};

type Props = {
  do_hover_anim?: boolean;
};

export default TriangleArrow;
