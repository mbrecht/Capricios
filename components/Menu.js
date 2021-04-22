import React, { useState } from "react";
import mockMenu from "../util/mockMenu";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  const [menu, setMenu] = useState(mockMenu);

  return (
    <div className={styles.container}>
      <h2 className={styles.title} id="menu">
        Menu
      </h2>
      <div className={styles.menuContainer}>
        {Object.entries(menu).map(([groupName, items]) => {
          return (
            <div className={styles.menuGroup} key={groupName}>
              <h3 className={styles.menuGroupName}>{groupName}</h3>
              {items.map(({ name, description, price }) => (
                <div className={styles.menuItem}>
                  <h4 className={styles.menuItemName}>{name}</h4>
                  <p className={styles.menuItemDescription}>{description}</p>
                  <p className={styles.menuItemPrice}>${price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
