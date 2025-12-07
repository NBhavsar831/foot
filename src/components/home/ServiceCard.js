<motion.div
  role="article"
  aria-labelledby={`service-${index}-title`}
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Handle keyboard navigation
    }
  }}
  className="group relative bg-white rounded-3xl p-8"
>
  <h3 id={`service-${index}-title`} className="text-xl font-bold">
    {service.title}
  </h3>
  // ... existing code ...
</motion.div>