import { MdErrorOutline } from 'react-icons/md';

export default function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
            }}
        >
            <MdErrorOutline style={{ fontSize: '6rem', color: 'orange', margin: '10px 0' }} />
            <h1 style={{ fontSize: '6rem', margin: 0 }}>404</h1>
            <p style={{ fontSize: '1.5rem' }}>Oops! Page not found.</p>
        </div>
    );
}
