"use client";

import { useId } from "react";

export default function ActivityChart() {
  const id = useId();

  const primaryGradient = `${id}-primary`;
  const tealGradient = `${id}-teal`;

  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-surface-container-high/40 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-label-md font-bold text-on-surface">
            Book Activity & Engagement
          </h2>

          <p className="mt-0.5 text-label-sm text-on-surface-variant">
            Catalog additions vs. views and completed scholarly readings
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Legend
            color="bg-secondary"
            label="Added"
          />

          <Legend
            color="bg-primary-container"
            label="Viewed"
          />

          <Legend
            color="bg-on-surface-variant"
            label="Read"
          />
        </div>
      </div>

      <div className="mt-4 h-60 w-full">
        <svg
          className="h-full w-full overflow-visible"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id={primaryGradient}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#2563eb"
                stopOpacity="0.22"
              />

              <stop
                offset="100%"
                stopColor="#2563eb"
                stopOpacity="0"
              />
            </linearGradient>

            <linearGradient
              id={tealGradient}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#006a61"
                stopOpacity="0.18"
              />

              <stop
                offset="100%"
                stopColor="#006a61"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {[20, 75, 130, 185].map((y) => (
            <line
              key={y}
              x1="0"
              x2="600"
              y1={y}
              y2={y}
              stroke="#eaedff"
              strokeDasharray={y === 185 ? undefined : "4,4"}
            />
          ))}

          <path
            d="M 0 160 Q 60 140, 120 110 T 240 70 T 360 90 T 480 40 T 600 25 L 600 185 L 0 185 Z"
            fill={`url(#${primaryGradient})`}
          />

          <path
            d="M 0 160 Q 60 140, 120 110 T 240 70 T 360 90 T 480 40 T 600 25"
            fill="none"
            stroke="#2563eb"
            strokeLinecap="round"
            strokeWidth="2.5"
          />

          <path
            d="M 0 175 Q 70 165, 140 145 T 280 120 T 420 105 T 520 80 T 600 65"
            fill="none"
            stroke="#006a61"
            strokeLinecap="round"
            strokeWidth="2"
          />

          <path
            d="M 0 182 Q 90 178, 180 170 T 360 160 T 500 145 T 600 135"
            fill="none"
            stroke="#737686"
            strokeDasharray="3,3"
            strokeWidth="1.8"
          />

          {/* Peak */}
          <circle
            cx="480"
            cy="40"
            r="12"
            fill="#2563eb"
            fillOpacity="0.15"
          />

          <circle
            cx="480"
            cy="40"
            r="6"
            fill="#fff"
            stroke="#2563eb"
            strokeWidth="3"
          />

          {/* Tooltip */}
          <g transform="translate(420, -10)">
            <rect
              width="124"
              height="42"
              rx="8"
              fill="#131b2e"
            />

            <text
              x="12"
              y="18"
              fill="#eef0ff"
              fontSize="11"
              fontWeight="600"
            >
              Week 4 Activity
            </text>

            <text
              x="12"
              y="32"
              fill="#86f2e4"
              fontSize="11"
              fontWeight="700"
            >
              42,850 Views
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-2 flex justify-between gap-2 overflow-hidden px-1 text-[10px] text-outline sm:text-label-sm">
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
        <span>Week 4</span>
        <span>Today</span>
      </div>
    </div>
  );
}

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-label-sm text-on-surface-variant">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}