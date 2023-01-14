const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={117}
            cy={83}
            fill="white"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"7px"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
        // strokeLinecap="round"
        ></circle>
    );
};


const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={160} height={160} className='pie'>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour="white" />
                <Circle colour={colour} pct={pct} />
            </g>
        </svg>
    );
};

export default Pie;
