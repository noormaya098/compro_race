import React, { useEffect } from "react";
import orangnaikmotor from "../../assets/orangnaikmotor.png";
import sameday from "../../assets/sameday.png";
import Regular from "../../assets/Regular.png";
import FooterComponents from "../Footer";
import SideBarComponents from "../sidebar/SideBar";
import ClickSiteBarStore from "../../ZustandStore/ClickSiteBar";
import { Input, Select , Divider } from "antd";
import "./Carausel.css";
import {
  GetProvinsi,
  useProvinsiStore,
} from "../../ZustandStore/GetProvinsiStore";
import { GetPriceListCost } from "../../funcs/GetPriceListCost";
import { dbdatabase } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
function CekOngkirComponents() {
  const firestore = dbdatabase
  console.log(`firestore ini`, firestore);
  const unsub = onSnapshot(doc(firestore, "location", "123"), (doc) => {
    console.log("Current data: ", doc.data());
  });

  const DiClickNihstate = ClickSiteBarStore((state) => state.DiClickNih);
  const { selectprovinsi, DatasemuaMuat, DatasemuaBongkar, gram, result } =
    useProvinsiStore();

  useEffect(() => {
    GetProvinsi();
  }, []);

  console.log(`DatasemuaMuat`, DatasemuaMuat);
  // console.log(`DatasemuaBongkar`, DatasemuaBongkar);

  return (
    <div>
      <div className="">
        {/* <SideBarComponents/> */}
        <div
          className={`${DiClickNihstate == false ? "" : ""} ph:hidden`}
        ></div>
        <div
          className={`mobile w-9-12 bg-red-300 ${DiClickNihstate === true ? "" : "mt-10"
            } ph:hidden`}
        >
          <div className="mt-">
            <div
              className=" mx-auto font-bold text-[32px] font-plus-jakarta "
              style={{
                background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Check Service Prices
            </div>
          </div>
        </div>
        <div>
          <div className="w-9/12 ph:hidden mt-56 mx-auto ">
            <div
              className=" mx-auto font-bold text-[32px] font-plus-jakarta"
              style={{
                background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Check Service Prices
            </div>
            <div className="flex justify-start ">
              <div className="w-screen  h-[114px]  flex justify-start mt-10 border rounded-lg shadow-md font-plus-jakarta">
                <div className="grid grid-cols-4  m-5 space-x-28">
                  <div className="">
                    <p className="text-[#F05423] font-plus-jakarta">From</p>
                    <Select
                      placeholder="Departure City"
                      className="mt-6 w-full"
                      showSearch
                      optionFilterProp="children"
                      onChange={(e, children) => {
                        console.log(children);
                        useProvinsiStore.setState({ DatasemuaMuat: children });
                      }}
                    >
                      {selectprovinsi &&
                        selectprovinsi.map((item, index) => (
                          <Select.Option
                            value={item?.city_id}
                            city_id={item?.city_id}
                            postal_code={item?.postal_code}
                            province_id={item?.province_id}
                            type={item?.type}
                            style={{ width: "100%" }}
                          >
                            {item?.city_name} - {item?.province}
                          </Select.Option>
                        ))}
                    </Select>
                  </div>
                  <div className="ml-9">
                    <p className="text-[#F05423] font-plus-jakarta">To</p>
                    <Select
                      className="mt-6 w-full"
                      placeholder="Destination City"
                      showSearch
                      optionFilterProp="children"
                      onChange={(e, children) => {
                        console.log(children);
                        useProvinsiStore.setState({
                          DatasemuaBongkar: children,
                        });
                      }}
                    >
                      {selectprovinsi &&
                        selectprovinsi.map((item, index) => (
                          <Select.Option
                            value={item?.city_id}
                            city_id={item?.city_id}
                            postal_code={item?.postal_code}
                            province_id={item?.province_id}
                            type={item?.type}
                            style={{ width: "100%" }}
                          >
                            {item?.city_name} - {item?.province}
                          </Select.Option>
                        ))}
                    </Select>
                  </div>
                  <div className="ml-9">
                    <p className="text-[#F05423] font-plus-jakarta">Weight</p>
                    <div className="flex items-center mt-6 ">
                      <input
                        onChange={(e) =>
                          useProvinsiStore.setState({ gram: e.target.value })
                        }
                        className=" w-[50px] border-b border-gray-300"
                        placeholder="0"
                      />
                      <h1 className="text-black font-semibold font-plus-jakarta">Gram</h1>
                    </div>
                  </div>
                  {/* <div className='ml-11'>
                                        <p className='text-[#F05423]'>Asurance</p>
                                        <div className='flex items-center mt-6 '>
                                            <select placeholder='Tidak' className='w-full'></select>
                                        </div>
                                    </div> */}
                  <div className="ml-9 flex items-center">
                    <button
                      onClick={async (e) => {
                        try {
                          e.stopPropagation();
                          const result = await GetPriceListCost();
                          console.log(result);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                      className="w-[135px] h-[64px] bg-[#F05423] text-white rounded-lg font-plus-jakarta text-center"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {result && (
              <div className="hasilresult  mx-auto mt-24">
                <div className="grid grid-cols-5 font-bold border-b-2 border-black pb-2 font-plus-jakarta">
                  <div>Service</div>
                  <div>Deskripsi</div>
                  <div>Estimasi</div>
                  <div>Note</div>
                  <div>Total Price</div>
                </div>
                {result &&
                  result?.selectPrice.map((item, i) => (
                    <div key={i} className="grid grid-cols-5 space-y-1">
                      <div>{item?.service}</div>{" "}
                      {/* Replace with actual property name */}
                      <div>{item?.description}</div>{" "}
                      {/* Replace with actual property name */}
                      <div>{item?.cost?.[0]?.etd} Hari</div>{" "}
                      {/* Replace with actual property name */}
                      <div>
                        {item?.cost?.[0]?.note == ""
                          ? "-"
                          : item?.cost?.[0]?.note}
                      </div>{" "}
                      {/* Replace with actual property name */}
                      <div className="text-[#F05423] font-bold">
                        {item?.cost?.[0]?.value}
                      </div>{" "}
                      {/* Replace with actual property name */}
                    </div>
                  ))}
              </div>
            )}
            <div className="mt-28">
              <p
                className="text-4xl font-bold font-plus-jakarta"
                style={{
                  background:
                    "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Services
              </p>

              <div className="grid grid-cols-3 space-x-20 mt-10 ">
                <div className="w-[258px] h-[325px] ">
                  <img src={orangnaikmotor} />
                  <p className="text-[#F05423] mt-5 text-[24px] font-semibold font-plus-jakarta">
                    Same day Services
                  </p>
                  <p className="text-[16px] text-[#FE8A66] font-medium font-plus-jakarta">
                    Delivery on the same day or within 8 hours
                  </p>
                </div>
                <div className="w-[258px] h-[325px] ">
                  <img src={sameday} />
                  <p className="text-[#F05423] mt-5 text-[24px] font-semibold font-plus-jakarta">
                    Next day Services
                  </p>
                  <p className="text-[16px] text-[#FE8A66] font-medium font-plus-jakarta">
                    Delivery arrives the next day or within 2 hours.
                  </p>
                </div>
                <div className="w-[258px] h-[325px] ">
                  <img src={Regular} />
                  <p className="text-[#F05423] mt-5 text-[24px] font-semibold font-plus-jakarta">
                    Regular Services
                  </p>
                  <p className="text-[16px] text-[#FE8A66] font-medium font-plus-jakarta">
                    Standard Shipping within 1-3 days.
                  </p>
                </div>
              </div>
            </div>
            <p className="ph:hidden text-center mt-24 mb-24 text-black font-plus-jakarta">
          Any Problems?
          <span className="text-[#F05423] font-plus-jakarta ml-2 cursor-pointer">Contact our Customer Service</span>{" "}
        </p>
          </div>
          <div className="mt-28 ph:hidden">
            <FooterComponents />
          </div>
        </div>
        <div className="md:hidden">
          <div>
            <p
              className="text-center text-[24px] mt-6 font-bold font-plus-jakarta
                    "
              style={{
                background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Check Service Prices
            </p>
          </div>
          <div className="flex justify-center">
            <div className="h-[329px] w-[280px] border-2 border-orange-400 rounded-lg mt-6 shadow-md ">
              <div className="m-3">
                <div className="font-plus-jakarta">
                  <p >From</p>
                  {/* <Select placeholder="Departure City" style={{ width: "100%", marginTop: 2 }}></Select> */}
                  <Select
                    style={{ width: "100%", marginTop: 2 }}
                    placeholder="Departure City"
                    className="mt-6 w-full"
                    showSearch
                    optionFilterProp="children"
                    onChange={(e, children) => {
                      console.log(children);
                      useProvinsiStore.setState({ DatasemuaMuat: children });
                    }}
                  >
                    {selectprovinsi &&
                      selectprovinsi.map((item, index) => (
                        <Select.Option
                          value={item?.city_id}
                          city_id={item?.city_id}
                          postal_code={item?.postal_code}
                          province_id={item?.province_id}
                          type={item?.type}
                          style={{ width: "100%" }}
                        >
                          {item?.city_name} - {item?.province}
                        </Select.Option>
                      ))}
                  </Select>
                  <p className="mt-5">To</p>
                  {/* <Select placeholder="Destination City" style={{ width: "100%", marginTop: 2 }}></Select> */}
                  <Select
                    style={{ width: "100%", marginTop: 2 }}
                    className="mt-6 w-full"
                    placeholder="Destination City"
                    showSearch
                    optionFilterProp="children"
                    onChange={(e, children) => {
                      console.log(children);
                      useProvinsiStore.setState({ DatasemuaBongkar: children });
                    }}
                  >
                    {selectprovinsi &&
                      selectprovinsi.map((item, index) => (
                        <Select.Option
                          value={item?.city_id}
                          city_id={item?.city_id}
                          postal_code={item?.postal_code}
                          province_id={item?.province_id}
                          type={item?.type}
                          style={{ width: "100%" }}
                        >
                          {item?.city_name} - {item?.province}
                        </Select.Option>
                      ))}
                  </Select>
                </div>
                <div className="grid  mt-5">
                  <div>
                    <p className="font-plus-jakarta">Weight</p>
                    <div className="mt-3 grid grid-cols-2">
                      <Input
                        style={{ width: "100%" }}
                        onChange={(e) =>
                          useProvinsiStore.setState({ gram: e.target.value })
                        }
                        placeholder="0"
                        className="border-b-2"
                      ></Input>
                      <div className="font-bold ml-3 font-plus-jakarta">Gram</div>
                    </div>
                  </div>
                  {/* <div>
                                        <p>Asurance</p>
                                        <Select placeholder="None" style={{ width: "100%", marginTop: 5 }}></Select>
                                    </div> */}
                </div>
              </div>
              <div className="flex justify-center mt-9">
                <button
                  onClick={async (e) => {
                    try {
                      e.stopPropagation();
                      const result = await GetPriceListCost();
                      console.log(result);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  className="bg-[#F05423] w-[240px] h-[40px] text-white font-semibold rounded-lg font-plus-jakarta text-center"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {result && (
            <div className="hasilresult w-11/12 mx-auto mt-24">
              <div className="grid grid-cols-5 font-bold border-b-2 border-black pb-2 font-plus-jakarta">
                <div>Service</div>
                <div>Deskripsi</div>
                <div>Estimasi</div>
                <div>Note</div>
                <div>Total Price</div>
              </div>
              {result &&
                result?.selectPrice.map((item, i) => (
                  <div key={i} className="grid grid-cols-5 space-y-1">
                    <div>{item?.service}</div>{" "}
                    {/* Replace with actual property name */}
                    <div>{item?.description}</div>{" "}
                    {/* Replace with actual property name */}
                    <div className="font-plus-jakarta">{item?.cost?.[0]?.etd} Hari</div>{" "}
                    {/* Replace with actual property name */}
                    <div>
                      {item?.cost?.[0]?.note == ""
                        ? "-"
                        : item?.cost?.[0]?.note}
                    </div>{" "}
                    {/* Replace with actual property name */}
                    <div className="text-[#F05423] font-bold">
                      {item?.cost?.[0]?.value}
                    </div>{" "}
                    {/* Replace with actual property name */}
                  </div>
                ))}
            </div>
          )}
          <div className="h-[350px]  mx-auto mt-16">
            <div className="container mx-auto overflow-hidden relative">
              <div
                id="carousel"
                className="flex animate-slide h-[350px] w-screen  space-x-5 "
              >
                <div className="w-[403px] h-[280px]  shadow-lg rounded-lg">
                  <img src={orangnaikmotor} alt="Service 1" />
                  <div className=" m-2 ">
                    <p className="font-plus-jakarta">Same day Services</p>
                    <p className="mt-2 font-plus-jakarta">
                      Delivery on the same day or within 8 hours
                    </p>
                  </div>
                </div>
                <div className="w-[403px] h-[280px] shadow-lg rounded-lg">
                  <img src={sameday} alt="Service 2" />
                  <div className="  m-2 font-plus-jakarta">
                    <p className="font-plus-jakarta">Next day Services</p>
                    <p className="mt-2 font-plus-jakarta">
                      Delivery arrives the next day or within 2 hours.
                    </p>
                  </div>
                </div>
                <div className="w-[403px] h-[280px] shadow-lg rounded-lg">
                  <img src={Regular} alt="Service 3" />
                  <div className="  m-2 font-plus-jakarta">
                    <p>Regular Services</p>
                    <p className="mt-2 font-plus-jakarta">Standard Shipping within 1-3 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <FooterComponents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CekOngkirComponents;
