import React from "react";
import paypal from "../images/paypal-icon.svg";

const PaypalForm = () => {
  let num = 0;
  return (
    <form
      className="mt-4"
      action="https://www.paypal.com/us/cgi-bin/webscr"
      method="post"
    >
      <input type="hidden" name="cmd" value="_cart" />
      <input type="hidden" name="business" value="vladimir.monarov@gmail.com" />
      <input type="hidden" name={`item_name_${num}`} />
      <input type="hidden" name={`amount_${num}`} />
      <input type="hidden" name={`quantity_${num}`} />
      <input type="hidden" name="currency_code" value="EUR" />
      <input type="hidden" name="amount" />
      <input
        style={{ width: "5rem" }}
        type="image"
        src={paypal}
        name="submit"
        alt="Make payments with PayPal - it's fast, free and secure!"
      />
    </form>
  );
};

export default PaypalForm;