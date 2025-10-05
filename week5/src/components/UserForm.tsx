import { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Form Exercise - Solution</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ marginLeft: "10px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={{ marginLeft: "10px", width: "100%" }}
          />
        </div>
        <div>
          <button  onClick={() => alert(`ชื่อ: ${formData.name} อีเมล:${formData.email}`)}>Submit</button>
          <button
            onClick={() => setFormData({ name: "", email: "" })}
          >
            Clear
          </button>
        </div>
      </form>

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <h3>ข้อมูลปัจจุบัน</h3>
        <div>
          <span style={{ fontWeight: "bold" }}>ชื่อ:</span> {formData.name}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>อีเมล:</span> {formData.email}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
