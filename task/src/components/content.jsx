import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import CloudIcon from "@mui/icons-material/Cloud";
import axios from "axios";

const Content = () => {
  const [value, setValue] = useState("1");
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const MasonryImageList = () => {
    return (
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  };

  const MasonryImageList1 = () => {
    return (
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {data.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  };

  useEffect(() => {
    const fetchDrive = async () => {
      const { data } = await axios.get("/drive");
      setData(data);
    };
    const getfetchS3 = async () => {
      const { data } = await axios.get("/s3");
      setItemData(data);
    };
    fetchDrive();
    getfetchS3();
  }, []);

 

  console.log(data, "dataaa");
  console.log(itemData, "itemdataaa");

  return (
    <>
      
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab
              label="Google Drive"
              value="1"
              icon={<AddToDriveIcon />}
              onChange={MasonryImageList1}
              iconPosition="start"
            />
            <Tab
              onChange={MasonryImageList}
              label="S3"
              value="2"
              icon={<CloudIcon />}
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel value="1" className="display-flex-panel">
          <Box sx={{ width: 1000, height: 600, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </TabPanel>
        <TabPanel value="2" className="display-flex-panel">
          <Box sx={{ width: 1000, height: 600, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {data.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </TabPanel>
      </TabContext>

     
    </>
  );
};

export default Content;
