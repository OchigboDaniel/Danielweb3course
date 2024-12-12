// Initialise the page object to interact with metamask
const ethereumButton = document.querySelector('.enableEthereumButton');

const showAccount = document.querySelector('.showAccount');

//const showBalance = document.querySelector('.showBalance')

//Initialise the active account and chain id
let activeAccount;



// Update the account and chain id when user clicks on button
ethereumButton.addEventListener('click', async() => {
    getAccount();
 
})

//get account in the window object
async function getAccount() {
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
        if (accounts.length === 0) {
            //Metamask is loked or user has not connected any accounts
            console.log('please connect to Metamask');
        }   else {
            
            activeAccount = accounts[0];
            
            showAccount.innerHTML = activeAccount;
        }
    } catch (error){
        console.error('Error fetching account:', error.message)
    }
    
}




// Update the selected account and chain id on change
window.ethereum.on('accountsChanged', async () => {
    await getAccount();
    //if (activeAccount) {
      //  await getBalanceAndShow(activeAccount);
    //}
})
ethereum.on('chainChanged', getChainId)
