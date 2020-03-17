import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import WalletTable from '../components/table/WalletTable';
import AddWalletForm from '../components/forms/AddWalletForm';
import EditWalletForm from '../components/forms/EditWalletForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wallets: [],
            currentWallet: { id: null, date: '', description: '', amount: '', wallet_type: '' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshWalletTable();
    }

    refreshWalletTable() {
        this.walletsData = api.get('api')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    wallets: data.data,
                    setWallets: data.data
                });
            });
    }

    addWallet = wallet => {

        api.post('api', qs.stringify(wallet))
            .then(res => {
                this.refreshWalletTable();
            });
    };

    deleteWallet = id => {

        api.delete(`api/${id}`)
            .then(res => {
                this.refreshWalletTable();
            });
    };

    updateWallet = (id, wallet) => {
        
        api.put(`api/${id}`, qs.stringify(wallet))
            .then(res => {

                this.refreshWalletTable();
            });
        
        this.setState({ 
            currentWallet: { id: null, date: '', description: '', amount: '', wallet_type: '' }
        });

        this.setEditing(false);
    };

    editRow = wallet => {

        this.setState({ 
            currentWallet: { id: wallet.id, date: wallet.date, description: wallet.description, amount: wallet.amount, wallet_type: wallet.wallet_type  }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { wallets } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                <h4>Edit Wallet</h4>
                                <EditWalletForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentWallet={this.state.currentWallet}
                                    updateWallet={this.updateWallet} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Add wallet</h4>
                                <AddWalletForm addWallet={this.addWallet} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>View Wallets</h5>
                        <WalletTable wallets={wallets} editRow={this.editRow} deleteWallet={this.deleteWallet} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;