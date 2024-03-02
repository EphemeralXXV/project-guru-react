interface ContestItineraryProps {
    children: React.ReactNode
}

const ContestItinerary: React.FC<ContestItineraryProps> = ({ children }) => {
    return (
        <div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default ContestItinerary;