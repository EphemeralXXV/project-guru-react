import Styles from './Table.module.scss';

const Table = (props) => {
    return (
        <table className = {Styles.table}>
            {props.children}
        </table>
    );
}

export default Table;