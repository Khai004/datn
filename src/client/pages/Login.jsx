import React from 'react'
import Preloader from "../helper/Preloader";

import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Account from "../components/Login";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
export default function Login() {
  return (
    <>
          {/* ColorInit */}
          <ColorInit color={true} />

{/* ScrollToTop */}
<ScrollToTop smooth color="#FA6400" />

{/* Preloader */}
<Preloader />

{/* HeaderTwo */}
<HeaderTwo category={true} />

{/* Breadcrumb */}
<Breadcrumb title={"Đăng Nhập Tài Khoản"} />

{/* Account */}
<Account />

{/* ShippingOne */}
<ShippingOne />

{/* FooterTwo */}
<FooterTwo />

{/* BottomFooter */}
<BottomFooter />
    </>
)
}
