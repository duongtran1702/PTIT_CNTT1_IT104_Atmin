import { useReducer } from 'react';

// Action types
type Action = { type: 'Increase' } | { type: 'Decrease' } | { type: 'Reset' };

const reducer = (state: number, action: Action): number => {
    switch (action.type) {
        case 'Increase':
            return state + 1;
        case 'Decrease':
            return state - 1;
        case 'Reset':
            return 0;
        default:
            return state;
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);

    // CSS-in-JS styles
    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            margin: 20,
        },
        box: {
            background: '#fff',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
            textAlign: 'center',
            width: '320px',
            transition: 'transform 0.3s ease',
        },
        count: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#7f5af0',
        },
        btnGroup: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
        },
        btn: {
            flex: 1,
            margin: '0 5px',
            padding: '12px 0',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#fff',
            transition: 'all 0.2s ease-in-out',
        },
        decrease: { background: '#e63946' },
        reset: { background: '#6c757d' },
        increase: { background: '#06d6a0' },
    };

    return (
        <div style={styles.container}>
            <div
                style={styles.box}
                onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.transform =
                        'translateY(-5px)')
                }
                onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.transform =
                        'translateY(0)')
                }
            >
                <h2>
                    Số đếm: <span style={styles.count}>{count}</span>
                </h2>
                <div style={styles.btnGroup}>
                    <button
                        onClick={() => dispatch({ type: 'Decrease' })}
                        style={{ ...styles.btn, ...styles.decrease }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = '#d62839')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = '#e63946')
                        }
                    >
                        Decrease
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'Reset' })}
                        style={{ ...styles.btn, ...styles.reset }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = '#5a6268')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = '#6c757d')
                        }
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'Increase' })}
                        style={{ ...styles.btn, ...styles.increase }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = '#05c08c')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = '#06d6a0')
                        }
                    >
                        Increase
                    </button>
                </div>
            </div>
        </div>
    );
}
