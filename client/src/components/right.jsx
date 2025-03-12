import "../sass/right.scss";
import Navbar from "./navbar";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts";
export default function Right() {
  const data = [
    {
      companyName: "Material UI XD Version",
      members: ["Eric", "Gabby"],
      budget: "$10,000",
      completion: <progress value={80} max={100}></progress>,
    },
    {
      companyName: "Add Progress Track",
      members: ["jack", "jonny", "Ron"],
      budget: "$3,000",
      completion: <progress value={45} max={100}></progress>,
    },
    {
      companyName: "Add the New Pricing Page",
      members: ["micheal", "franklin"],
      budget: "$500",
      completion: <progress value={32} max={100}></progress>,
    },
    {
      companyName: "Fix Platform Errors",
      members: ["trevor", "lester"],
      budget: "$5,000",
      completion: <progress value={90} max={100}></progress>,
    },
    {
      companyName: "Redesign New Online Shop",
      members: ["niko", "jacob"],
      budget: "$5,000",
      completion: <progress value={60} max={100}></progress>,
    },
  ];
  return (
    <>
      <div className="right">
        <Navbar />
        <LineChart
          xAxis={[
            {
              data: ["Mon", "Tue", "Wed", "Thur", "Fri", "sat"],
              scaleType: "point",
            },
          ]}
          series={[
            {
              data: [20, 40, 60, 80, 50, 100],
              area: true,
            },
            {
              data: [10, 35, 30, 40, 55, 76],
              area: true,
            },
            {
              data: [0, 20, 15, 43, 30, 20],
              area: true,
            },
          ]}
          height={350}
          colors={["#98d7c2", "lightgreen", "coral"]}
        />
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="top">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9150/9150506.png"
                  alt=""
                />
                <ruby>
                  281 <rt>Bookings</rt>
                </ruby>
              </div>
              <hr />
              <span>
                <b>+55%</b> than last week
              </span>{" "}
            </div>
            <div className="card">
              <div className="top">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1011/1011528.png"
                  alt=""
                />
                <ruby>
                  323 <rt>Top Users</rt>
                </ruby>
              </div>
              <hr />
              <span>
                <b>+95%</b> than last week
              </span>
            </div>
            <div className="card">
              <div className="top">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9236/9236169.png"
                  alt=""
                />
                <ruby>
                  50K <rt>Revenue</rt>
                </ruby>
              </div>
              <hr />
              <span>
                <b>+55%</b> than last week
              </span>{" "}
            </div>
            <div className="card">
              <div className="top">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4951/4951228.png"
                  alt=""
                />
                <ruby>
                  20K <rt>Followers</rt>
                </ruby>
              </div>
              <hr />
              <span>
                <b>+55%</b> than last week
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="graphs">
          <div className="graph">
            <LineChart
              series={[
                {
                  data: [10, 50, 223, 199, 300],
                  area: true,
                },
              ]}
              width={400}
              height={200}
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                  scaleType: "point",
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              colors={["lightblue"]}
            />
            <div className="info">
              <h3>Website Views</h3>
              <p>Last Campaign Performance</p>
            </div>
            <span>Checkout our Website!</span>
          </div>
          <div className="graph">
            <BarChart
              series={[
                {
                  data: [37, 23, 30, 29.6, 52],
                },
              ]}
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                  scaleType: "band",
                },
              ]}
              colors={["lightgreen"]}
              width={320}
            />
            <div className="info">
              <h3>Daily Sales</h3>
              <p>(+15%) increase in today sales.</p>
            </div>
            <span>Sales for this upcoming month!</span>
          </div>
          <div className="graph">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 40, label: "Views" },
                    { id: 1, value: 30, label: "Sales" },
                    { id: 2, value: 30, label: "Bookings" },
                  ],
                },
              ]}
              width={400}
              height={200}
              tooltip={"item"}
              colors={["coral", "lightgreen", "lightblue"]}
            />
            <div className="info">
              <h3>Stay Updated!</h3>
              <p>Campaign set today</p>
            </div>
            <span>Stay up to date with us!</span>
          </div>
        </div>

        <div className="overview">
          <div className="table-container">
            <h3>Projects</h3>
            <div className="amount">
              <div className="check">
                <IoCheckmarkDoneOutline />
                <span>30+ projects ready</span>
              </div>
              <PiDotsThreeOutlineVertical style={{ cursor: "pointer" }} />
            </div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Companies</th>
                  <th>Members</th>
                  <th>Budget</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.companyName}</td>
                    <td>
                      {item.members.map((mem) => {
                        console.log(mem);
                        return `${mem}, `;
                      })}
                    </td>
                    <td>{item.budget}</td>
                    <td>{item.completion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="details">
            <h3>Overview Status</h3>
            <p>📈23% increase this month</p>

            <div className="items">
              <div className="status">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8482/8482021.png"
                  alt=""
                />
                <div className="info">
                  <h4>$2400, Design changes</h4>
                  <small>
                    {new Date().toLocaleTimeString() +
                      " " +
                      new Date().toLocaleDateString()}
                  </small>
                </div>
              </div>
              <div className="status">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3502/3502601.png"
                  alt=""
                />
                <div className="info">
                  <h4>New order #1832412</h4>
                  <small>
                    {new Date().toLocaleTimeString() +
                      " " +
                      new Date().toLocaleDateString()}
                  </small>
                </div>
              </div>
              <div className="status">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3501/3501047.png"
                  alt=""
                />
                <div className="info">
                  <h4>Server Payments</h4>
                  <small>
                    {new Date().toLocaleTimeString() +
                      " " +
                      new Date().toLocaleDateString()}
                  </small>
                </div>
              </div>
              <div className="status">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8983/8983163.png"
                  alt=""
                />
                <div className="info">
                  <h4>New card added for order #4395133</h4>
                  <small>
                    {new Date().toLocaleTimeString() +
                      " " +
                      new Date().toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
