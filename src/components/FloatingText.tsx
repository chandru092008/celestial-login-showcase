export const FloatingText = () => {
  const fonts = [
    { text: 'Cosmos', style: 'font-serif text-6xl', delay: '0s', x: '10%', y: '15%' },
    { text: 'Galaxy', style: 'font-mono text-5xl', delay: '1s', x: '80%', y: '20%' },
    { text: 'Stellar', style: 'font-sans text-4xl', delay: '2s', x: '15%', y: '75%' },
    { text: 'Nebula', style: 'font-serif text-7xl', delay: '3s', x: '85%', y: '70%' },
    { text: 'Orbit', style: 'font-mono text-5xl', delay: '1.5s', x: '50%', y: '10%' },
    { text: 'Astro', style: 'font-sans text-6xl', delay: '2.5s', x: '70%', y: '85%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {fonts.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.style} opacity-5 animate-float`}
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};
