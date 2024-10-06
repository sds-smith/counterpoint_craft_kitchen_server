import { Router } from 'express';
import { createOrder, captureOrder } from '../../../helpers/paypalHelpers.js';

const paypalAuthRouter = Router();

paypalAuthRouter.post("/orders", async (req, res) => {
    try {
      // use the cart information passed from the front-end to calculate the order amount detals
      const cartData = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(cartData);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  });
  
  paypalAuthRouter.post("/orders/:orderID/capture", async (req, res) => {
    try {
      const { orderID } = req.params;
      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  });

export default paypalAuthRouter;