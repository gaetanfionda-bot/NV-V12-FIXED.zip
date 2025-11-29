import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "@google/model-viewer";

export default function TryOnViewer() {
  const { model } = useParams();
  const navigate = useNavigate();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const lower = model.toLowerCase();

    if (lower === "ld007") setSrc("/models/LD007.glb");
    else if (lower === "ld008") setSrc("/models/LD008.glb");
    else if (lower === "nv12") setSrc("/models/NV12.glb");
    else if (lower === "nv-hoodie") setSrc("/models/NV_HOODIE.glb");
    else if (lower === "nv-cap") setSrc("/models/NV_CAP.glb");
    else setSrc(null);
  }, [model]);

  if (!src) {
    return (
      <div style={styles.container}>
        <h1 style={{ color: "white" }}>Modèle introuvable</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.close} onClick={() => navigate(-1)}>
        ✕
      </button>

      <model-viewer
        src={src}
        camera-controls
        auto-rotate
        ar
        ar-modes="webxr scene-viewer quick-look"
        exposure="1"
        shadow-intensity="1"
        style={styles.viewer}
      >
      </model-viewer>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  viewer: {
    width: "100vw",
    height: "100vh",
    background: "black",
  },
  close: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "#cc1010",
    border: "none",
    color: "white",
    padding: "10px 15px",
    fontSize: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    zIndex: 10,
  },
};
