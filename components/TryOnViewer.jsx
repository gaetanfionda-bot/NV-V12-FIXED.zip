"use client";
import "@google/model-viewer";

export default function TryOnViewer({ model }) {
  if (!model) return <p>Modèle introuvable</p>;

  return (
    <div className="w-full h-[70vh] flex items-center justify-center bg-black">
      <model-viewer
        src={model}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1.1"
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>
    </div>
  );
}


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
