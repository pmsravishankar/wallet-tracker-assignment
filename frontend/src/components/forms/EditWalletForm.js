import React, { useState, useEffect } from 'react';

const EditWalletForm = props => {
    const [wallet, setWallet] = useState(props.currentWallet);
    const [ submitted, setSubmitted ] = useState(false)

    const handleInputChange = event => {
        const { name, value } = event.target

        setWallet({ ...wallet, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        setSubmitted(true)
        if (!wallet.date || !wallet.description || !wallet.amount || !wallet.wallet_type) return;

        props.updateWallet(wallet.id, wallet);
        setSubmitted(false)
    };

    useEffect(() => {
        setWallet(props.currentWallet);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id={wallet.id} 
                            name="name"
                            value={new Date(wallet.date).toLocaleDateString('en-US', {year:"numeric", month:"2-digit", day:"2-digit"})}
                            onChange={handleInputChange} 
                            placeholder="YYYY/MM/DD" />
                        { submitted && !wallet.date && <div className="help-block">Date is required</div> }
                        <label htmlFor="date" className="active">Date</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="description" 
                            value={wallet.description}
                            onChange={handleInputChange} />
                        { submitted && !wallet.description && <div className="help-block">Description is required</div> }
                        <label htmlFor="description" className="active">Description</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="amount" 
                            value={wallet.amount}
                            onChange={handleInputChange} />
                        { submitted && !wallet.amount && <div className="help-block">Amount is required</div> }
                        <label htmlFor="amount" className="active">Amount</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <div className="input-field col s6">
                            <label>
                                <input
                                    type="radio"
                                    name="wallet_type"
                                    value='Income'
                                    onChange={handleInputChange}
                                    checked={wallet.wallet_type === 'Income'} />
                                <span>Income</span>
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <label>
                                <input
                                    type="radio"
                                    name="wallet_type"
                                    value='Expense'
                                    onChange={handleInputChange}
                                    checked={wallet.wallet_type === 'Expense'} />
                                <span>Expense</span>
                            </label>
                        </div>
                    </div>
                    { submitted && !wallet.wallet_type && <div className="help-block">Wallet type is required</div> }
                </div>
                
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditWalletForm;
