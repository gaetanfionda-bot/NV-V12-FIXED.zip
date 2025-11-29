import TryOnViewer from "../../../components/TryOnViewer";

export default function TryPage({ params }) {
  return <TryOnViewer model={params.model} />;
}
