import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
    const { id } = useParams();
    return <div style={{fontWeight:600}}>Id = {id}</div>;
};
