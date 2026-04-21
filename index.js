const { ethers } = require("ethers");

const MINIGIGS_ADDRESS = "0x2eADE8A2C7F2561136180451545F0a4d938Ba694";
const CUSD_ADDRESS = "0x765DE816845861e75A25fCA122bb6898B8B1282a";

const MINIGIGS_ABI = [
  "function postGig(string _title, string _description, uint256 _bounty, uint256 _durationDays) external",
  "function acceptGig(uint256 _id) external",
  "function submitWork(uint256 _id, string _deliverables) external",
  "function completeGig(uint256 _id) external",
  "function cancelGig(uint256 _id) external",
  "function gigCount() public view returns (uint256)",
  "function gigs(uint256) public view returns (uint256 id, address poster, address worker, uint256 bounty, string title, string description, uint8 status, string deliverables, uint256 createdAt, uint256 deadline)",
  "function owner() public view returns (address)",
  "function withdrawFees(uint256 _amount) external",
  "event GigPosted(uint256 indexed id, address indexed poster, uint256 bounty, string title)",
  "event GigAccepted(uint256 indexed id, address indexed worker)",
  "event GigSubmitted(uint256 indexed id, string deliverables)",
  "event GigCompleted(uint256 indexed id, address indexed worker, uint256 payout)"
];

const ERC20_ABI = [
  "function approve(address spender, uint256 value) external returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "function balanceOf(address account) public view returns (uint256)"
];

/**
 * Get the MiniGigs contract instance
 * @param {ethers.Signer | ethers.Provider} signerOrProvider 
 * @returns {ethers.Contract}
 */
const getMiniGigsContract = (signerOrProvider) => {
  return new ethers.Contract(MINIGIGS_ADDRESS, MINIGIGS_ABI, signerOrProvider);
};

/**
 * Get the cUSD (Stablecoin) contract instance
 * @param {ethers.Signer | ethers.Provider} signerOrProvider 
 * @returns {ethers.Contract}
 */
const getCUSDContract = (signerOrProvider) => {
  return new ethers.Contract(CUSD_ADDRESS, ERC20_ABI, signerOrProvider);
};

module.exports = {
  MINIGIGS_ADDRESS,
  CUSD_ADDRESS,
  MINIGIGS_ABI,
  ERC20_ABI,
  getMiniGigsContract,
  getCUSDContract
};
