import { useContext, type Component, For } from 'solid-js'
import styles from './Dashboard.module.css'
import { YovolveContext } from './Game'
import ItemCard from './ItemCard';

const Dashboard: Component = () => {
    const service = useContext(YovolveContext)

    return (
        <div class={styles.container}>
            <For each={service().items} fallback={<></>}>
                {item => <ItemCard item={item} />}
            </For>
        </div>
    );
};

export default Dashboard;
