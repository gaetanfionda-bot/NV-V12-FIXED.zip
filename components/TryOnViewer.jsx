"use client";
import "@google/model-viewer";
import { useRouter } from "next/navigation";

export default function TryOnViewer({ model }) {
  const router = useRouter();

  const models = {
    ld007: "/models/LD007.glb",
    ld008: "/models/LD008.glb",
    nv12: "/models/NV12.glb",
    "nv-hoodie": "/models/NV_HOODIE.glb",
    "nv-cap": "/models/NV_CAP.glb",
  };

  const src = models[model.toLowerCase()];

  if (!src) {
    return (
      <div style={styles.container}>
        <h1 style={{ color: "white" }}>Modèle introuvable</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.close} onClick={() => router.back()}>
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
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "black",
    position: "relative",
  },
  viewer: {
    width: "100vw",
    height: "100vh",
    background: "black",
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20,
    background: "#cc1010",
    color: "white",
    border: "none",
    padding: "10px 18px",
    fontSize: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    zIndex: 10,
  },
};
