"use client";

import { useRouter } from "next/navigation";
import "@google/model-viewer";

export default function TryOnViewer({ model }) {
  const router = useRouter();

  // Tous tes modèles GLB ici :
  const models = {
    ld007: "/models/LD007.glb",
    // Tu pourras ajouter LD008 ici ensuite :
    // ld008: "/models/LD008.glb",
  };

  const src = models[model?.toLowerCase()];

  if (!src) {
    return (
      <div style={styles.container}>
        <button style={styles.close} onClick={() => router.back()}>
          ✕
        </button>
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
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  viewer: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    top: 20,
    left: 20,
    background: "rgba(255,255,255,0.2)",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "20px",
  },
};
