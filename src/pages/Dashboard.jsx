import ActionCard from "../components/ActionCard";

export default function Dashboard() {
  return (
    <div className="p-10">

      <h1 className="text-3xl mb-10 font-semibold">
        Voice Mode Agent
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <ActionCard
          title="Talk to Customer"
          route="/talk"
        />

        <ActionCard
          title="Deal Clinic"
          route="/clinic"
        />

        <ActionCard
          title="Customer Interaction Report"
          route="/customer-report"
        />

        <ActionCard
          title="Deal Clinic Report"
          route="/deal-report"
        />

      </div>

    </div>
  );
}