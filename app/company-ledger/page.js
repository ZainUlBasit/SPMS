"use client";
import {
  BsBuildingAdd,
  BsBuildingExclamation,
  BsBuildingFillGear,
  BsChevronDown,
  BsSearch,
} from "react-icons/bs";
import { NewButton } from "../components/Buttons/NewButton";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { MdAccountBalance } from "react-icons/md";
import { useEffect, useState } from "react";
import { Popover, Typography } from "@mui/material";
import { roboto } from "@/lib/Fontss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "@/lib/Slices/CompanySlice";
import AuthInput from "../components/Input/AuthInput";
import { useFormik } from "formik";
import LedgerDateInput from "../components/Input/LedgerDateInput";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import AuthBtn from "../components/Buttons/AuthBtn";

const Page = () => {
  const [SelID, setSelID] = useState("");
  const [EditItemModal, setEditItemModal] = useState(false);
  const [EditCompanyModal, setEditCompanyModal] = useState(false);
  const [OpenAddModal, setOpenAddModal] = useState(false);
  const [CurrentCompany, setCurrentCompany] = useState("");
  const [CurrentId, setCurrentId] = useState("");
  const [CompanySearchText, setCompanySearchText] = useState("");
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const formik = useFormik({
    initialValues: {
      from_date: formattedDate,
      to_date: formattedDate,
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await SignInApi({
          email: values.email,
          password: values.password,
        });
        if (!response?.data?.success) {
          ErrorToast(response?.data?.error);
          if (response?.data?.error?.msg === "No such email registered!")
            formik.setFieldError("email", response?.data?.error?.msg);
          else formik.setFieldError("password", "Invalid password!");
        } else if (response?.data?.success) {
          SuccessToast("Successfully Logged In!");
          router.push("/home");
        }
      } catch (err) {
        console.error("error1", err);
      }
      setLoading(false);
    },
  });

  const dispatch = useDispatch();
  const CompaniesData = useSelector((state) => state.CompanyState);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  const currentWidth = "200px";

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <MainWrapper>
      <div className="w-full flex justify-center items-center my-3">
        <NewButton
          type="modal"
          Width={currentWidth}
          setOpen={setOpenAddModal}
          link={""}
          Icon={BsBuildingAdd}
          title={"Add New"}
        />
        <NewButton
          type="link"
          Width={currentWidth}
          setOpen={""}
          link={"/company"}
          Icon={BsBuildingExclamation}
          title={"Info"}
        />
        <NewButton
          type="link"
          Width={currentWidth}
          setOpen={""}
          link={"/company-accounts"}
          Icon={BsBuildingFillGear}
          title={"Accounts"}
        />
        <NewButton
          type="link"
          Width={currentWidth}
          setOpen={""}
          link={"/company-ledger"}
          Icon={MdAccountBalance}
          title={"Ledger"}
        />
      </div>
      <div className="w-full h-auto flex justify-center items-center relative">
        <div className="w-[90%] h-auto flex flex-col items-center justify-center bg-[#465462] p-10 rounded-[20px]">
          <div
            className="relative w-[90%] font-[Quicksand] flex items-center h-auto"
            onClick={handleClick}
          >
            <p
              className={`absolute top-[-18px] left-3 w-fit bg-[#465462] text-white font-[Quicksand] text-[1.5rem] font-bold ${roboto.className}`}
            >
              Companies
            </p>
            <div
              className={`px-4 font-bold py-4 pr-10 border-2 text-white border-white rounded-[7.94px] w-full outline-none cursor-pointer font-[Quicksand] ${roboto.className} text-xl`}
            >
              {CurrentCompany === "" ? "Select Company...." : CurrentCompany}
            </div>
            <BsChevronDown className="text-white absolute right-3 top-[50%] text-2xl transform -translate-y-1/2" />
          </div>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            PaperProps={{
              sx: {
                borderRadius: "25px", // Add rounded corners
                backgroundColor: "white", // Set background color to white
                width: "50%", // Set the width as needed
                minWidth: "300px",
                overflow: "hidden", // Hide overflowing content
                //   marginTop: "6px",
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography
              sx={{
                p: 2,
                borderColor: "#465462",
                backgroundColor: "#465462",
                width: "100%",
                minWidth: "300px",
                overflow: "hidden",
                borderRadius: "25px",
              }}
            >
              <div className="bg-[#465462] text-white font-[Quicksand]  flex flex-col justify-center items-center rounded-[50px]">
                <div className="border-[1px] border-white text-[#465462] bg-white flex items-center justify-start rounded-full w-[90%] min-w-[300px] p-2 gap-x-2 mb-4 flex-row-reverse pr-4">
                  <label htmlFor="search-company">
                    <BsSearch className="text-2xl" />
                  </label>
                  <input
                    id="search-company"
                    type="text"
                    className={`bg-transparent outline-none font-bold ${roboto.className} w-full pl-2`}
                    value={CompanySearchText}
                    onChange={(e) => setCompanySearchText(e.target.value)}
                  />
                </div>
                <div className="w-full flex flex-col justify-between gap-y-3 items-end">
                  {CompaniesData.data
                    .filter((dt) =>
                      dt.name
                        .toLowerCase()
                        .includes(CompanySearchText.toLowerCase())
                    )
                    .map((dt, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex gap-x-3 items-center cursor-pointer ${roboto.className}`}
                          onClick={() => {
                            setCurrentCompany(dt.name);
                            setCurrentId(dt._id);
                            handleClose();
                          }}
                        >
                          <span>{dt.name}</span>
                          <input
                            type="checkbox"
                            className="mr-1 appearance-none h-5 w-5 border border-gray-300 checked:bg-white rounded-full"
                            checked={dt._id === CurrentId}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </Typography>
          </Popover>
          <div className="flex items-center gap-x-3 mt-10">
            <LedgerDateInput
              name="from"
              label="From Date"
              //   placeholder="Enter email..."
              type="date"
              value={formik.values.from_date}
              onChange={formik.handleChange}
              touched={formik.touched.from_date}
              isError={formik.errors.from_date}
              errorMsg={formik.errors.from_date}
            />
            <FaArrowRightArrowLeft className="text-2xl text-white" />
            <LedgerDateInput
              name="to"
              label="To Date"
              //   placeholder="Enter email..."
              type="date"
              value={formik.values.to_date}
              onChange={formik.handleChange}
              touched={formik.touched.to_date}
              isError={formik.errors.to_date}
              errorMsg={formik.errors.to_date}
            />
          </div>
          <div className="flex gap-x-4 mt-5">
            <button
              className={`${roboto.className} bg-black text-white p-3 px-4 rounded-full border border-black hover:bg-white hover:text-black hover:border-white transition-all ease-in-out duration-700 font-bold text-xl`}
            >
              Show Cash Info
            </button>
            <button
              className={`${roboto.className} bg-black text-white p-3 px-4 rounded-full border border-black hover:bg-white hover:text-black hover:border-white transition-all ease-in-out duration-700 font-bold text-xl`}
            >
              Show Item Info
            </button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Page;
