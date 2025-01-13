import Header from "./components/Header";
import ReportCard from "./components/ReportCard";

const ReportsPage = () => (
  <div className="flex h-screen">
    <main className="flex-grow bg-gray-100">
      <Header />
      <div className="px-10 py-6">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <ReportCard
              key={idx}
              title={`Hackathon 2024: Innovate & Inspire`}
              description={`Join us for a 48-hour innovation sprint where creativity meets technology.`}
              attendees={Math.floor(Math.random() * 1000)}
            />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default ReportsPage;
