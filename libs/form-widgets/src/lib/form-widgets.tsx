export interface TextInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "6px",
      margin: "12px 0",
    },
    label: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#333",
    },
    input: {
      padding: "10px 12px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input type={"text"} onChange={onChange} style={styles.input} />
    </div>
  );
};

export { TextInput };
