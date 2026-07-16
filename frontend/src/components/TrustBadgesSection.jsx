export default function TrustBadgesSection() {
  const badges = [
    {
      icon: "🚚",
      title: "Free Delivery",
      subtitle: "Between 1 to 3 Working Days",
    },
    {
      icon: "↩️",
      title: "Easy Return",
      subtitle: "For Upto 7 Days From Purchase",
    },
    {
      icon: "✓",
      title: "100% Original",
      subtitle: "Highly Rigorous Quality Control",
    },
  ];

  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex flex-col items-center text-center py-6 sm:py-0"
          >
            <span className="text-2xl mb-3">{badge.icon}</span>
            <h3 className="text-white font-bold text-lg tracking-wide uppercase mb-1">
              {badge.title}
            </h3>
            <p className="text-gray-400 text-sm">{badge.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}