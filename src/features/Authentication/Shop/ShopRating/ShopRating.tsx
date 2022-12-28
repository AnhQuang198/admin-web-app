import React, { useState } from "react";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import { Input, Select, Table, DatePicker, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./style.scss";

const { RangePicker } = DatePicker;

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

interface SelectType {
  label: string;
  value: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Chinese Score",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Math Score",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "English Score",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const selectedValue: SelectType[] = [
  {
    label: "5 ⭐️",
    value: 5,
  },
  {
    label: "4 ⭐️",
    value: 4,
  },
  {
    label: "3 ⭐️",
    value: 3,
  },
  {
    label: "2 ⭐️",
    value: 2,
  },
  {
    label: "1 ⭐️",
    value: 1,
  },
]

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "5",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "6",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "7",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "8",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "9",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "10",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "11",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

function ShopRating() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rateValue, setRateValue] = useState<number>(5);

  const handleChangeRateSelected = (value: number) => {
    setRateValue(value)
  };

  const handleChangePagination = (page: number, pageSize: number) => {
    console.log("Pagination: ", page, pageSize)
  }

  return (
    <div>
      <div className="shop-rating-filter">
        <div className="row m-0 shop-rating-filter-input">
          {/* <div className="col-4 shop-rating-filter-input-item">
            <span>Tên: </span>
            <Input placeholder="Basic usage" />
          </div> */}
          <div className="col-4 shop-rating-filter-input-item">
            <span>Rating: </span>
            <Select
              defaultValue={rateValue}
              style={{width: "90%"}}
              onChange={handleChangeRateSelected}
              options={selectedValue}
            />
          </div>
          <div className="col-4 shop-rating-filter-input-item">
            <span>Thời gian:</span>
            <RangePicker style={{width: "83%"}} />
          </div>
        </div>
        <div className="shop-rating-filter-button">
          <Button icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>Excel Export</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        loading={isLoading}
        pagination={{
          defaultPageSize: 10,
          total: 11,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
          onChange: handleChangePagination,
        }}
      />
    </div>
  );
}

export default ShopRating;
