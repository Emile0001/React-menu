import { Menu } from "./components/Menu";
import { Title } from "./components/Title";

const App = () => {
    return (
        <main>
            <section>
                <Title title={"our menu"} />
            </section>
            <article>
                <Menu />
            </article>
        </main>
    );
};
export default App;
