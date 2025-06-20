interface ContestResultsProps {
    children: React.ReactNode
}

const ContestResults: React.FC<ContestResultsProps> = ({ children }) => {
    return (
        <div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default ContestResults;