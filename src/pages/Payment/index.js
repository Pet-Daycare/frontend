import React from "react";
import "./index.css";
import HeaderLogout from "../../components/HeaderLogout";
import { useEffect, useState } from "react";
import PetWallet from "./PetWallet";
import PetWalletVoucher from "./PetWalletVoucher";
import PetWalletCoupon from "./PetWalletCoupon";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const params = useParams();
  const navigate = useNavigate();

  const [method, setMethod] = useState("PetWallet");
  const [couponCode, setCouponCode] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [data, loadData] = useState();

  const [PetWalletContentVisible, setPetWalletContentVisible] = useState(true);
  const [PetWalletCouponContentVisible, setPetWalletCouponContentVisible] =
    useState(false);
  const [PetWalletVoucherContentVisible, setPetWalletVoucherContentVisible] =
    useState(false);

  const username = window.localStorage.getItem("username");
  const token = window.localStorage.getItem("token");
  
  const [balance, setBalance] = useState();
  // const [idPenitipan, setIdPenitipan] = useState();
  const [idPembayaran, setIdPembayaran] = useState();

  const location = useLocation();
  const penitipanData = location.state.penitipanData;

  const [totalPembayaran, setTotalpembayaran] = useState();
  const [idPenitipan, setIdPenitipan] = useState();

  
  let bal = window.localStorage.getItem("balance")
  // let idPenitipan = window.localStorage.getItem("penitipanId")
  let total = 0;

  // let topup = data
  const handleCancel = (e) => {
    navigate("/dashboard");
  };

  const handlePay = async (e) => {
    e.preventDefault();
    try {
      let code = ""
      let sendMethod = ""

      if (method === "PetWallet") {
        sendMethod = "PET_WALLET";
      } else if (method === "PetWallet with coupon") {
        sendMethod = "PET_WALLET_WITH_COUPON";
        code = couponCode;
      } else if (method === "PetWallet with voucher") {
        sendMethod = "PET_WALLET_WITH_VOUCHER";
        code = voucherCode;
      }

      const payload = {
        idPenitipan: idPenitipan,
        username: username,
        token: token,
        total: totalPembayaran,
        method: sendMethod,
        code: code,
      };


      console.log(payload)

      const response = await axios.post(
        "http://localhost:8081/api/payment/customer/pay",
        payload
      );

      if (response.data.paid === true) {
        alert("You've successfully made a payment with " + method + ". Please wait for admin to verify.");
        navigate("/dashboard");
      } else {
        alert("Payment Failed. Please check your balance or code.");
      }

      // // Handle the response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleVoucherCodeChange = (e) => {
    setVoucherCode(e.target.value);
  };
  let id = localStorage.getItem("penitipanId")


  // get penitipan response
  useEffect(() => {
    const dataRes = async () => {
    
    loadData(penitipanData);
    console.log(penitipanData);
    setTotalpembayaran(penitipanData.initialCost);
    setIdPenitipan(penitipanData.id);
    // topup = response.data
    console.log(penitipanData)
  };
  
  console.log("test" + data);
    dataRes();
    method === "PetWallet"
      ? setPetWalletContentVisible(true)
      : setPetWalletContentVisible(false);
    method === "PetWallet with coupon"
      ? setPetWalletCouponContentVisible(true)
      : setPetWalletCouponContentVisible(false);
    method === "PetWallet with voucher"
      ? setPetWalletVoucherContentVisible(true)
      : setPetWalletVoucherContentVisible(false);


    if (totalPembayaran == null) {
      // getPaymentDetail();
    }
    
    
  }, [method]);

  const handleOnChange = (e) => {
    setMethod(e.target.value);
  };

  //   function getPaymentDetail(URL){
  //     axios
  //       .get(URL)
  //       .then((response) => {

  //       })
  //       .catch((error) => {alert(error)})
  //   }

  //   function createPayment(URL, ){
  //     axios
  //         .post(URL)
  //         .then((response)=>{
  //             setPaymentResponse(response)
  //         }
  //         )
  //         .catch((err)=> {});
  // }

  // console.log(topup)
  // // console.log(bal)
  // console.log("total:" + total)
  return (
    <div class="change-page">
      <HeaderLogout />
      <div className="container d-flex flex-column align-items-center">
        <span className="title">Payment</span>

        <div className="container-date">
          <form className="text-decs">
            <label for="method" class="label_custom">
              Payment method
            </label>
            <select
              class="form-select"
              id="method"
              value={method}
              onChange={handleOnChange}
            >
              <option value="PetWallet" selected>
                PetWallet
              </option>
              <option value="PetWallet with coupon">
                PetWallet with coupon
              </option>
              <option value="PetWallet with voucher">Voucher</option>
            </select>
          </form>

          {PetWalletContentVisible && (
            <PetWallet balance={bal} totalPembayaran={totalPembayaran} />
          )}
          {PetWalletCouponContentVisible && (
            <PetWalletCoupon
              balance={bal}
              totalPembayaran={totalPembayaran}
              couponCode={couponCode}
              onCouponCodeChange={handleCouponCodeChange}
            />
          )}
          {PetWalletVoucherContentVisible && (
            <PetWalletVoucher
              balance={bal}
              totalPembayaran={totalPembayaran}
              voucherCode={voucherCode}
              onVoucherCodeChange={handleVoucherCodeChange}
            />
          )}
          <div class="row justify-content-center button_group">
            <div class="col-5"></div>
            <div class="col-4">
              <button class="cancel_btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <div class="col-3">
              <button class="pay_btn" onClick={handlePay}>
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;