import {
    Avatar,
    Button,
    Form,
    Input,
    Modal,
    Select,
    Space,
    Table,
    Tag,
    message,
} from 'antd';
import '@mdxeditor/editor/style.css';
import TextEditor from '../../components/textEditor';
import { useEffect, useState, useMemo, useCallback } from 'react';
import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined,
    ShareAltOutlined,
} from '@ant-design/icons';
import type { Post } from '../../interfaces/post.interface';
import debounce from 'lodash.debounce';
import { apiClient } from '../../utils/apiClient';

const { Option } = Select;

export default function PostList() {
    const [value, setValue] = useState<string>('');
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [form] = Form.useForm();

    const [confirmModal, setConfirmModal] = useState(false);
    const [confirmAction, setConfirmAction] = useState<{
        type: 'delete' | 'block' | 'unblock' | null;
        post: Post | null;
    }>({ type: null, post: null });

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5);
    const [total, setTotal] = useState(0);

    // Search & Filter
    const [searchKeyword, setSearchKeyword] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    

    // GET all posts
    const fetchAllPost = useCallback(
        async (page = 1, keyword = '', status = 'all') => {
            try {
                const params: Record<string, unknown> = {
                    _page: page,
                    _limit: pageSize,
                };
                if (keyword) params.q = keyword;
                if (status !== 'all') params.status = status;

                const res = await apiClient.get(`/posts`, { params });
                setPosts(res.data);
                setTotal(
                    Number(res.headers['x-total-count']) || res.data.length
                );
            } catch (error) {
                console.error(error);
                message.error('Không thể tải danh sách bài viết');
            }
        },
        [pageSize]
    );

    useEffect(() => {
        fetchAllPost(currentPage, searchKeyword, statusFilter);
    }, [currentPage, searchKeyword, statusFilter,fetchAllPost]);

    const handleSearch = useMemo(
        () =>
            debounce((value: string) => {
                setCurrentPage(1);
                setSearchKeyword(value);
            }, 500),
        []
    );

    // Add / Update
    const handleSubmit = async (values: Post) => {
        try {
            if (editingPost) {
                await apiClient.put(`/posts/${editingPost.id}`, {
                    ...editingPost,
                    ...values,
                    content: value,
                });
                message.success('Cập nhật thành công');
            } else {
                await apiClient.post(`/posts`, {
                    ...values,
                    content: value,
                    status: 'draft',
                    date: new Date().toLocaleDateString('vi-VN'),
                });
                message.success('Thêm mới thành công');
            }
            setIsModalOpen(false);
            setEditingPost(null);
            form.resetFields();
            setValue('');
            fetchAllPost(currentPage, searchKeyword, statusFilter);
        } catch (error) {
            console.error(error);
            message.error('Lưu thất bại');
        }
    };

    // Confirm actions
    const handleConfirmAction = async () => {
        if (!confirmAction.post || !confirmAction.type) return;
        try {
            if (confirmAction.type === 'delete') {
                await apiClient.delete(`/posts/${confirmAction.post.id}`);
                message.success('Xóa thành công');
            } else if (confirmAction.type === 'block') {
                await apiClient.patch(`/posts/${confirmAction.post.id}`, {
                    status: 'draft',
                });
                message.success('Đã chặn bài viết');
            } else if (confirmAction.type === 'unblock') {
                await apiClient.patch(`/posts/${confirmAction.post.id}`, {
                    status: 'published',
                });
                message.success('Đã bỏ chặn bài viết');
            }
            fetchAllPost(currentPage, searchKeyword, statusFilter);
        } catch {
            message.error('Thao tác thất bại');
        } finally {
            setConfirmModal(false);
            setConfirmAction({ type: null, post: null });
        }
    };

    const handleEdit = (post: Post) => {
        setEditingPost(post);
        setIsModalOpen(true);
        form.setFieldsValue({
            title: post.title,
            image: post.image,
        });
        setValue(post.content ?? '');
    };

    const handleAdd = () => {
        setEditingPost(null);
        setIsModalOpen(true);
        form.resetFields();
        setValue('');
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (_: unknown, __: unknown, index: number) =>
                (currentPage - 1) * pageSize + index + 1,
            width: 60,
        },
        { title: 'Tiêu đề', dataIndex: 'title', key: 'title', width: 300 },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            width: 100,
            render: (image: string) => {
                const isUrl = /^https?:\/\//.test(image); // check URL http/https
                return (
                    <Avatar
                        size={50}
                        src={isUrl ? image : undefined}
                        style={{
                            background: !isUrl
                                ? image === 'react'
                                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    : 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
                                : undefined,
                        }}
                    >
                        {/* fallback text */}
                        {isUrl
                            ? 'Ảnh'
                            : image === 'react'
                            ? 'ReactJS'
                            : 'Redux'}
                    </Avatar>
                );
            },
        },

        { title: 'Ngày viết', dataIndex: 'date', key: 'date', width: 150 },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            render: (status: string) =>
                status === 'published' ? (
                    <Tag color="green">Đã xuất bản</Tag>
                ) : (
                    <Tag color="orange">Bản nháp</Tag>
                ),
        },
        {
            title: 'Chức năng',
            key: 'actions',
            render: (_: unknown, record: Post) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<ShareAltOutlined />}
                        size="small"
                        style={{
                            backgroundColor:
                                record.status === 'published'
                                    ? '#F5B027'
                                    : '#108ee9',
                            borderColor:
                                record.status === 'published'
                                    ? '#F5B027'
                                    : '#108ee9',
                            color: '#fff',
                        }}
                        onClick={() => {
                            setConfirmAction({
                                type:
                                    record.status === 'published'
                                        ? 'block'
                                        : 'unblock',
                                post: record,
                            });
                            setConfirmModal(true);
                        }}
                    >
                        {record.status === 'published' ? 'Chặn' : 'Bỏ chặn'}
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size="small"
                        style={{
                            backgroundColor: '#15e40c',
                            borderColor: '#15e40c',
                            color: '#fff',
                        }}
                        onClick={() => handleEdit(record)}
                    >
                        Sửa
                    </Button>
                    <Button
                        type="primary"
                        icon={<DeleteOutlined />}
                        size="small"
                        style={{
                            backgroundColor: '#FA5E3A',
                            borderColor: '#FA5E3A',
                            color: '#fff',
                        }}
                        onClick={() => {
                            setConfirmAction({
                                type: 'delete',
                                post: record,
                            });
                            setConfirmModal(true);
                        }}
                    >
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            {/* Modal Form thêm mới / Cập nhật */}
            <Modal
                title={
                    <h3>
                        {editingPost
                            ? 'Cập nhật bài viết'
                            : 'Thêm mới bài viết'}
                    </h3>
                }
                width={1000}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <Form layout="vertical" form={form} onFinish={handleSubmit}>
                    <Form.Item
                        label="Tên bài viết"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên bài viết',
                            },
                        ]}
                    >
                        <Input placeholder="Tên bài viết" />
                    </Form.Item>
                    <Form.Item
                        label="Hình ảnh"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập hình ảnh',
                            },
                        ]}
                    >
                        <Input placeholder="Hình ảnh" />
                    </Form.Item>
                    <Form.Item label="Nội dung">
                        <TextEditor
                            height={400}
                            onChange={(val?: string) => setValue(val ?? '')}
                            value={value}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {editingPost ? 'Cập nhật' : 'Thêm mới'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Modal xác nhận */}
            <Modal
                open={confirmModal}
                onOk={handleConfirmAction}
                onCancel={() => setConfirmModal(false)}
                okText="Xác nhận"
                cancelText="Hủy"
            >
                <p>
                    {confirmAction.type === 'delete' &&
                        'Bạn có chắc chắn muốn xóa bài viết này?'}
                    {confirmAction.type === 'block' &&
                        'Bạn có chắc chắn muốn chặn bài viết này?'}
                    {confirmAction.type === 'unblock' &&
                        'Bạn có chắc chắn muốn bỏ chặn bài viết này?'}
                </p>
            </Modal>

            <div
                style={{
                    maxWidth: 1400,
                    margin: '20px auto',
                    background: '#fff',
                    padding: 24,
                    borderRadius: 8,
                }}
            >
                <Space
                    style={{ marginBottom: 24, width: '100%' }}
                    align="start"
                >
                    <Input
                        placeholder="Nhập từ khóa tìm kiếm"
                        style={{ width: 400 }}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <Select
                        defaultValue="all"
                        style={{ width: 180 }}
                        onChange={(val) => {
                            setCurrentPage(1);
                            setStatusFilter(val);
                        }}
                    >
                        <Option value="all">Lọc bài viết</Option>
                        <Option value="published">Đã xuất bản</Option>
                        <Option value="draft">Bản nháp</Option>
                    </Select>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAdd}
                    >
                        Thêm mới bài viết
                    </Button>
                </Space>

                <Table
                    columns={columns}
                    dataSource={posts}
                    rowKey="id"
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        total: total,
                        onChange: (page) => setCurrentPage(page),
                    }}
                    bordered
                />
            </div>
        </>
    );
}
