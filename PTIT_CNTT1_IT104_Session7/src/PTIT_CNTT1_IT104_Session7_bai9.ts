class Post {
    constructor(
        public id: string,
        public likes: User[],
        public comments: Comment1[],
        public userId: string,
        public content: string
    ) {}
    addLike(user: User): void {
        this.likes.push(user);
    }
    addComment(comment: Comment1): void {
        this.comments.push(comment);
    }
}

class Comment1 {
    constructor(
        public id: string,
        public userId: string,
        public content: string,
        public replies: string[]
    ) {}
    addReply(reply: string): void {
        this.replies.push(reply);
    }
}

const publicPost: Post[] = [];

class User {
    constructor(
        public id: string,
        public posts: Post[],
        public followers: User[]
    ) {}

    createPost(content: string) {
        const id = `P-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

        const tmp = new Post(id, [], [], this.id, content);
        this.posts.push(tmp);
        publicPost.push(tmp);
    }

    comment(postId: string, commentContent: string) {
        const tmp = publicPost.find((e) => e.id === postId);
        const id = `P-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        if (!tmp) {
            console.log('Post not found');
            return;
        }
        tmp.comments.push(new Comment1(id, this.id, commentContent, []));
    }

    follow(user: User): void {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(postId: string): void {
        const tmp = publicPost.find((e) => e.id === postId);
        if (tmp && !tmp.likes.includes(this)) {
            tmp.likes.push(this);
        }
    }

    viewFeed(): void {
        const allPosts = [...this.posts];
        this.followers.forEach((user) => allPosts.push(...user.posts));

        allPosts.forEach((post) => {
            if (post.userId === this.id) {
                console.log(`My Post: ${post.content}`); // Bài của chính mình in khác
            } else {
                console.log(`Post by ${post.userId}: ${post.content}`); // Bài người khác
            }
        });
    }
}

// Tạo 3 user
const userA = new User('userA', [], []);
const userB = new User('userB', [], []);
const userC = new User('userC', [], []);

// userA follow userB và userC
userA.follow(userB);
userA.follow(userC);

// userB và userC tạo bài đăng
userB.createPost('Hello from userB!');
userC.createPost('Greetings from userC!');

// userA tạo bài đăng
userA.createPost('This is my first post!');

// userA like bài của userB
const postB = userB.posts[0];
userA.likePost(postB.id);

// userA comment vào bài của userC
const postC = userC.posts[0];
userA.comment(postC.id, 'Nice post, userC!');

// Hiển thị feed của userA (bao gồm bài của userB và userC)
console.log('--- UserA Feed ---');
userA.viewFeed();

// Kiểm tra comments trên bài của userC
console.log('\n--- Comments on userC post ---');
postC.comments.forEach((comment) => {
    console.log(`Comment by ${comment.userId}: ${comment.content}`);
});
