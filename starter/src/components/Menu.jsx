import menuData from "../data";
import { MenuItems } from "./MenuItems";

export const Menu = () => {
    return (
        <section>
            <h3>Menu</h3>
            {menuData.map((menuItem) => {
                return <MenuItems key={menuItem.id} {...menuItem} />;
            })}
        </section>
    );
};
