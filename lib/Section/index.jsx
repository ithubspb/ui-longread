import styles from './Section.module.css'

export const Section = ({ title, children, ...props }) => {
    return (
        <section className={styles.section} {...props}>
            <h2 className={styles.section__heading}>{title}</h2>
            <div className={styles.section__content}>
                {children}
            </div>
        </section>
        
    )
}