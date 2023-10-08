import type { Component } from 'solid-js'
import styles from './topbar.module.css'

const TopBar: Component = () => {
    return (<div class={styles.topbar}>
        <span class={styles.header}>Evolve</span>
        <span class={styles.version}>v0.0.0</span>
    </div>);
};

export default TopBar;
