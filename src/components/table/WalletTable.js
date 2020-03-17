import React from 'react';

const WalletTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </thead>
    <tbody>
        {
            props.wallets.length > 0 ? (
                props.wallets.map (wallet => (

                    <tr key={wallet.id}>
                        <td>{wallet.id}</td>
                        <td>{new Date(wallet.date).toLocaleDateString('en-US', {year:"numeric", month:"2-digit", day:"2-digit"})}</td>
                        <td>{wallet.description}</td>
                        <td>{wallet.amount}</td>
                        <td>{wallet.wallet_type}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(wallet)}>
                                edit
                            </button>

                            {/*<button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteWallet(wallet.id)}>
                                delete
                            </button>*/}
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.wallets[0]} No Wallets</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default WalletTable;