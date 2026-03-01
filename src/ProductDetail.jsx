// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
// Later: you can fetch real data by id from API or local array

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Product Detail</h1>
        <p className="text-xl text-gray-300">Product ID: {id}</p>
        {/* Later: show full details, big image, description, Add to Cart button */}
      </div>
    </div>
  );
}