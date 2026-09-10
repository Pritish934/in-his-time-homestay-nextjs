export default function Footer() {
  return (
    <footer className="bg-[#17221b] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-display text-3xl">In His Time</p>
          <p className="mt-2 text-xs text-white/45">Homestay · Sohra, Meghalaya</p>
        </div>
        <div className="text-xs leading-6 text-white/45 md:text-right">
          <p>Circuit House Road, Saitsohpen, Sohra</p>
          <p>Meghalaya 793108 · India</p>
          <p className="mt-3">© {new Date().getFullYear()} In His Time</p>
        </div>
      </div>
    </footer>
  );
}