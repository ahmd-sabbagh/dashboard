"use client";

import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type Series = {
  key: string;
  label: string;
  color: string;
};

interface DashboardLineChartProps {
  title: string;
  description: { one: string; two: string };
  data: Record<string, unknown>[];
  xKey: string;
  series: Series[];
  footerText?: string;
}

export function DashboardLineChart({
  title,
  description,
  data,
  xKey,
  series,
  footerText,
}: DashboardLineChartProps) {
  const chartConfig: ChartConfig = series.reduce(
    (acc, s) => ({
      ...acc,
      [s.key]: { label: s.label, color: s.color },
    }),
    {}
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-[#FFAB00]" />
            <span className="text-sm title-color">{description.one}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-[#00A76F]" />
            <span className="text-sm title-color">{description.one}</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[360px] w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(v) => String(v).slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {series.map((s) => (
              <Line
                key={s.key}
                dataKey={s.key}
                type="monotone"
                stroke={s.color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>

      {footerText && (
        <CardFooter>
          <div className="flex items-center gap-2 text-sm">
            {footerText} <TrendingUp className="h-4 w-4" />
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
