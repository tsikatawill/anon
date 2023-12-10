import { Line, LineChart } from "recharts";
import { Container } from "../../components/Container";

export default function CampaignsPage() {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  const renderLineChart = (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <Container className="py-5">
      <h1 className="text-3xl font-bold"> Campaigns page</h1>

      <div className="mt-10">{renderLineChart}</div>
    </Container>
  );
}
