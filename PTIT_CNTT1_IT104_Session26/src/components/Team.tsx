import { useParams } from 'react-router-dom';

export const Team = () => {
    const { teamId } = useParams();
    return (
        <div>
            <h3>Team Detail</h3>
            <p>
                You are viewing team: <b>{teamId}</b>
            </p>
        </div>
    );
};
