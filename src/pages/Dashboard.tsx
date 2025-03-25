const Dashboard = () => {
  async function sendZPLCommand() {
    try {
      const device = await (navigator as any).usb.requestDevice({
        filters: [{ vendorId: 6495 }],
      });

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
    } catch (error) {
      console.error("Error sending ZPL Command:", error);
    }
  }

  return (
    <div>
      <button onClick={sendZPLCommand}>Send ZPL Command</button>
    </div>
  );
};

export default Dashboard;
