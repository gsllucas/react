import React from "react";

export function PropsComponent({ text, color, size }) {
  return <p style={{ color: color, fontSize: size }}>{text}</p>;
}

export function ChildrenComponent({ children }) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "16px",
      }}
    >
      {children}
    </div>
  );
}

export function SpreadPropsComponent({ type, label, ...props }) {
  return (
    <div>
      <p>
        <label>{label}</label>
      </p>
      <input type={type} {...props}></input>
    </div>
  );
}
