import "./project.scss";
import "../../styles/global.scss";
import CircularProgress from "@mui/material/CircularProgress";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
// import CustomizedSteppers from "../../components/Progress";

const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const dataGraph = {
    dataL: [
      {
        name: "Panasonic",
        discounted_price: 590,
        product_price: 800,
        limit_price: 1400,
      },
      {
        name: "BASF",
        discounted_price: 868,
        product_price: 967,
        limit_price: 1506,
      },
      {
        name: "Infineon",
        discounted_price: 800,
        product_price: 1098,
        limit_price: 989,
      },
      {
        name: "LG",
        discounted_price: 1000,
        product_price: 1200,
        limit_price: 1228,
      },
      {
        name: "Motorola",
        discounted_price: 900,
        product_price: 1108,
        limit_price: 1100,
      },
      {
        name: "Fuji",
        discounted_price: 500,
        product_price: 680,
        limit_price: 1700,
      },
    ],

    dataI: [
      {
        name: "Bosch",
        discounted_price: 3900,
        product_price: 4700,
        limit_price: 5000,
      },
      {
        name: "AT&T",
        discounted_price: 2104,
        product_price: 4300,
        limit_price: 7800,
      },
      {
        name: "Micron",
        discounted_price: 2300,
        product_price: 3200,
        limit_price: 4000,
      },
      {
        name: "Intel",
        discounted_price: 6599,
        product_price: 7200,
        limit_price: 8000,
      },
      {
        name: "Kontron",
        discounted_price: 2100,
        product_price: 2900,
        limit_price: 3300,
      },
      {
        name: "Samsung",
        discounted_price: 2900,
        product_price: 3200,
        limit_price: 1500,
      },
    ],

    dataC: [
      {
        name: "Jabil",
        discounted_price: 3400,
        product_price: 3700,
        limit_price: 4000,
      },
      {
        name: "Texas",
        discounted_price: 2450,
        product_price: 4250,
        limit_price: 6000,
      },
      {
        name: "Bosch",
        discounted_price: 8000,
        product_price: 9200,
        limit_price: 8500,
      },
      {
        name: "Motorola",
        discounted_price: 7700,
        product_price: 7900,
        limit_price: 8300,
      },
      {
        name: "Toray",
        discounted_price: 3430,
        product_price: 4000,
        limit_price: 4900,
      },
      {
        name: "Tnb",
        discounted_price: 2900,
        product_price: 3200,
        limit_price: 4230,
      },
    ],

    dataM: [
      {
        name: "Bosch",
        discounted_price: 5000,
        product_price: 11200,
        limit_price: 12000,
      },
      {
        name: "Siemens",
        discounted_price: 6300,
        product_price: 9230,
        limit_price: 11200,
      },
      {
        name: "Texas",
        discounted_price: 6000,
        product_price: 12000,
        limit_price: 11900,
      },
      {
        name: "GM",
        discounted_price: 7000,
        product_price: 7700,
        limit_price: 9000,
      },
      {
        name: "BHL",
        discounted_price: 3400,
        product_price: 6200,
        limit_price: 6500,
      },
      {
        name: "Honeywell",
        discounted_price: 7000,
        product_price: 13573,
        limit_price: 10000,
      },
    ],
  };

  const LithiumImg =
    "https://www.innovationnewsnetwork.com/wp-content/uploads/2023/01/Image-1-%C2%A9-shutterstockJLStock_2229653629.jpg";
  const IOTImg =
    "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const CablingImg =
    "https://marvel-b1-cdn.bc0a.com/f00000000270523/s19529.pcdn.co/wp-content/uploads/2021/08/Joel-Wensley-Jr-10.5-Camaro-wiring_website.jpg";
  const MotorImg =
    "https://assets.new.siemens.com/siemens/assets/api/uuid:7c84f0d5-a2a3-4992-9127-b14e79adc158/width:3840/quality:high/simotics-product-family.jpg";

  // HANDLE CLICK AND STATE
  const [Image, setImage] = useState<string>(LithiumImg);

  const [data, setData] = useState(dataGraph.dataL);

  //LITHIUM Handling
  const handleClickL = (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    setImage(event.currentTarget.id);
    setData(dataGraph.dataL);
    console.log(Image);
    setIsLoading(true);
  };

  //IOT Handling
  const handleClickI = (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    setImage(event.currentTarget.id);
    setData(dataGraph.dataI);
    console.log(Image);
  };

  //CABLING Handling
  const handleClickC = (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    setImage(event.currentTarget.id);
    setData(dataGraph.dataC);
    console.log(Image);
    setIsLoading(true);
  };

  //MOTOR Handling
  const handleClickM = (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    setImage(event.currentTarget.id);
    setData(dataGraph.dataM);
    console.log(Image);
    setIsLoading(true);
  };

  return (
    <div className="project-container">
      <div className="project-main1">
        <img
          className="ev_car"
          src="https://knaufautomotive.com/wp-content/uploads/2020/09/shutterstock_732827443.jpg"
        />
        <div className="ev_component">
          {/* NAVIGATION SUB-HEADER*/}
          <div
            className="buttonn b1"
            onClick={handleClickL}
            id={LithiumImg}
            style={
              Image === LithiumImg
                ? {
                    borderBottom: "1.5px solid white",
                    color: "white",
                    transition: "border-bottom 0.3s ease-in-out",
                  }
                : {}
            }
          >
            LITHIUM PACK
          </div>
          <div
            className="buttonn b2"
            onClick={handleClickI}
            id={IOTImg}
            style={
              Image === IOTImg
                ? {
                    borderBottom: "1.5px solid white",
                    color: "white",
                    transition: "border-bottom 0.3s ease-in-out",
                  }
                : {}
            }
          >
            IOT HARDWARE
          </div>
          <div
            className="buttonn b3"
            onClick={handleClickC}
            id={CablingImg}
            style={
              Image === CablingImg
                ? {
                    borderBottom: "1.5px solid white",
                    color: "white",
                    transition: "border-bottom 0.3s ease-in-out",
                  }
                : {}
            }
          >
            CABLING
          </div>
          <div
            className="buttonn b4"
            onClick={handleClickM}
            id={MotorImg}
            style={
              Image === MotorImg
                ? {
                    borderBottom: "1.5px solid white",
                    color: "white",
                    transition: "border-bottom 0.3s ease-in-out",
                  }
                : {}
            }
          >
            MOTOR (EV)
          </div>
        </div>
      </div>
      <div className="project-main2">
        {/* HANDLE BUFFERING UI */}
        <div className="supplyA">
          {isLoading && <CircularProgress sx={{ color: "white" }} />}

          <img src={Image} className="photoOps" onLoad={handleImageLoad} />
        </div>
        <div className="supplyB">
          <img
            className="view"
            src="https://www.ifia.com/wp-content/uploads/2021/04/inv-award.jpg"
            style={{ filter: "brightness(30%)", height: "100%" }}
          />
          <div
            onClick={() => alert("🚨 Proprietary access is restricted.")}
            style={{ cursor: "pointer", position: "absolute" }}
            className="proprietary"
          >
            <span className="hovering-text"> View Proprietary → </span>
          </div>
        </div>
      </div>
      <div className="project-main3">
        <ResponsiveContainer width="100%" height="100%" className="chart">
          <ComposedChart
            layout="vertical"
            width={500}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 25,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend style={{ gap: "5px" }} />
            <Area dataKey="limit_price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="product_price" barSize={20} fill="#4185EC" />
            <Line dataKey="discounted_price" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Project;
