export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">
        Wait a moment...
      </p>
    </div>
  );
}