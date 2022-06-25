import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import InputField from "../../common/InputField/InputField";
import CategoryData from "../../JSON Files/categories.json";
import ShipperData from "../../JSON Files/shippers.json";
import ProductData from "../../JSON Files/products.json";
import CustomTable from "../../common/CustomTable/CustomTable";
import "./Home.css";
import { CategoryColumns } from "../../common/ColDef/CategoryColumns";
import { ShipperColumns } from "../../common/ColDef/ShipperColumns";
import { ProductColumns } from "../../common/ColDef/ProductColumn";

const queriesMap = {
  Products: "Select * From Table Products",
  Categories: "Select * From Table Category",
  Shippers: "Select * From Table Shipper",
};

function Home() {
  const [query, setQuery] = useState("Products");
  const [showOutput, setShowOutput] = useState(-1);
  const [textQuery, setTextQuery] = useState("");
  const handleChange = (val) => {
    setTextQuery(val);
  };

  useEffect(() => {
    setTextQuery(queriesMap[query]);
  }, [query]);

  function showOutputHandler() {
    // setShowOutput(true);
    if (query === "Products") {
      setShowOutput(0);
    } else if (query === "Categories") {
      setShowOutput(1);
    } else if (query === "Shippers") {
      setShowOutput(2);
    }
  }

  return (
    <div className="home">
      <div className="home-select">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Select Query
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            label="Query"
          >
            <MenuItem value="Products">Products Query</MenuItem>
            <MenuItem value="Categories">Category Query</MenuItem>
            <MenuItem value="Shippers">Shipper Query</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon />}
            onClick={showOutputHandler}
          >
            Run
          </Button>
        </div>
      </div>

      {query === "Products" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value={textQuery} onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput === 0 ? (
              <div className="output">
                <CustomTable data={ProductData} columns={ProductColumns} />
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "10px",
                  lineHeight: "3",
                }}
              >
                <h4> Run the program to view its output</h4>
              </div>
            )}
          </div>
        </div>
      )}
      {query === "Categories" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value={textQuery} onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput === 1 ? (
              <div className="output">
                <CustomTable data={CategoryData} columns={CategoryColumns} />
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "10px",
                  lineHeight: "3",
                }}
              >
                <h4> Run the program to view its output</h4>
              </div>
            )}
          </div>
        </div>
      )}
      {query === "Shippers" && (
        <div className="home-container">
          <div className="home-textField">
            <InputField value={textQuery} onChange={handleChange} />
          </div>
          <div className="home-outputField">
            <h2 style={{ textAlign: "center" }}>Output</h2>
            {showOutput === 2 ? (
              <div className="output">
                <CustomTable data={ShipperData} columns={ShipperColumns} />
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "10px",
                  lineHeight: "3",
                }}
              >
                <h4> Run the program to view its output</h4>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Button from "@mui/material/Button";
// import InputField from "../../common/InputField/InputField";
// import CategoryData from "../../JSON Files/categories.json";
// import ShipperData from "../../JSON Files/shippers.json";
// import ProductData from "../../JSON Files/products.json";
// import CustomTable from "../../common/CustomTable/CustomTable";
// import "./Home.css";
// import { CategoryColumns } from "../../common/ColDef/CategoryColumns";
// import { ShipperColumns } from "../../common/ColDef/ShipperColumns";
// import { ProductColumns } from "../../common/ColDef/ProductColumn";

// const queriesMap = {
//   Customers: "Select * From Table Products",
//   Categories: "Select * From Table Category",
//   Shippers: "Select * From Table Shipper",
// };

// function Home() {
//   const [query, setQuery] = useState("Customers");
//   const [showProductOutput, setShowProductOutput] = useState(false);
//   const [showCategoryOutput, setShowCategoryOutput] = useState(false);
//   const [showShipperOutput, setShowShipperOutput] = useState(false);
//   const [textQuery, setTextQuery] = useState("");
//   const handleChange = (val) => {
//     setTextQuery(val);
//   };

//   useEffect(() => {
//     setTextQuery(queriesMap[query]);
//   }, [query]);

//   function outputProductHandler() {
//     setShowProductOutput(true);
//   }
//   function outputCategoryHandler() {
//     setShowCategoryOutput(true);
//   }
//   function outputShipperHandler() {
//     setShowShipperOutput(true);
//   }

//   return (
//     <div className="home">
//       <div className="home-select">
//         <FormControl variant="standard" sx={{ m: 1, minWidth: 730 }}>
//           <InputLabel id="demo-simple-select-standard-label">
//             Select Query
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-standard-label"
//             id="demo-simple-select-standard"
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//             }}
//             label="Query"
//           >
//             <MenuItem value="Customers">Products Query</MenuItem>
//             <MenuItem value="Categories">Category Query</MenuItem>
//             <MenuItem value="Shippers">Shipper Query</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       {query === "Customers" && (
//         <div className="home-container">
//           <div className="home-textField">
//             <InputField value={textQuery} onChange={handleChange} />
//           </div>
//           <div className="home-outputField">
//             <h2 style={{ textAlign: "center" }}>Output</h2>
//             {showProductOutput ? (
//               <div className="output">
//                 <CustomTable data={ProductData} columns={ProductColumns} />
//               </div>
//             ) : (
//               <div
//                 style={{
//                   textAlign: "center",
//                   paddingTop: "10px",
//                   lineHeight: "3",
//                 }}
//               >
//                 <h4> Run the program to view its output</h4>
//                 <Button
//                   variant="outlined"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={outputProductHandler}
//                 >
//                   Run
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       {query === "Categories" && (
//         <div className="home-container">
//           <div className="home-textField">
//             <InputField value={textQuery} onChange={handleChange} />
//           </div>
//           <div className="home-outputField">
//             <h2 style={{ textAlign: "center" }}>Output</h2>
//             {showCategoryOutput ? (
//               <div className="output">
//                 <CustomTable data={CategoryData} columns={CategoryColumns} />
//               </div>
//             ) : (
//               <div
//                 style={{
//                   textAlign: "center",
//                   paddingTop: "10px",
//                   lineHeight: "3",
//                 }}
//               >
//                 <h4> Run the program to view its output</h4>
//                 <Button
//                   variant="outlined"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={outputCategoryHandler}
//                 >
//                   Run
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       {query === "Shippers" && (
//         <div className="home-container">
//           <div className="home-textField">
//             <InputField value={textQuery} onChange={handleChange} />
//           </div>
//           <div className="home-outputField">
//             <h2 style={{ textAlign: "center" }}>Output</h2>
//             {showShipperOutput ? (
//               <div className="output">
//                 <CustomTable data={ShipperData} columns={ShipperColumns} />
//               </div>
//             ) : (
//               <div
//                 style={{
//                   textAlign: "center",
//                   paddingTop: "10px",
//                   lineHeight: "3",
//                 }}
//               >
//                 <h4> Run the program to view its output</h4>
//                 <Button
//                   variant="outlined"
//                   startIcon={<PlayArrowIcon />}
//                   onClick={outputShipperHandler}
//                 >
//                   Run
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
