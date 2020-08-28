import React from 'react'
import styles from './SearchButton.module.css'

export default function SearchButton(props) {
    return (
        <button onClick={props.searchClicked} className={styles.SearchButton + ' ' + (props.sidebarIsOpen ? styles.Open : styles.Close)}>
            Buscar
        </button>
    )
}