import React from "react";

export const Buttons_bai8 = () => {
  const fixStyle: React.CSSProperties = {
    height: "35px",
    width: "50px",
    borderRadius: "8px",
    border: "1px solid gray",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  };

  const delStyle: React.CSSProperties = {
    height: "35px",
    width: "50px",
    borderRadius: "8px",
    backgroundColor:"red",
    color:"white",
    border:"none",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  };
  return (
    <td
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        gap: "10px",
      }}>
      <button style={fixStyle}>Sua</button>
      <button style={delStyle}>Xoa</button>
    </td>
  );
};
