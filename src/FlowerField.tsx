// FlowerField.tsx
import { useEffect, useState } from 'react';

interface FlowerData {
  id: number;
  scheme: number;      // 1-6
  variant: number;     // 1-3 (różne kształty)
  top: string;         // np. "15%"
  left: string;        // np. "72%"
  size?: number;       // opcjonalna skala
}

const FlowerField = ({ count = 12 }) => {
  const [flowers, setFlowers] = useState<FlowerData[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      scheme: Math.floor(Math.random() * 6) + 1,
      variant: Math.floor(Math.random() * 3) + 1,  // 1,2,3
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      size: 0.6 + Math.random() * 0.8,            // skala 0.6-1.4
    }));
    setFlowers(generated);
  }, [count]);

  return (
    <>
      {flowers.map((f) => (
        <div
          key={f.id}
          className={`flower flower-variant-${f.variant}`}
          style={{
            position: 'absolute',
            top: f.top,
            left: f.left,
            transform: `translate(-50%, -50%) scale(${f.size})`,
            background: `var(--color-scheme-${f.scheme}-dark)`,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            className="flower-inner"
            style={{ background: `var(--color-scheme-${f.scheme}-light)` }}
          />
        </div>
      ))}
    </>
  );
};

export default FlowerField;