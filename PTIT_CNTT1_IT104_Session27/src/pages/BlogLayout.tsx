import { Outlet, Link } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#2c3e50",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.8rem", textAlign: "center" }}>
          My Blog
        </h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/blog/posts"
                style={{
                  textDecoration: "none",
                  color: "#ecf0f1",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
