import styles from './Text.module.css'

export const Text = ({ text, ...props }) => {
    return <p className={styles.text} {...props}>{text}</p>
}