import styles from "./style.module.scss";
import { GiRocketThruster } from "react-icons/gi";

const Expenses = () => {
  return (
    <div className={`${styles.expenseSell} card-bg`}>
      <div className={styles.expensesCard}>
        <h2>Expenses</h2>
        <div className={styles.expenseOverview}>
          <p>Total Amount</p>
          <p>Yesterday Investment</p>
          <div className={styles.expenseOverviewHeighlight}>
            <span>3SO</span>
            <span>$ 253</span>
          </div>
        </div>
        <div className={`${styles.expenseCardDetails} mb-4 card-shadow`}>
          <div>
            <span>Soon Revenue</span>
            <span>
              <GiRocketThruster />
            </span>
          </div>
          <div>
            <span>Revenue Generated</span>
            <span>$ 343</span>
          </div>
        </div>
        <div className={`${styles.expenseCardDetails} card-shadow`}>
            <div>
              <span>Domit Artisan</span>
              <span>- $ 253</span>
            </div>
            <div>
              <span>Paynll anass</span>
              <span>226.980</span>
            </div>
            <div>
              <span>Romt Oloor</span>
              <span>T206</span>
            </div>
        </div>
      </div>
      <div className={styles.sellDetails}>
        <h2>ArreKoce</h2>
        <div className={styles.expenseOverview}>
          <p>Monitoring</p>
          <p>Piorrer</p>
          <div className={styles.expenseOverviewHeighlight}>
            <span>6S2</span>
            <span>$ 2343</span>
          </div>
        </div>
        <div className={`${styles.sellDetailsOverview}`}>
          <table>
            <tr>
              <td className="pt-0">
                <div className="mb-2">
                  <span>KiitiRide tonight</span>
                  <span>$ 2343</span>
                </div>
                <div>
                  <span>Epoch Enve</span>
                  <span>-80</span>
                </div>
                <div>
                  <span>Sarok Pister</span>
                  <span>$ 234380</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <span>KiitiRide tonight</span>
                  <span>$ 2343</span>
                </div>
                <div className="mb-2">
                  <span>KiitiRide tonight</span>
                  <span>$ 2343</span>
                </div>
                <div>
                  <span>Epoch Enve</span>
                  <span>-80</span>
                </div>
                <div>
                  <span>Sarok Pister</span>
                  <span>$ 234380</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
