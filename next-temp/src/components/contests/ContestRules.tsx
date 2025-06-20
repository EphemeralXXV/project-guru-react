interface ContestRulesProps {
    children: React.ReactNode
}

const ContestRules: React.FC<ContestRulesProps> = ({ children }) => {
    return (
        <div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default ContestRules;