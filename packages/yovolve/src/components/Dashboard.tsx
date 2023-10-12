import { useContext, type Component, For } from 'solid-js'
import styles from './Dashboard.module.css'
import { YovolveContext } from './Game'

const Dashboard: Component = () => {
    const service = useContext(YovolveContext)

    return (
        <div>
            <For each={service().items} fallback={<></>}>
                {() => <></>}
            </For>
        </div>
    );
};

export default Dashboard;
