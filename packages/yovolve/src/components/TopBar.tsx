import type { Component } from 'solid-js'
import styles from './TopBar.module.css'

const TopBar: Component = () => {
    return (<div class={styles.topbar}>
        <span class={styles.header}>Yovolve</span>
        <span class={styles.version}>dev</span>
    </div>);
};

export default TopBar;
