export function Footer() {
  return (
    <footer className="border-t transition-colors duration-300" style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm" style={{ color: 'var(--muted)' }}>
          <p>&copy; {new Date().getFullYear()} Veggdyrsøk. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}
