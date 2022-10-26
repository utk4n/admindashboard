import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const FeaturedChart = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Toplam Gelir</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured_chart">
          <CircularProgressbar value={30} text={"30%"} strokeWidth={4} />
        </div>
        <p className="title">Bugünkü Toplam Satış</p>
        <p className="amount">₺500</p>
        <p className="desc">Son ödemeleri içermeyebilir.</p>
        <div className="summary">
          <div className="item">
            <div className="item_title">
              Hedef
              <div className="item_result negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="result_amount">₺ 1.453</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">
              Geçen Hafta
              <div className="item_result positive">
                <KeyboardArrowUpIcon fontSize="small" />
                <div className="result_amount">₺ 5.233</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">
              Geçen Ay
              <div className="item_result positive">
                <KeyboardArrowUpIcon fontSize="small" />
                <div className="result_amount">₺ 23.532</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChart;
