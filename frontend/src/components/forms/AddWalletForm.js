import React, { useState } from 'react';

const AddWalletForm = props => {

    const initialFormState = { id: null, date: '', description: '', amount: '', wallet_type: '' };
    const [wallet, setWallet] = useState(initialFormState);
    const [ submitted, setSubmitted ] = useState(false);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setWallet({ ...wallet, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        setSubmitted(true)
        if (!wallet.date || !wallet.description || !wallet.amount || !wallet.wallet_type) return;

        props.addWallet(wallet);
        setWallet(initialFormState);
        setSubmitted(false)
    };

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id="name" 
                            name="date" 
                            value={wallet.date}
                            onChange={handleInputChange} 
                            placeholder="YYYY/MM/DD"
                             />
                        { submitted && !wallet.date && <div className="help-block">Date is required</div> }
                        <label htmlFor="date">Date</label>
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
                        <label htmlFor="description">Description</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="number" 
                            name="amount" 
                            value={wallet.amount}
                            onChange={handleInputChange} 
                             />
                        { submitted && !wallet.amount && <div className="help-block">Amount is required</div> }
                        <label htmlFor="amount">Amount</label>
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
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddWalletForm;
