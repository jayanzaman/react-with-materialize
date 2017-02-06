import React, { Component } from 'react';

class Introduction extends Component {
  render(){
    return (
      <div>
        <div className="card-panel">
          <span className="blue-text text-darken-4">The Fed is the gatekeeper of the U.S. economy. It is the bank of the U.S. government and, as such, it regulates the nation's financial institutions. </span>
        </div>
        <div className="card-panel">
          <span className="blue-text text-darken-4">There are 12 regional Federal Reserve Banks located in major cities around the country that operate under the supervision of the Board of Governors. Reserve Banks act as the operating arm of the central bank and do most of the work of the Fed. The banks generate their own income from four main sources:</span>
            <ol className="blue-text text-darken-4">
              <li>Services provided to banks</li>
              <li>Interest earned on government securities acquired while carrying out the work of the Federal Reserve</li>
              <li>Income from foreign currency held</li>
              <li>Interest on loans to depository institutions</li>
            </ol>
        </div>
        <div className="card-panel blue-text text-darken-4">
          <span>The Fed's mandate is "to promote sustainable growth, high levels of employment, stability of prices to help preserve the purchasing power of the dollar and moderate long-term interest rates.
          </span>
          <span>The term monetary policy refers to the actions that the Federal Reserve undertakes to influence the amount of money and credit in the U.S. economy. Changes to the amount of money and credit affect interest rates (the cost of credit) and the performance of the U.S. economy.
          </span>
        </div>
        <div className="card-panel blue-text text-darken-4">
        <p>
        The Fed has three main tools at its disposal to influence monetary policy:</p>

        <p><span className="red-text text-darken-3">Open-Market Operations - </span>The Fed constantly buys and sells U.S. government securities in the financial markets, which in turn influences the level of reserves in the banking system. These decisions also affect the volume and the price of credit (interest rates). The term open market means that the Fed doesn't independently decide which securities dealers it will do business with on a particular day. Rather, the choice emerges from an open market where the various primary securities dealers compete. Open market operations are the most frequently employed tool of monetary policy.</p>

        <p><span className="red-text text-darken-3">Setting the Discount Rate - </span>This is the interest rate that banks pay on short-term loans from a Federal Reserve Bank. The discount rate is usually lower than the federal funds rate, although they are closely related. The discount rate is important because it is a visible announcement of change in the Fed's monetary policy and it gives the rest of the market insight into the Fed's plans.</p>

        <p><span className="red-text text-darken-3">Setting Reserve Requirements - </span>This is the amount of physical funds that depository institutions are required to hold in reserve against deposits in bank accounts. It determines how much money banks can create through loans and investments. Set by the Board of Governors, the reserve requirement is usually around 10%. This means that although a bank might hold $10 billion in deposits for all of its customers, the bank lends most of this money out and, therefore, doesn't have that $10 billion on hand. Furthermore, it would be too costly to hold $10 billion in coin and bills within the bank. Excess reserves are, therefore, held either as vault cash or in accounts with the district Federal Reserve Bank Therefore, the reserve requirements ensure that depository institutions maintain a minimum amount of physical funds in their reserves.</p>
        </div>
      </div>
      )
  }
}


export default Introduction;
