export const convertWeiToBalance = (strValue:any, iDecimal = 18) => {
	try {
	  const decimalFormat = parseFloat(iDecimal)
  
	  const multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, decimalFormat))
	  const convertValue = new bigdecimal.BigDecimal(String(strValue))
	  return convertValue
		.divide(multiplyNum, decimalFormat, bigdecimal.RoundingMode.DOWN())
		.toString()
	} catch (error) {
	  return 0
	}
  }

  export const unapprove = async (amount:any,accountAdd:any,tokenAddress:string) => {
	if (typeof window.ethereum !== 'undefined') {

		try {		
			const dataABI = contract(tokenAddress).methods.approve(addCon,amount).encodeABI();
		
			  const gasPrice = await window.ethereum.request({
				method: 'eth_gasPrice',
			  });
	  
			

			  const rawTx = {
				to: tokenAddress,
				from: accountAdd,
				// gas: web3.utils.toHex(80000),
				value: '0x0',
				data: dataABI,
				// nonce,
				gasPrice: web3.utils.toHex(gasPrice),
			  };
	  
			  console.log(rawTx);
	  
			const tx = await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [rawTx],
			});

			console.log('Unapprove thành công!');
			console.log('Transaction hash:', tx);


		} catch (err) {
			console.error('Có lỗi xảy ra:', err);
		}
	} else {
		console.log('Please install MetaMask!');
	}
  };

export const convertBalanceToWei = (strValue:any, iDecimal = 18) => {
	try {
	  const multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal))
	  const convertValue = new bigdecimal.BigDecimal(String(strValue))
	  return multiplyNum.multiply(convertValue).toString().split('.')[0]
	} catch (err) {
	  return 0
	}
}

const LiquidContext = createContext({ totalLiquid: 0 });

// Tạo custom hook để dễ truy cập
export const useLiquid = () => useContext(LiquidContext);

export const witdrawAndharvest = async (pid:any,amount:any,accountAdd:any) => {
	if (typeof window.ethereum !== 'undefined') {

		try {
			// const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
			// const account = accounts[0];
			// console.log('Connected account:', accounts);

			const chainId = await window.coin98.provider.request({ method: 'eth_chainId' });
			console.log('Connected to network:', chainId);

			// const web3 = new Web3(window.ethereum);

			// const pid = '42';
			
			const dataABI = contract2.methods.withdrawAndHarvest(pid, amount).encodeABI();

			// const account = '0x9031d4Dd4ca4237264F527FF6Ae0097991ba7ad1';
			// const nonce = await window.ethereum.request({
			// 	method: 'eth_getTransactionCount',
			// 	params: [account, 'latest']
			//   });
		
			  const gasPrice = await window.ethereum.request({
				method: 'eth_gasPrice',
			  });
	  
			

			  const rawTx = {
				to: addCon,
				from: accountAdd,
				// gas: web3.utils.toHex(80000),
				value: '0x0',
				data: dataABI,
				// nonce,
				gasPrice: web3.utils.toHex(gasPrice),
			  };
	  
			  console.log(rawTx);
	  
			const tx = await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [rawTx],
			});

			console.log('Deposit thành công!');
			console.log('Transaction hash:', tx);

			// const result = await contract2.methods.userInfo(pid, account).call();
			// console.log('User Info:', result);

		} catch (err) {
			console.error('Có lỗi xảy ra:', err);
		}
	} else {
		console.log('Please install MetaMask!');
	}
  };

  export const thuhoach = async (pid: any, accountAdd: any) => {
	if (typeof window.ethereum !== 'undefined') {

		try {
			// const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
			// const account = accounts[0];
			// console.log('Connected account:', accounts);
		

			const chainId = await window.coin98.provider.request({ method: 'eth_chainId' });
			console.log('Connected to network:', chainId);

			// const web3 = new Web3(window.ethereum);

			// const pid = '42';
			
			const dataABI = contract2.methods.harvest(pid).encodeABI();

			// const account = '0x9031d4Dd4ca4237264F527FF6Ae0097991ba7ad1';
			// const nonce = await window.ethereum.request({
			// 	method: 'eth_getTransactionCount',
			// 	params: [account, 'latest']
			//   });
		
			  const gasPrice = await window.ethereum.request({
				method: 'eth_gasPrice',
			  });
	  
			

			  const rawTx = {
				to: addCon,
				from: accountAdd,
				// gas: web3.utils.toHex(80000),
				value: '0x0',
				data: dataABI,
				// nonce,
				gasPrice: web3.utils.toHex(gasPrice),
			  };
	  
			  console.log(rawTx);
	  
			const tx = await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [rawTx],
			});

			console.log('Deposit thành công!');
			console.log('Transaction hash:', tx);

			// const result = await contract2.methods.userInfo(pid, account).call();
			// console.log('User Info:', result);

		} catch (err) {
			console.error('Có lỗi xảy ra:', err);
		}
	} else {
		console.log('Please install MetaMask!');
	}
  };
  
export const handleDeposit = async (pid:any,amount:any,accountAdd:any) => {
	if (typeof window.ethereum !== 'undefined') {

		try {
			// const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
			// const account = accounts[0];
			// console.log('Connected account:', accounts);
			console.log('testAccoubnt',accountAdd);
			

			const chainId = await window.coin98.provider.request({ method: 'eth_chainId' });
			console.log('Connected to network:', chainId);

			// const web3 = new Web3(window.ethereum);

			// const depositAmount = web3.utils.toWei('1', 'ether');
			// const pid = '42';

			// console.log('ttttttttttttttt',amount);
			
			

			const dataABI = contract2.methods.deposit(pid, amount).encodeABI();

			// const account = '0x9031d4Dd4ca4237264F527FF6Ae0097991ba7ad1';
			// const nonce = await window.ethereum.request({
			// 	method: 'eth_getTransactionCount',
			// 	params: [account, 'latest']
			//   });
		
			  const gasPrice = await window.ethereum.request({
				method: 'eth_gasPrice',
			  });
	  
			

			  const rawTx = {
				to: addCon,
				from: accountAdd,
				// gas: web3.utils.toHex(80000),
				value: '0x0',
				data: dataABI,
				// nonce,
				gasPrice: web3.utils.toHex(gasPrice),
			  };
	  
			  console.log(rawTx);
	  
			const tx = await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [rawTx],
			});

			console.log('Deposit thành công!');
			console.log('Transaction hash:', tx);

			// const result = await contract2.methods.userInfo(pid, account).call();
			// console.log('User Info:', result);

		} catch (err) {
			console.error('Có lỗi xảy ra:', err);
		}
	} else {
		console.log('Please install MetaMask!');
	}
  };

  export const laysodu = async (tokenAddress:any,accountAdd:any) => {
	if (typeof window.ethereum !== 'undefined') {

		try {
			// const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
			// const account = accounts[0];
			// console.log('Connected account:', accounts);
			console.log('testAccoubnt',accountAdd);
			

			const chainId = await window.coin98.provider.request({ method: 'eth_chainId' });
			console.log('Connected to network:', chainId);

			// const web3 = new Web3(window.ethereum);

			// const depositAmount = web3.utils.toWei('1', 'ether');
			// const pid = '42';

			// console.log('ttttttttttttttt',amount);
			
			

			const dataABI = contract2.methods.balanceOf(tokenAddress).encodeABI();

			// const account = '0x9031d4Dd4ca4237264F527FF6Ae0097991ba7ad1';
			// const nonce = await window.ethereum.request({
			// 	method: 'eth_getTransactionCount',
			// 	params: [account, 'latest']
			//   });
		
			  const gasPrice = await window.ethereum.request({
				method: 'eth_gasPrice',
			  });
	  
			

			  const rawTx = {
				to: addCon,
				from: accountAdd,
				// gas: web3.utils.toHex(80000),
				value: '0x0',
				data: dataABI,
				// nonce,
				gasPrice: web3.utils.toHex(gasPrice),
			  };
	  
			  console.log(rawTx);
	  
			const tx = await window.ethereum
			.request({
				method: 'eth_sendTransaction',
				params: [rawTx],
			});

			console.log('Deposit thành công!');
			console.log('Transaction hash:', tx);

			// const result = await contract2.methods.userInfo(pid, account).call();
			// console.log('User Info:', result);

		} catch (err) {
			console.error('Có lỗi xảy ra:', err);
		}
	} else {
		console.log('Please install MetaMask!');
	}
  };

export const getUserInfo = async (pid:any) => {
	const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	// console.log('Connected account:', accounts);

	const chainId = await window.coin98.provider.request({ method: 'eth_chainId' });
	console.log('Connected to network:', chainId);

	// const web3 = new Web3(window.ethereum);
	// const pid = '42';

	const result = await contract2.methods.userInfo(pid, account).call();
	return result
}



// export const withDrawandHarvest {

// }


const rewardPend = async (pid:any) => {
	const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	console.log('Connected account:', accounts);

	// const web3 = new Web3(window.ethereum);
	// const pid = '42';

	const pending = await contract2.methods.pendingReward(pid, account).call();

	return pending
}



// export const rewardPend = async (pid:any) => {
// 	const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
// 	const account = accounts[0];
// 	console.log('Connected account:', accounts);

// 	// const web3 = new Web3(window.ethereum);
// 	// const pid = '42';

// 	const result = await contract2.methods.pendingReward(pid, account).call();
	
// 	return result
// }

const web3 = new Web3('https://rpc.viction.xyz');
const chainId = 88;

const ABI = [
	{
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IVRC25[]",
				"name": "_rewardTokens",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_rewardMultipliers",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsExpiration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardPerSeconds",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_lpToken",
				"type": "address"
			}
		],
		"name": "addPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wvicAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "decimals_",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Fee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "FeeUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "harvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Harvest",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "massUpdateAllPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pids",
				"type": "uint256[]"
			}
		],
		"name": "massUpdatePools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOperator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "OperatorTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferredVRC25",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsStartTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsExpiration",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardPerSecond",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IVRC25",
				"name": "lpToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "rewarder",
				"type": "address"
			}
		],
		"name": "PoolAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsStartTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsExpiration",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardPerSecond",
				"type": "uint256"
			}
		],
		"name": "PoolSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lastRewardTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lpSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accRewardPerShare",
				"type": "uint256"
			}
		],
		"name": "PoolUpdate",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "setFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsExpiration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardPerSeconds",
				"type": "uint256"
			}
		],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "transferOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_functionSign",
				"type": "bytes4"
			}
		],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes4",
				"name": "_functionSign",
				"type": "bytes4"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timeUnlock",
				"type": "uint256"
			}
		],
		"name": "Unlock",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "updatePool",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rewardsStartTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "accRewardPerShare",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardsExpiration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastRewardTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPerSeconds",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "oldReserveBalance",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "claimedAmount",
						"type": "uint256[]"
					}
				],
				"internalType": "struct SmartBaryFactory.PoolInfo",
				"name": "pool",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawAndHarvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "tokens",
				"type": "address[]"
			}
		],
		"name": "withdrawMultiple",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "tokens",
				"type": "address[]"
			}
		],
		"name": "WithdrawMultiple",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pid",
				"type": "uint256[]"
			}
		],
		"name": "withdrawMultiplePool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "pid",
				"type": "uint256[]"
			}
		],
		"name": "WithdrawMultiplePool",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "tokens",
				"type": "address[]"
			}
		],
		"name": "withdrawPoolTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "tokens",
				"type": "address[]"
			}
		],
		"name": "WithdrawPoolTokens",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "estimateFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "getPoolInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rewardsStartTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "accRewardPerShare",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardsExpiration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastRewardTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPerSeconds",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "oldReserveBalance",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "claimedAmount",
						"type": "uint256[]"
					}
				],
				"internalType": "struct SmartBaryFactory.PoolInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "issuer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_functionSign",
				"type": "bytes4"
			}
		],
		"name": "isUnlock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "listAddedLPs",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lpToken",
		"outputs": [
			{
				"internalType": "contract IVRC25",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lpTokens",
		"outputs": [
			{
				"internalType": "contract IVRC25[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "operator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "pendingReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pending",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pools",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewarder",
		"outputs": [
			{
				"internalType": "contract SmartBaryFactoryRewarder",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardDebt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WVIC_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const contract = (tokenAddress: any) => new web3.eth.Contract(ABI, tokenAddress);
const addCon = '0x66e62620d83D9d5eeDD099B3E3589BDdb5820400'

const contract2 = new web3.eth.Contract(ABI,addCon)

interface StakeFarmProps{
	isFarm?:boolean
}

const StakeFarm = ({isFarm}:StakeFarmProps) => {
	const [account1, setAccount] = useState(''); 

	const accountAdd = async() => {
		const accounts = await window.coin98.provider.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];
		console.log('Connected account:', account);
		setAccount(account)
	}

	useEffect(() => {
		accountAdd();
	  }, []);
	
  const mockPoolInfo = {
    pid: '1',
    stakedLpAddress: '0x...',

    rewardToken: {
      address: '0x...',
      image: 'url/to/image.png',
      symbol: 'TOKEN',
      id: 'token-id',
    },
    isV2: true,
  };

  const [open, setOpen] = useState(false);

  // Hàm mở modal
  const openModal = () => {
    setOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log('Confirmed!');
    // Thực hiện hành động xác nhận ở đây
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    closeModal();
  };

  const t = useTranslations();
  const statusTabs = [
    // { label: t('Active'), count: 0 },
    // { label: t('Completed'), count: 0 },
    { label: 'Active' },
    { label: 'Completed' },
  ];

  const { params, setParams } = useFilterParams<{
    status: string;
    count: number;
  }>({ status: statusTabs[0].label, count: statusTabs[0].count });

  const configSort: TabItem[] = [
    {
      title: t('common_liquidity'),
      key: 'liquidity',
    },
    {
      title: t('common_apr'),
      key: 'apr',
    },
  ];

  // const handleClickSort = (it: TabItem) => () => {
  //   // if (it.key === params.sort) {
  //   //   setParams({ sortAsc: !params.sortAsc });
  //   // } else {
  //   //   setParams({ sortAsc: true });
  //   //   setParams({ sort: it.key });
  //   // }
  // };

  const { activeChain, localCoins } = useGlobalStore();

  // console.log("Active Chain:", activeChain);

  const { baryonApiService } = useBaryonServices();

  const [testData, setTestData] = useState([]);

  const fetchPoolInfo = async (pid:any) => {
    try {
      if (pid !== undefined) {
        const poolInfo = await contract2.methods.getPoolInfo(pid).call();
        console.log(`Pool info for pid ${pid}:`, poolInfo);
        return { pid, poolInfo };
      }
    } catch (error) {
      console.error(`Error fetching pool info for pid ${pid}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baryonApiService.base.get(ENDPOINTS.STAKE, {
          params: { chain: activeChain },
        });

        const data = response.data;
        setTestData(data);

        const poolInfoData = await Promise.all(
          data.map((item) => fetchPoolInfo(item.pid))
        );
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
    };
	

    fetchData();
  }, []);

  console.log("Chain Data:", testData);
  console.log("chaintesting",activeChain);
	
const Tokens = values(localCoins)
    .flat()
    .filter((coin) => coin.chain === `${activeChain}`);
	

//   console.log("Tokens:", Tokens);

  const coinFinder = (address: string) => {
    const tokenFinding = Tokens.find((coin: any) => coin.address === address);
    return tokenFinding;
  };
  
  const callInfoOnchain = async (tokenAddress?: string) => {
    try {
      if (tokenAddress !== undefined) {
		const balance = await contract(tokenAddress).methods.balanceOf(addCon).call();
            console.log(`Số dư của địa chỉ ${addCon} cho token ${tokenAddress}:`, balance);
			console.log('accc',account1);
			
		const allowance = await contract(tokenAddress).methods.allowance(account1, addCon).call();
		
		const balanceofUser = await contract(tokenAddress).methods.balanceOf(account1).call();
        const data = {
			balanceOfUser : balanceofUser,
          tokenAddress: tokenAddress,
          name: await contract(tokenAddress).methods.name().call(),
          symbol: await contract(tokenAddress).methods.symbol().call(),
          decimal: await contract(tokenAddress).methods.decimals().call(),
		  balance: balance,
		  allowance:allowance,
        };
		console.log('thanhtan',data);
		
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [dataHandle, setDataHandle] = useState([{}]);

  const getData = async () => {
    try {
      const dataShow = await Promise.all(
        testData.map(async (stake: any) => {
			const muti = stake.rewardMultipliers[0];
			const rewardPerSec = stake.rewardPerSeconds;
			const earnToken  = stake.rewardMultipliers;
			const timeStamp = stake.rewardsExpiration * 1000;
          const date = new Date(timeStamp);
          const [day, month, years, hours, minutes] = [
            date.getDate().toString().padStart(2, '0'),
            (date.getMonth() + 1).toString().padStart(2, '0'),
            date.getFullYear().toString(),
            date.getHours().toString().padStart(2, '0'),
            date.getMinutes().toString().padStart(2, '0'),
          ];
          const dateExpiration = `${day}/${month}/${years} ${hours}:${minutes}`;
          const stakedLpAddressData =
            coinFinder(stake.stakedLpAddress) ||
            (await callInfoOnchain(stake.stakedLpAddress));
          console.log('sdasdasdas', stake);
          const rewardTokensData = stake.rewardTokens
            ? await Promise.all(
                stake.rewardTokens.map(async (tokenAddress: any) => {
                  return (
                    coinFinder(tokenAddress) ||
                    (await callInfoOnchain(tokenAddress))
                  );
                }),
              )
            : [];
          console.log('dsad', rewardTokensData);

		const info = await getUserInfo(stake.pid)
		console.log('in4:',info)

		// console.log('per second',rewardPerSec);
		// console.log("🚀 ~ testData.map ~ muti:", muti)
		

		const pendRe = await rewardPend(stake.pid)
		console.log('Reward',pendRe)

          return {
			mutiSec:muti,
			perSec: rewardPerSec,
			date:dateExpiration,
			pendRe: pendRe,
			stakeAmount: info,
			pid: stake.pid,
			earn : earnToken,
            rewardTokens: rewardTokensData,
            stakedLpAddress: stakedLpAddressData,
          };
		  
        }),
      );
      console.log('loi', dataShow);
	  
	  

	  console.log('Dữ liệu với pid và số dư:', dataShow);
	  

      setDataHandle(dataShow);
	  
      // console.log('ngu',dataShow.map((stake:any)=>{stake.rewardTokens}))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('Data after fetching:', getData());
  }, [JSON.stringify(testData)]);

  const dataFill = dataHandle.map((staked: any) => {
	console.log('trs',staked.stakeAmount); 

	const amountStake = staked.stakeAmount
    const tokenReward = staked.rewardTokens;
	
    const tokenStake = staked.stakedLpAddress;
	const pendingRe = staked.pendRe;


	
    if (!tokenReward || tokenReward.length === 0) return null;
    const tkChose = tokenReward[0];
    // console.log('ddd',tkChose.name);
    // console.log('chose',tokenStake)
	
    const dataMoi = tokenReward.map((token: any) => {
		// console.log(tokenStake.balance);
		// console.log('sss',token.earn);
		const decimalToken = Number(token.decimal);
		const decimalTokenStake = Number(tokenStake.decimal);
		const balance1 = parseFloat(convertWeiToBalance(tokenStake.balance,decimalTokenStake))
		const balanceOfUser = parseFloat(convertWeiToBalance(tokenStake.balanceOfUser,decimalToken))
		const stakeToken = BigNumber(convertWeiToBalance(amountStake.amount,decimalTokenStake)).toNumber()
		

        return token.name === tkChose.name ? {
			allowance: BigNumber(convertWeiToBalance(tokenStake.allowance,decimalTokenStake)).toNumber(),
			balance: balanceOfUser,
			address: account1,
			balanceT:decimalToken,
			balanceSt: decimalTokenStake,
            id: staked.pid,
			nameOftokenStake : tokenStake.name,
            title: `Stake ${tokenStake.name} Earn ${token.name}`,
            tokenImage: "https://file.coin98.com/images/saros-LNsjfUWxDBp1q5V8.png",
            apr: ((staked.mutiSec * staked.perSec * 365 * 24 * 60 * 60 )/(balance1))*100,
            earn: staked.earn[0],
            endDate: staked.date,
            rewards: BigNumber(convertWeiToBalance(pendingRe, 18 + decimalToken)).toNumber(),
            poolLink: "https://www.vicscan.xyz/address/0xB786D9c8120D311b948cF1e5Aa48D8fBacf477E2",
            // stake: parseFloat(web3.utils.fromWei(amountStake.amount,'ether')),
			stake: stakeToken,
			contractAdd:addCon,
			tokenInfo:tokenStake.tokenAddress,
			liquid: balance1,
			addressTokenStake:tokenStake.tokenAddress
        } : {};
    });

	console.log('datamoi',dataMoi);

    return dataMoi;
}).flat()
.filter(Boolean);

console.log('Data Fill:', dataFill);