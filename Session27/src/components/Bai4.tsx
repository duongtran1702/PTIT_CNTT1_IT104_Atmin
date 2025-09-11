import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

export const Bai4 = () => {
    const [input, setInput] = useState<string>('');
    const [searchQuery, setSearchQuery] = useSearchParams();
    useEffect(() => {
        const searchValue = searchQuery.get('search') || '';
        setInput(searchValue);
    }, [searchQuery]);

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    marginBottom: '20px',
                }}
            >
                <Input
                    style={{ width: '300px' }}
                    placeholder="Enter name product ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    type="primary"
                    onClick={() => setSearchQuery({ search: input })}
                >
                    Search
                </Button>
            </div>

            <Outlet />
        </div>
    );
};
