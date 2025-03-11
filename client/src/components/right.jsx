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
      members: ["jack", "jonny"],
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
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          height={300}
          colors={["#98d7c2"]}
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
                  data: [0, 33, 223, 199],
                },
              ]}
              width={400}
              height={200}
              xAxis={[
                { data: ["Jan", "Feb", "Mar", "Apr"], scaleType: "point" },
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
                  data: [1, 23, 4, 45, 6, 12],
                },
              ]}
              xAxis={[
                { data: ["Jan", "Feb", "Mar", "Apr"], scaleType: "band" },
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
                <th>Company Name</th>
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
      </div>
    </>
  );
}
