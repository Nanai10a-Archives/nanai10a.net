import { FC } from "react";

import styles from "../styles/components/MyIcon.module.scss";

const MyIcon: FC<Props> = () => {
  return (
    <div className={styles.icon_container}>
      <div className={styles.icon} />
    </div>
  );
};

export default MyIcon;

type Props = Record<string, never>;
