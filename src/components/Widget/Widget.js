import React, { useEffect } from "react";
import "./widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const Widget = ({ type }) => {
    let data;
    switch (type) {
        case "user":
          data = {
            title: "Kullanıcılar",
            isMoney: false,
            link: "Tüm kullanıcıları gör",
            icon: <PersonIcon className="icon" />,
          };
          break;
        case "order":
          data = {
            title: "Siparişler",
            isMoney: false,
            link: "Tüm siparişleri gör",
            icon: <AddShoppingCartIcon className="icon" />,
          };
          break;
        case "earnings":
          data = {
            title: "Kazançlar",
            isMoney: true,
            link: "Tüm kazançları gör",
            icon: <CurrencyLiraIcon className="icon" />,
          };
          break;
        case "balance":
          data = {
            title: "Bakiye",
            isMoney: true,
            link: "Tüm bakiyeyi göster",
            icon: <AccountBalanceWalletIcon className="icon" />,
          };
          break;
        default:
          break;
      }




  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "₺"} 123</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="percent positive">
          <ExpandLessIcon />
          14%
        </span>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
