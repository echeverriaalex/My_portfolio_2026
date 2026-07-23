import { Chart } from "@highcharts/react";
import { LineSeries } from "@highcharts/react/series/Line";

export default function LineChart({ data }: { data: number[] }) {
  return (
    <Chart>
      <LineSeries data={data} />
    </Chart>
  );
}