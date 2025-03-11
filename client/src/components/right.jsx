import "../sass/right.scss";
import { TbBrandBooking } from "react-icons/tb";
import Navbar from "./navbar";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

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
                  281 <rt>Top Users</rt>
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
                  281 <rt>Revenue</rt>
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
                  281 <rt>Followers</rt>
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
            <img
              src="https://img.freepik.com/free-vector/blue-marketing-charts-design-template_52683-24522.jpg?semt=ais_hybrid"
              alt=""
            />
            <div className="info">
              <h3>Website Views</h3>
              <p>Last Campaign Performance</p>
            </div>
            <span>campain Set twos days ago</span>
          </div>
          <div className="graph">
            <img
              src="https://img.freepik.com/free-vector/realistic-waterfall-chart-collection_52683-41524.jpg?semt=ais_hybrid"
              alt=""
            />
            <div className="info">
              <h3>Daily Sales</h3>
              <p>(+15%) increase in today sales.</p>
            </div>
            <span>campain Set twos days ago</span>
          </div>
          <div className="graph">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQN2eHltMYuWes8BnIjgMAaNt1N3IG76i6A&s"
              alt=""
            />
            <div className="info">
              <h3>Website Views</h3>
              <p>campain set today</p>
            </div>
            <span>campain Set twos days ago</span>
          </div>
        </div>
        {/* <div className="profile"></div> */}

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
