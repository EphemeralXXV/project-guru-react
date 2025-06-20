import Styles from '@/components/Table.module.scss';

interface TableProps {
    children: React.ReactNode
}

const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <table className = {Styles.table}>
            {children}
        </table>
    );
}

export default Table;