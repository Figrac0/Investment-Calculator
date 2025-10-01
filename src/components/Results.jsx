import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
    const resData = calculateInvestmentResults(userInput);

    const initialInvestment =
        resData[0].valueEndOfYear -
        resData[0].interest -
        resData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>interest (Year)</th>
                <th>Total interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {resData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                    const totalAmountInvested =
                        yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
