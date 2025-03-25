import { useState, useEffect } from "react";

const Dashboard = () => {
  // eslint-disable-next-line
  const [device, setDevice] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to request USB device access
  const requestUSBDevice = async () => {
    try {
      const devices = await (navigator as any).usb.getDevices();
      setDevice(devices);
    } catch (err) {
      console.error("Error requesting USB device:", err);
      setError(
        "Failed to access USB device. Make sure it's connected and allowed."
      );
    }
  };

  // Function to send a ZPL command
  const sendZPLCommand = async () => {
    if (!device) {
      setError(
        "No USB device connected. Please connect a Zebra printer first."
      );
      return;
    }

    try {
      await device.open();
      if (device.configuration === null) {
        await device.selectConfiguration(1);
      }

      await device.claimInterface(
        device.configuration.interfaces[0].interfaceNumber
      );

      const zplCommand = `^XA
      ^FO50,50^ADN,36,20^FDHello, ZPL!^FS
      ^XZ`;

      const encoder = new TextEncoder();
      const data = encoder.encode(zplCommand);

      await device.transferOut(1, data);
      console.log("ZPL Command sent successfully!");
    } catch (err) {
      console.error("Error sending ZPL Command:", err);
      setError(
        "Failed to send ZPL command. Ensure the printer is properly connected."
      );
    }
  };

  // Check existing devices on mount
  useEffect(() => {
    (async () => {
      const devices = await (navigator as any).usb.getDevices();
      if (devices.length > 0) {
        setDevice(devices[0]);
        console.log("Previously connected device found:", devices[0]);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Zebra Printer Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={requestUSBDevice}>Connect to USB Printer</button>
      <button
        className="cursor-pointer"
        onClick={sendZPLCommand}
        disabled={!device}
      >
        Send ZPL Command
      </button>
    </div>
  );
};

export default Dashboard;
