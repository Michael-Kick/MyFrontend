function formatMonthYearISO(date: Date): string {
    const [year, month] = date.toISOString().split("T")[0].split("-");
    return `${month}/${year}`;
}

export default formatMonthYearISO;